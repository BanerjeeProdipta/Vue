Vue.component('modal', {
    data() {
        return {
            isVisible: true
        }
    },
    template: `
    <div class="modal is-active" v-show="isVisible">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="header"></slot>
        </p>
        <button class = "delete" aria-label = "delete" @click="isVisible= false" ></button> 
      </header>
      <section class="modal-card-body">
        <slot>Default content.</slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
            <button class="button is-success">Default button</button>
        </slot>
      </footer>
    </div>
  </div>
  `
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})