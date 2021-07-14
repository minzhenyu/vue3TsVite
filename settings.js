
// 配置地址 
module.exports = {
  /**
   * @description 网站标题
   */
  title: 'Hexinfo DataFlow',
  /**
   * @description 是否显示 tagsView
   */
  tagsView: true,
  /**
   * @description 固定头部
   */
  fixedHeader: true,
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: true,
  /**
   * @description token key
   */
  TokenKey: 'HEXINFO-TOKEN',
  /**
   * @description reFreshToken key
   */
  RefreshTokenKey: 'DATAFLOW-REFRESHTOKEN',
  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,
  /**
   * @description 是否显示logo
   */
  sidebarLogo: true,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2019 <a href="http://www.goupwith.com" target="_blank">上海致宇信息技术有限公司</a>',
  /**
   * 备案号
   */
  caseNumber: '',
  //  外链打方式设置  true 新开(默认)  false 刷新
  target: true
}
