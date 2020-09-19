Vue.component('modal', {
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="box">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
    <button class="modal-close is-large" @click="$emit('close')"></button>
</div>`
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})