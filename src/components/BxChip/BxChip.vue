<template>
  <span v-if="href" class="chip">
    <a class="chip-link" :href="href" target="_blank">
      <slot></slot>
    </a>
    <span v-if="close" class="chip-close" v-on:click="onClose()">&#10008;</span>
  </span>
  <span v-else class="chip">
    <slot></slot>
    <span v-if="close" class="chip-close" v-on:click="onClose()">&#10008;</span>
  </span>
</template>

<script>
  export default {
    name: "bx-chip",
    props: {
      href: {
        type: String,
        default: null
      },
      close: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClose() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .chip {
    font: 15px/17px "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 7px;
  }

  .chip-link {
    color: #2067b0;
    text-decoration: none;
    transition: border-bottom-color 0.2s linear;
  }

  .chip-close {
    opacity: 0.2;
    cursor: pointer;
  }

  .chip-close:hover {
    opacity: 1;
  }
</style>