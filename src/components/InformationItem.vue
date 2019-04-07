<template>
  <div>
    <h3>{{this.itemName}}</h3>
    <div class="data">{{this.itemValue()}}</div>
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

<style scoped>
h3 {
  font-family: "Ubuntu";
  border-bottom: 1px solid white;
  color: white;
  margin: 0;
}

.data {
  margin: 10px 0px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  color: grey;
}
</style>

