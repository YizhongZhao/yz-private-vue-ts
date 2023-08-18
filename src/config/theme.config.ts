/**
 * @Author: yizhongZhao
 * @Date: 2022年8月10日17:23:41
 * @Description: 主题相关配置
 * @warning:
 */

// 定义配置项形状
interface IThemeConfig {
    // 布局方式
    layout: LayOutStyle,
    // 是否开启标签页
    showTabsBar: boolean,
    // 标签页样式
    tabsBarStyle?: TabsBarStyle,
    // 是否开启刷新组件
    showRefresh: boolean,
    // 是否开启请求进度条
    showNProgress: boolean,
    // 是否开启黑暗模式
    darkModeOpen: boolean,
}

// 布局方式枚举
enum LayOutStyle {
    HORIZONTAL = 'horizontal',//横向布局
    VERTICAL = 'vertical',//纵向布局
    COMMON = 'common'//常规布局
}

// 标签页样式枚举
enum TabsBarStyle {
    CARD = 'card',
    SMOOTH = 'smooth'
}


// 初始化配置
export const themeConfig: IThemeConfig = {
    layout: LayOutStyle.COMMON,
    showTabsBar: false,
    showRefresh: false,
    showNProgress: true,
    darkModeOpen: true
}