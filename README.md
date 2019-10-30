# stupid-dialog

> 一个简单的vue弹窗组件

> 组件:  stupid-dialog

> 版本: 1.1.3

[English document](./EnglishREADME.md)
## 使用方法
* 通过NPM下载安装
```node
	npm install stupid-dialog --save
```
#### 通过import或者require在 main.js 中导入组件,在需要使用弹窗的页面调用方法
* main.js
``` javascript 
import Dialog from 'stupid-dialog';
Vue.prototype.$dialog = Dialog;
```

* 某vue文件
``` javascript 
this.$dialog('这是一个简单的小弹窗'); // 只传字符串时，默认弹窗类型为toast
```
或
``` javascript 
this.$dialog({
	type: 'toast',
	message: '这是一个简单的小弹窗'
});
```
#### 配置参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | :----- | :-----: |  :----:  |
| type | 弹窗类型(可选：toast/alert/confirm) | String | 'toast' |
| message | 弹窗内容(必传值) | String | - |
| title | 弹窗的标题(type=alert/confirm) | String | - |
| position | 弹窗位置 | String/Number | 'center' |
| duration | toast持续时间 | Number | 1500 |
| mask | 是否有背景蒙板 | Boolean | true |
| closeOnMask | 是否可点击蒙板关闭弹窗(type=alert/confirm) | Boolean | true |
| preventScroll | 弹窗出现时是否阻止背景滑动 | Boolean | true |
| dialogClass | 自定义class | String | - |
| confirmText | 确定按钮文本 | String | '确定' |
| cancelText | 取消按钮文本 | String | '取消' |
| confirmFn | 点击’确定‘后回调(type=alert/confirm) | Function | - |
| cancelFn | 点击’取消‘后回调(type=confirm) | Function | - |
| beforeClose | 弹窗关闭前的回调(all types) | Function | - |
注：1、position值为String时可选值：top/center/bottom，为Number时可能值n：n>=0时距离顶部npx,n<0时距离底部-npx

#### 组件样式粗糙，没有样式配置，有样式需求请根据class覆盖样式
| class | 说明 |
| ----- | :--- |
| dialog-content-mask | 蒙板 |
| dialog-confirm | alert/confirm |
| dialog-title | 标题 |
| dialog-message | 内容 |
| dialog-action | 操作 |
| action-cancel | 取消按钮 |
| action-confirm | 确定按钮 |
| dialog-toast | toast |
