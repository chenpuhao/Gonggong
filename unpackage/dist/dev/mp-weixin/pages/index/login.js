"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "login",
  setup(__props) {
    const studentId = common_vendor.ref("");
    const password = common_vendor.ref("");
    const showPassword = common_vendor.ref(false);
    const handleLogin = () => {
      common_vendor.index.__f__("log", "at pages/index/login.uvue:49", "登录", studentId.value, password.value);
    };
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_assets._imports_0$1,
        b: studentId.value,
        c: common_vendor.o(($event = null) => {
          return studentId.value = $event.detail.value;
        }),
        d: showPassword.value ? "text" : "password",
        e: password.value,
        f: common_vendor.o(($event = null) => {
          return password.value = $event.detail.value;
        }),
        g: showPassword.value ? "/static/images/eye-open.png" : "/static/images/eye-close.png",
        h: common_vendor.o(togglePassword),
        i: common_vendor.o(handleLogin),
        j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b35f379"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/login.js.map
