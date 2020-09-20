Vue.component('progress-view', {
    data() {
        return { completionRate: 20 };
    }
});

new Vue({
    el: '#root'
})