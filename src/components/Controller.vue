<template>
  <div>
    <button @click="addHandler">Add point</button>
    <button @click="playHandler">Play</button>
    <button @click="resetHandler">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    addHandler: Function,
    playHandler: Function,
    resetHandler: Function
  }
};
</script>

