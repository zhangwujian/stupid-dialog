import Vue from 'vue';
import Main from './dialog/dialog.vue';
let DialogConstructor = Vue.extend(Main);
let instance;

const Dailog = function (options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    instance = new DialogConstructor({
        data: options
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
    instance.visible = true;
};

export default Dailog;
