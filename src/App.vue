<template>
  <div id="app">
    <button @click="startAproximation">start</button>
  </div>
</template>

<script>
import Estimator from "./estimator/PiEstimator.js";

export default {
  name: "app",
  data() {
    return {
      estimator: new Estimator()
    };
  },
  methods: {
    startAproximation() {
      for (let i = 0; i < 1000000; i++) {
        this.estimator.addRandomPoint();
      }
      console.log(this.estimator.getEstimatedPiValue());
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
