window.Event = new Vue();

Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,
    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => this.couponApplied = true);
    }

});