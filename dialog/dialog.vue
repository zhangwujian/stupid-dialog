<template>
    <transition name="dialog-fade" @after-leave="handleAfterLeave">
        <div v-show="visible" ref="dialog" :class="['dialog-content', {'dialog-content-mask' : mask}, {'dialog-content-dark': dark}]" :key="'dialog'" :data-state="closeOnMask" @click="closeMask">
            <div v-if="type === 'alert' || type === 'confirm'" :class="['dialog-container', 'dialog-confirm', dialogClass]">
                <div v-if="title" class="dialog-title">{{title}}</div>
                <div class="dialog-message">{{message}}</div>
                <div class="dialog-action">
                    <div v-if="type === 'confirm'" class="action-cancel" @click="onCancel">{{cancelText}}</div>
                    <div class="action-confirm" @click="onConfirm">{{confirmText}}</div>
                </div>
            </div>
            <div v-else :class="['dialog-container', 'dialog-toast', dialogClass]">
                <div class="dialog-message">{{message}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
require('./dialog.css');
export default {
    name: 'StupidDialog',
    data () {
        return {
            visible: false,
            title: '',
            message: '',
            position: 'center',
            duration: 2200,
            type: 'toast',
            mask: true,
            dark: false,
            closeOnMask: true,
            preventScroll: true,
            dialogClass: '',
            confirmText: '确定',
            cancelText: '取消',
            confirmFn: Function,
            cancelFn: Function,
            beforeClose: Function
        };
    },
    mounted () {
        this.configDialog();
        if (this.preventScroll) {
            document.body.addEventListener('touchmove', this.preventHandle, { passive: false });
        }
        if (this.type === 'toast') {
            this.toastClose();
        }
    },
    methods: {
        // 销毁实例 删除DOM
        handleAfterLeave () {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        configDialog () {
            let content = this.$refs.dialog.style;
            let {position} = this;
            if (typeof (position) === 'number' || /^\d+$/.test(position)) {
                let p = Number(position);
                let d = Math.abs(p) + 'px';
                let flex = p > 0 ? 'flex-start' : 'flex-end';
                let padding = p > 0 ? d + ' 0 0' : '0 0 ' + d;
                content.alignItems = flex;
                content.padding = padding;
            } else if (position === 'top' || position === 'bottom') {
                let flex = position === 'top' ? 'flex-start' : 'flex-end';
                content.alignItems = flex;
            }
        },
        onCancel () {
            if (typeof (this.cancelFn) === 'function') {
                this.cancelFn();
            } else {
                console.warn('cancelFn is not a function');
            }
            this.closeDialog();
        },
        onConfirm () {
            if (typeof (this.confirmFn) === 'function') {
                this.confirmFn();
            } else {
                console.warn('confirmFn is not a function');
            }
            this.closeDialog();
        },
        closeMask (e) {
            let state = e.target.dataset.state;
            if (state) {
                this.onCancel();
                this.closeDialog();
            }
        },
        toastClose () {
            if (this.duration > 0) {
                setTimeout(() => {
                    if (this.visible) {
                        this.closeDialog();
                    }
                }, this.duration);
            }
        },
        closeDialog () {
            if (this.preventScroll) {
                document.body.removeEventListener('touchmove', this.preventHandle, { passive: false });
            }
            if (typeof (this.beforeClose) === 'function') {
                this.beforeClose();
            } else {
                console.warn('beforeClose is not a function');
            }
            this.visible = false;
        },
        preventHandle (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
</script>
