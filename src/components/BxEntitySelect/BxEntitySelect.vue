<template>
  <bx-popup v-bind:is-visible="isVisibleLocal">
    <div class="container">
      <div class="form-content">
        <div class="search-container">
          <div class="search-panel">
            <input>
          </div>
          <div class="search-result">
            <div class="search-item"
                 v-for="(item, index) in items"
                 v-on:click="selectItem(index)"
            >
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="selected-container">
          <div class="selected-item"
               v-for="(item, index) in selectedItems"
          >
            <span
              class="selected-item-remove"
              v-on:click="removeSelected(index)">
              &#10008;
            </span>
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="button-container">
        <bx-button class="btn-success" v-on:click.native="apply">
          {{ okButtonText }}
        </bx-button>
        <bx-button class="btn-link btn-danger" v-on:click.native="cancel">
          {{ cancelButtonText }}
        </bx-button>
      </div>
    </div>
  </bx-popup>
</template>

<script>
  import BxButton from "../BxButton/BxButton";
  import BxPopup from "../BxPopup/BxPopup";

  export default {
    name: "bx-entity-select",
    components: {
      BxPopup,
      BxButton
    },
    props: {
      isVisible: {
        type: Boolean,
        default: false
      },
      okButtonText: {
        type: String,
        default: 'Ok'
      },
      cancelButtonText: {
        type: String,
        default: 'Cancel'
      },
      items: {
        type: Array,
        default: function () {
          return [];
        }
      },
      defaultItems: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data() {
      return {
        isVisibleLocal: this.isVisible,
        selectedItems: JSON.parse(JSON.stringify(this.defaultItems))
      }
    },
    methods: {
      apply() {
        this.$emit('apply', JSON.parse(JSON.stringify(this.selectedItems)));
      },
      cancel() {
        this.$emit('cancel');
      },
      selectItem(index) {
        if (!this.selectedItems.find((item) => this.items[index].id == item.id)) {
          this.selectedItems.push(this.items[index]);
        }
      },
      removeSelected(index) {
        this.selectedItems.splice(index, 1);
      }
    },
    watch: {
      isVisible(newValue, oldValue) {
        this.isVisibleLocal = newValue;
      }
    }
  }
</script>

<style>
  .container {
    width: 560px;
    background-color: #fff;
    padding: 10px;
    font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .form-content {
    display: flex;

  }

  .search-panel input {
    border: 1px solid #b0b0b0;
    border-right-color: #e2e2e2;
    border-bottom-color: #e2e2e2;
    height: 15px;
    padding: 2px 0;
    margin: 0 0 7px;
    width: 100%;
  }

  .search-result {
    height: 200px;
    width: 370px;
    border: 1px solid #cccccc;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
  }

  .search-item {
    height: 20px;
    width: 160px;
    margin: 3px;
    padding: 5px;
    cursor: pointer;
  }

  .search-item:hover {
    background-color: #f0f0f0;
  }

  .selected-container {
    background-color: #f5f5f5;
    border: 1px solid #e2e2e2;
    padding: 5px 5px 5px 6px;
    width: 170px;
    margin-left: 10px;
    max-height: 218px;
    overflow-y: auto;
  }

  .selected-item {
    height: 16px;
    margin: 3px;
    padding: 5px;
  }

  .selected-item-remove {
    margin-right: 5px;
    opacity: 0.2;
    cursor: pointer;
  }

  .selected-item-remove:hover {
    opacity: 1;
  }

  .button-container {
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }
</style>