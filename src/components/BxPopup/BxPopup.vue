<!-- https://ru.vuejs.org/v2/examples/modal.html -->
<template>
  <transition name="modal">
    <div class="modal-mask" v-bind:class="{ 'popup-invisible': !isVisibleLocal }">
      <div class="modal-wrapper" v-bind:class="{ 'popup-invisible': !isVisibleLocal }">
        <div class="popup">
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'bx-popup',
    components: {
    },
    props: {
      isVisible: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        isVisibleLocal: this.isVisible
      }
    },
    computed: {
    },
    methods: {
    },
    watch: {
      isVisible(newValue, oldValue) {
        this.isVisibleLocal = newValue;
      }
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .05);
    transition: opacity .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-wrapper {
  }

  .popup {
    display:inline-block;
    box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
    margin: 0px auto;
    background-color: #fff;
  }

  .popup-invisible {
    display: none;
  }
</style>