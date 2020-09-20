window.EventDispatcher = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            EventDispatcher.fire('applied');
        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        EventDispatcher.listen('applied', () => this.couponApplied = true);
    }

});