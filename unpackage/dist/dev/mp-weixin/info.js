"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      isLoggedIn: false,
      userInfo: new UTSJSONObject({
        name: "陈朴浩",
        id: "202405721336"
      })
    };
  },
  onLoad() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = common_vendor.index.getStorageSync("token");
      this.isLoggedIn = !!token;
      if (this.isLoggedIn) {
        this.getUserInfo();
      }
    },
    getUserInfo() {
    },
    handleLoginAction() {
      if (this.isLoggedIn) {
        common_vendor.index.showModal(new UTSJSONObject({
          title: "提示",
          content: "确定要退出登录吗？",
          success: (res) => {
            if (res.confirm) {
              common_vendor.index.removeStorageSync("token");
              this.isLoggedIn = false;
              common_vendor.index.showToast({
                title: "已退出登录",
                icon: "none"
              });
            }
          }
        }));
      } else {
        common_vendor.index.navigateTo({
          url: "./login",
          fail: (err) => {
            common_vendor.index.__f__("error", "at pages/index/info.uvue:128", "页面跳转失败", err);
            common_vendor.index.showToast({
              title: "页面跳转失败",
              icon: "none"
            });
          }
        });
      }
    },
    handleMenuClick(type = null) {
      switch (type) {
        case "contact":
          common_vendor.index.showToast({
            title: "联系我们",
            icon: "none"
          });
          break;
        case "agreement":
          common_vendor.index.showToast({
            title: "用户协议",
            icon: "none"
          });
          break;
        case "privacy":
          common_vendor.index.showToast({
            title: "隐私条款",
            icon: "none"
          });
          break;
      }
    },
    switchPage(page = null) {
      if (page === "index") {
        common_vendor.index.redirectTo({
          url: "./index",
          fail: (err) => {
            common_vendor.index.__f__("error", "at pages/index/info.uvue:168", "页面跳转失败", err);
            common_vendor.index.showToast({
              title: "页面跳转失败",
              icon: "none"
            });
          }
        });
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isLoggedIn
  }, !$data.isLoggedIn ? {
    b: common_assets._imports_0$2
  } : {
    c: common_assets._imports_0$2,
    d: common_vendor.t($data.userInfo.name),
    e: common_vendor.t($data.userInfo.id)
  }, {
    f: common_vendor.o(($event) => $options.handleMenuClick("contact")),
    g: common_vendor.o(($event) => $options.handleMenuClick("agreement")),
    h: common_vendor.o(($event) => $options.handleMenuClick("privacy")),
    i: common_vendor.t($data.isLoggedIn ? "退出登录" : "登录"),
    j: common_vendor.o((...args) => $options.handleLoginAction && $options.handleLoginAction(...args)),
    k: common_assets._imports_1$1,
    l: common_vendor.o(($event) => $options.switchPage("index")),
    m: common_assets._imports_2$1,
    n: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/info.js.map
