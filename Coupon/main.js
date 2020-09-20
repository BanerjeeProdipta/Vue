Vue.component('coupon', {
    template: `
    <input placeholder="Apply Coupon" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
})

new Vue({
    el: '#root',
    methods: {
        onCouponApplied() {
            alert('Coupon Applied!');
        }
    }
});