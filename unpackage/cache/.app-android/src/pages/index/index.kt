@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIBE9A480
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
open class GenPagesIndexIndex : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {
            console.log("校园服务页面加载完成", " at pages/index/index.uvue:96")
            this.getCurrentDate()
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return createElementVNode("view", utsMapOf("class" to "container"), utsArrayOf(
            createElementVNode("view", utsMapOf("class" to "service-cards"), utsArrayOf(
                createElementVNode("view", utsMapOf("class" to "service-card"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "service-icon")),
                    createElementVNode("text", utsMapOf("class" to "service-name"), "空教室")
                )),
                createElementVNode("view", utsMapOf("class" to "service-card"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "service-icon", "src" to "/static/icons/trophy.png")),
                    createElementVNode("text", utsMapOf("class" to "service-name"), "查成绩")
                )),
                createElementVNode("view", utsMapOf("class" to "service-card"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "service-icon", "src" to "/static/icons/calendar.png")),
                    createElementVNode("text", utsMapOf("class" to "service-name"), "课程表")
                ))
            )),
            createElementVNode("view", utsMapOf("class" to "tab-container"), utsArrayOf(
                createElementVNode("view", utsMapOf("class" to "tab-header"), utsArrayOf(
                    createElementVNode("view", utsMapOf("class" to normalizeClass(utsArrayOf(
                        "tab-item",
                        utsMapOf("active" to (_ctx.currentTab === "schedule"))
                    ))), utsArrayOf(
                        createElementVNode("text", utsMapOf("class" to "tab-text"), "课程表")
                    ), 2),
                    createElementVNode("view", utsMapOf("class" to normalizeClass(utsArrayOf(
                        "tab-item",
                        utsMapOf("active" to (_ctx.currentTab === "countdown"))
                    ))), utsArrayOf(
                        createElementVNode("text", utsMapOf("class" to "tab-text"), "倒计时")
                    ), 2)
                )),
                if (_ctx.currentTab === "schedule") {
                    createElementVNode("view", utsMapOf("key" to 0, "class" to "schedule-content"), utsArrayOf(
                        createElementVNode("view", utsMapOf("class" to "schedule-header"), utsArrayOf(
                            createElementVNode("view", utsMapOf("class" to "date-circle"), utsArrayOf(
                                createElementVNode("text", utsMapOf("class" to "date-number"), toDisplayString(_ctx.todayLessons), 1)
                            )),
                            createElementVNode("view", utsMapOf("class" to "date-info"), utsArrayOf(
                                createElementVNode("text", utsMapOf("class" to "date-day"), "TUE."),
                                createElementVNode("text", utsMapOf("class" to "date-lessons"), "今日共" + toDisplayString(_ctx.todayLessons) + "节课", 1)
                            )),
                            createElementVNode("view", utsMapOf("class" to "semester-info"), utsArrayOf(
                                createElementVNode("text", utsMapOf("class" to "date-full"), toDisplayString(_ctx.currentDate), 1),
                                createElementVNode("text", utsMapOf("class" to "week-info"), "第" + toDisplayString(_ctx.currentWeek) + "周", 1)
                            ))
                        )),
                        if (_ctx.todayLessons > 0) {
                            createElementVNode("view", utsMapOf("key" to 0, "class" to "schedule-body"))
                        } else {
                            createElementVNode("view", utsMapOf("key" to 1, "class" to "empty-schedule"), utsArrayOf(
                                createElementVNode("image", utsMapOf("class" to "empty-image", "src" to "/static/piggy.png")),
                                createElementVNode("text", utsMapOf("class" to "empty-text"), "今天没有课哦~")
                            ))
                        }
                    ))
                } else {
                    createCommentVNode("v-if", true)
                }
            )),
            createElementVNode("view", utsMapOf("class" to "tab-bar"), utsArrayOf(
                createElementVNode("view", utsMapOf("class" to "tab-bar-item active"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "tab-bar-icon", "src" to "/static/icons/home-active.png")),
                    createElementVNode("text", utsMapOf("class" to "tab-bar-text"), "首页")
                )),
                createElementVNode("view", utsMapOf("class" to "tab-bar-item"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "tab-bar-icon", "src" to "/static/icons/user.png")),
                    createElementVNode("text", utsMapOf("class" to "tab-bar-text"), "我的")
                ))
            ))
        ))
    }
    open var title: String by `$data`
    open var currentTab: String by `$data`
    open var todayLessons: Number by `$data`
    open var currentDate: String by `$data`
    open var currentWeek: String by `$data`
    open var serviceCards: UTSArray<UTSJSONObject> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return utsMapOf("title" to "校园服务", "currentTab" to "schedule", "todayLessons" to 0, "currentDate" to "2025/05/13", "currentWeek" to "13", "serviceCards" to utsArrayOf(
            object : UTSJSONObject() {
                var title = "空教室"
                var image = "/static/icons/classroom.png"
                var url = "/pages/classroom/index"
            },
            object : UTSJSONObject() {
                var title = "查成绩"
                var image = "/static/icons/trophy.png"
                var url = "/pages/grades/index"
            },
            object : UTSJSONObject() {
                var title = "课程表"
                var image = "/static/icons/calendar.png"
                var url = "/pages/schedule/index"
            }
        ))
    }
    open var getCurrentDate = ::gen_getCurrentDate_fn
    open fun gen_getCurrentDate_fn() {
        val date = Date()
        val year = date.getFullYear()
        val month = ("0" + (date.getMonth() + 1)).slice(-2)
        val day = ("0" + date.getDate()).slice(-2)
        this.currentDate = "" + year + "/" + month + "/" + day
    }
    companion object {
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            normalizeCssStyles(utsArrayOf(
                styles0
            ), utsArrayOf(
                GenApp.styles
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return utsMapOf("container" to padStyleMapOf(utsMapOf("flexDirection" to "column", "width" to "750rpx", "backgroundColor" to "#f5f5f5")), "header" to padStyleMapOf(utsMapOf("paddingTop" to "30rpx", "paddingRight" to "30rpx", "paddingBottom" to "30rpx", "paddingLeft" to "30rpx", "backgroundColor" to "#ffffff", "width" to "750rpx", "alignItems" to "center")), "title" to padStyleMapOf(utsMapOf("fontSize" to "36rpx", "color" to "#333333", "fontWeight" to "bold")), "service-cards" to padStyleMapOf(utsMapOf("marginTop" to "-50rpx", "width" to "750rpx", "height" to "250rpx", "flexDirection" to "row", "justifyContent" to "space-around", "alignItems" to "center", "backgroundColor" to "#f66b6b", "borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomRightRadius" to "30rpx", "borderBottomLeftRadius" to "30rpx", "paddingTop" to "20rpx", "paddingRight" to "20rpx", "paddingBottom" to "20rpx", "paddingLeft" to "20rpx", "boxShadow" to "0 4rpx 10rpx rgba(0, 0, 0, 0.1)")), "service-card" to padStyleMapOf(utsMapOf("alignItems" to "center", "justifyContent" to "center", "width" to "180rpx", "height" to "160rpx")), "service-icon" to padStyleMapOf(utsMapOf("width" to "100rpx", "height" to "100rpx", "marginBottom" to "10rpx")), "service-name" to padStyleMapOf(utsMapOf("fontSize" to "28rpx", "color" to "#ffffff")), "tab-container" to padStyleMapOf(utsMapOf("marginTop" to "20rpx", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to "20rpx", "borderTopRightRadius" to "20rpx", "borderBottomRightRadius" to "20rpx", "borderBottomLeftRadius" to "20rpx", "width" to "710rpx", "marginLeft" to "20rpx", "marginRight" to "20rpx", "paddingBottom" to "30rpx", "flex" to 1)), "tab-header" to padStyleMapOf(utsMapOf("flexDirection" to "row", "justifyContent" to "flex-start", "borderBottomWidth" to "1rpx", "borderBottomColor" to "#eeeeee", "paddingTop" to "30rpx")), "tab-item" to utsMapOf("" to utsMapOf("marginLeft" to "50rpx", "marginRight" to "50rpx", "paddingBottom" to "10rpx", "position" to "relative"), ".active:after" to utsMapOf("content" to "\"\"", "position" to "absolute", "bottom" to 0, "left" to 0, "right" to 0, "height" to "6rpx", "backgroundColor" to "#f66b6b", "borderTopLeftRadius" to "3rpx", "borderTopRightRadius" to "3rpx", "borderBottomRightRadius" to "3rpx", "borderBottomLeftRadius" to "3rpx")), "tab-text" to utsMapOf("" to utsMapOf("fontSize" to "30rpx", "color" to "#333333", "paddingBottom" to "10rpx"), ".tab-item.active " to utsMapOf("color" to "#f66b6b", "fontWeight" to "bold")), "schedule-header" to padStyleMapOf(utsMapOf("flexDirection" to "row", "paddingTop" to "30rpx", "paddingRight" to "30rpx", "paddingBottom" to "30rpx", "paddingLeft" to "30rpx", "alignItems" to "center")), "date-circle" to padStyleMapOf(utsMapOf("width" to "80rpx", "height" to "80rpx", "backgroundColor" to "#f5f5f5", "borderTopLeftRadius" to "40rpx", "borderTopRightRadius" to "40rpx", "borderBottomRightRadius" to "40rpx", "borderBottomLeftRadius" to "40rpx", "justifyContent" to "center", "alignItems" to "center")), "date-number" to padStyleMapOf(utsMapOf("fontSize" to "40rpx", "fontWeight" to "bold")), "date-info" to padStyleMapOf(utsMapOf("flex" to 1, "marginLeft" to "20rpx", "flexDirection" to "column", "justifyContent" to "center")), "date-day" to padStyleMapOf(utsMapOf("fontSize" to "32rpx", "fontWeight" to "bold", "color" to "#f66b6b")), "date-lessons" to padStyleMapOf(utsMapOf("fontSize" to "24rpx", "color" to "#666666", "marginTop" to "5rpx")), "semester-info" to padStyleMapOf(utsMapOf("flexDirection" to "column", "alignItems" to "flex-end")), "date-full" to padStyleMapOf(utsMapOf("fontSize" to "26rpx", "color" to "#333333")), "week-info" to padStyleMapOf(utsMapOf("fontSize" to "24rpx", "color" to "#666666", "marginTop" to "5rpx")), "empty-schedule" to padStyleMapOf(utsMapOf("alignItems" to "center", "justifyContent" to "center", "paddingTop" to "50rpx", "paddingRight" to "50rpx", "paddingBottom" to "50rpx", "paddingLeft" to "50rpx")), "empty-image" to padStyleMapOf(utsMapOf("width" to "200rpx", "height" to "200rpx", "marginBottom" to "20rpx")), "empty-text" to padStyleMapOf(utsMapOf("fontSize" to "28rpx", "color" to "#999999")), "tab-bar" to padStyleMapOf(utsMapOf("width" to "750rpx", "height" to "100rpx", "backgroundColor" to "#ffffff", "flexDirection" to "row", "justifyContent" to "space-around", "alignItems" to "center", "position" to "fixed", "bottom" to 0, "left" to 0, "borderTopWidth" to "1rpx", "borderTopColor" to "#eeeeee")), "tab-bar-item" to padStyleMapOf(utsMapOf("flex" to 1, "alignItems" to "center", "justifyContent" to "center")), "tab-bar-icon" to padStyleMapOf(utsMapOf("width" to "50rpx", "height" to "50rpx", "marginBottom" to "5rpx")), "tab-bar-text" to utsMapOf("" to utsMapOf("fontSize" to "24rpx", "color" to "#999999"), ".tab-bar-item.active " to utsMapOf("color" to "#f66b6b")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = utsMapOf()
        var emits: Map<String, Any?> = utsMapOf()
        var props = normalizePropsOptions(utsMapOf())
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf()
        var components: Map<String, CreateVueComponent> = utsMapOf()
    }
}
