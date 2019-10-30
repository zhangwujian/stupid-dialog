# stupid-dialog

> A simple plugin for dialog with Vue project

> Plugin name:  stupid-dialog

> version: 1.1.1

## How to use
* NPM install the stupid-dialog plugin
```node
	npm install stupid-dialog --save
```
#### import the plugin and use
* main.js
``` javascript 
import Dialog from 'stupid-dialog';
Vue.prototype.$dialog = Dialog;
```

* xxx.vue
``` javascript 
this.$dialog('Hello Word'); // When the value is String, the dialog default type is toast
```
or
``` javascript 
this.$dialog({
	type: 'toast',
	message: 'Hello Word'
});
```
#### 配置参数
| value | direction | type | default |
| -------- | :----- | :-----: |  :----:  |
| type | dialog‘s type(toast/alert/confirm) | String | 'toast' |
| message | dialog‘s content(necessary) | String | - |
| title | (type=alert/confirm) | String | - |
| position | position | String/Number | 'center' |
| duration | toast's duration | Number | 1500 |
| mask | need mask | Boolean | true |
| closeOnMask | can close by mask(type=alert/confirm) | Boolean | true |
| preventScroll | prevent touchmove | Boolean | true |
| dialogClass | dialog‘s class name | String | - |
| confirmText | confirm button | String | '确定' |
| cancelText | cancel button | String | '取消' |
| confirmFn | function after confirm(type=alert/confirm) | Function | - |
| cancelFn | function after cancel(type=confirm) | Function | - |
| beforeClose | function in the end(all types) | Function | - |
ps：1、If position's type is String,the value in top、center、bottom.Or Number(n),and n>=0,the dialog is n+'px' from the top,n<0,it is -n+'px' from the bottom.

#### You can change the plugin's style by rewrite css
| class | direction |
| ----- | :--- |
| dialog-content-mask | mask |
| dialog-confirm | alert/confirm |
| dialog-title | titile |
| dialog-message | content |
| dialog-action | action |
| action-cancel | cancel button |
| action-confirm | confirm button |
| dialog-toast | toast |
