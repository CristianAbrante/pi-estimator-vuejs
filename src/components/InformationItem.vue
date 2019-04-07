<template>
  <div>
    <h3>{{this.itemName}}</h3>
    <div>{{this.itemValue()}}</div>
  </div>
</template>

<script>
export default {
  props: {
    itemName: String,
    itemValue: Function
  }
};
</script>
