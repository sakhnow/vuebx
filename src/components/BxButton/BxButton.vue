<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "bx-button",
  }
</script>

<style scoped>
  .btn {
    box-shadow: none;
    border: none;
    color: #535c69;
    height: 39px;
    line-height: 39px;
    cursor: pointer;
    font-family: "OpenSans-Bold", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    outline: none;
    padding: 0 18px;
    vertical-align: middle;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    white-space: nowrap;
  }

  .btn-success {
    background: #bbed21;
  }

  .btn-success:hover {
    background: #d2f95f;
  }

  .btn-danger {
    background: #fae5e8;
    color: #d0011b;
  }

  .btn-link {
    background-color: transparent;
  }

  .btn-link:hover {
    color: #333;
  }

  .btn-danger.btn-link {
    background-color: transparent;
    color: #d0011b;
  }
</style>