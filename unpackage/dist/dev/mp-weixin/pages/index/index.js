"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const info = () => "./info2.js";
const _sfc_main = common_vendor.defineComponent({
  computed: {
    info() {
      return info;
    }
  },
  data() {
    return {
      currentTab: "countdown",
      todayLessons: 0,
      currentDate: "2025/05/13",
      currentWeek: "13",
      currentPage: "index",
      onlyExams: true,
      // 添加左滑相关的变量
      swipeDistance: 0,
      isVisible: false,
      examList: [
        new UTSJSONObject({
          title: "数据结构",
          type: "考试",
          date: "2025/06/09 19:30-21:30",
          weekday: "星期一",
          location: "计算中心B307",
          daysLeft: 24
        }),
        new UTSJSONObject({
          title: "离散数学",
          type: "考试",
          date: "2025/06/12 10:30-12:30",
          weekday: "星期四",
          location: "尚美楼二阶梯",
          daysLeft: 27
        }),
        new UTSJSONObject({
          title: "计算机组成与体系结构",
          type: "考试",
          date: "2025/06/16 10:30-12:30",
          weekday: "星期一",
          location: "北山二阶梯",
          daysLeft: 31
        }),
        new UTSJSONObject({
          title: "大学外语2",
          type: "考试",
          date: "2025/06/19 14:00-16:00",
          weekday: "星期四",
          location: "逸夫楼二阶",
          daysLeft: 34
        }),
        new UTSJSONObject({
          title: "国家安全教育",
          type: "考试",
          date: "2025/06/19 16:30-18:30",
          weekday: "星期四",
          location: "逸夫楼一阶",
          daysLeft: 34
        })
      ],
      examSwipeState: new UTSJSONObject({}),
      startX: 0,
      currentIndex: null,
      isSwiping: false
    };
  },
  onLoad() {
    this.getCurrentDate();
    this.getExamData();
  },
  methods: {
    // 获取考试数据
    getExamData() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
      });
    },
    // 重置其他条目
    resetOthers(e = null) {
      if (!this.isSwiping && Object.keys(this.examSwipeState).length > 0) {
        this.examSwipeState = new UTSJSONObject({});
      }
    },
    // 滑动变化事件处理
    touchStart(e = null, index = null) {
      this.startX = e.changedTouches[0].clientX;
      this.currentIndex = index;
      this.isSwiping = true;
      Object.keys(this.examSwipeState).forEach((key) => {
        if (Number(key) !== index && this.examSwipeState[key] !== 0) {
          this.$set(this.examSwipeState, key, 0);
        }
      });
    },
    // 触摸结束事件
    touchEnd(e = null, index = null) {
      const endX = e.changedTouches[0].clientX;
      const distance = endX - this.startX;
      if (distance < -50) {
        this.$set(this.examSwipeState, index, -120);
      } else if (distance > 50 || distance > -50 && distance < 50 && this.examSwipeState[index] === -120) {
        this.$set(this.examSwipeState, index, 0);
      }
      this.isSwiping = false;
    },
    // 置顶项目
    pinItem(index = null) {
      const item = this.examList[index];
      this.examList.splice(index, 1);
      this.examList.unshift(item);
      this.examSwipeState = new UTSJSONObject({});
      common_vendor.index.showToast({
        title: "已置顶",
        icon: "none"
      });
    },
    // 删除项目
    deleteItem(index = null) {
      const item = this.examList[index];
      if (item.type === "考试") {
        common_vendor.index.showToast({
          title: "考试项目不可删除",
          icon: "none"
        });
        this.$set(this.examSwipeState, index, 0);
        return null;
      }
      common_vendor.index.showModal({
        title: "确认删除",
        content: `确定要删除"${item.title}"吗？`,
        success: (res) => {
          if (res.confirm) {
            this.examList.splice(index, 1);
            const newState = new UTSJSONObject({});
            Object.keys(this.examSwipeState).forEach((key) => {
              if (Number(key) < index) {
                newState[key] = this.examSwipeState[key];
              } else if (Number(key) > index) {
                newState[Number(key) - 1] = this.examSwipeState[key];
              }
            });
            this.examSwipeState = newState;
            common_vendor.index.showToast({
              title: "已删除",
              icon: "none"
            });
          } else {
            this.$set(this.examSwipeState, index, 0);
          }
        }
      });
    },
    // 切换标签页时重置所有滑动状态
    switchTab(tab = null) {
      this.currentTab = tab;
      this.examSwipeState = new UTSJSONObject({});
    },
    // 添加倒计时
    addCountdown() {
      common_vendor.index.showToast({
        title: "添加倒计时功能待实现",
        icon: "none"
      });
    },
    // 切换筛选器
    toggleFilter() {
      this.onlyExams = !this.onlyExams;
    },
    switchPage(page = null) {
      if (page === this.currentPage)
        return null;
      if (page === "index") {
        if (UTS.arrayPop(getCurrentPages()).route === "pages/index/index") {
          this.currentPage = "index";
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/index/index",
            fail: (err) => {
              common_vendor.index.__f__("error", "at pages/index/index.uvue:359", "页面跳转失败", err);
              common_vendor.index.showToast({
                title: "页面跳转失败",
                icon: "none"
              });
            }
          });
        }
      } else if (page === "info") {
        common_vendor.index.navigateTo({
          url: "/pages/index/info",
          success: () => {
            this.currentPage = "info";
          },
          fail: (err) => {
            common_vendor.index.__f__("error", "at pages/index/index.uvue:375", "页面跳转失败", err);
            common_vendor.index.showToast({
              title: "页面跳转失败",
              icon: "none"
            });
          }
        });
      }
    },
    // 跳转到对应的页面
    navigateTo(url = null) {
      common_vendor.index.navigateTo({
        url,
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/index/index.uvue:390", "页面跳转失败", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    // 获取当前日期
    getCurrentDate() {
      const date = /* @__PURE__ */ new Date();
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      this.currentDate = `${year}/${month}/${day}`;
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.navigateTo("/pages/classroom/index")),
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.navigateTo("/pages/grades/index")),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => $options.navigateTo("/pages/schedule/index")),
    g: $data.currentTab === "schedule" ? 1 : "",
    h: common_vendor.o(($event) => $options.switchTab("schedule")),
    i: $data.currentTab === "countdown" ? 1 : "",
    j: common_vendor.o(($event) => $options.switchTab("countdown")),
    k: $data.currentTab === "schedule"
  }, $data.currentTab === "schedule" ? common_vendor.e({
    l: common_vendor.t($data.todayLessons),
    m: common_vendor.t($data.todayLessons),
    n: common_vendor.t($data.currentDate),
    o: common_vendor.t($data.currentWeek),
    p: $data.todayLessons > 0
  }, $data.todayLessons > 0 ? {} : {
    q: common_assets._imports_3
  }) : {}, {
    r: $data.currentTab === "countdown"
  }, $data.currentTab === "countdown" ? {
    s: common_vendor.o((...args) => $options.addCountdown && $options.addCountdown(...args)),
    t: $data.onlyExams ? 1 : "",
    v: common_vendor.o((...args) => $options.toggleFilter && $options.toggleFilter(...args)),
    w: common_vendor.f($data.examList, (exam, index, i0) => {
      return {
        a: common_vendor.t(exam.title),
        b: common_vendor.t(exam.type),
        c: common_vendor.t(exam.date),
        d: common_vendor.t(exam.weekday),
        e: common_vendor.t(exam.location),
        f: common_vendor.t(exam.daysLeft),
        g: common_vendor.o(($event) => $options.touchStart($event, index), index),
        h: common_vendor.o(($event) => $options.touchEnd($event, index), index),
        i: common_vendor.o(($event) => $options.pinItem(index), index),
        j: common_vendor.o(($event) => $options.deleteItem(index), index),
        k: `translateX(${$data.examSwipeState[index] || 0}px)`,
        l: index
      };
    }),
    x: common_vendor.o((...args) => $options.resetOthers && $options.resetOthers(...args))
  } : {}, {
    y: common_assets._imports_4,
    z: common_assets._imports_5,
    A: common_vendor.o(($event) => $options.switchPage("info")),
    B: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
