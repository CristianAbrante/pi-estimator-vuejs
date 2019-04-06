<template>
  <div id="app">
    <Canvas v-bind:radius="radius" v-bind:estimator="estimator"/>
    <button @click="startAproximation">start</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import Estimator from "./estimator/PiEstimator.js";
import Canvas from "./components/Canvas.vue";

export default {
  name: "app",
  components: {
    Canvas
  },
  data() {
    return {
      radius: 150,
      estimator: null
    };
  },
  methods: {
    reset() {
      this.estimator.reset();
    },
    startAproximation() {
      this.estimator.addRandomPoint();
      console.log(this.estimator.getEstimatedPiValue());
    }
  },
  mounted() {
    this.estimator = new Estimator(this.radius);
  }
};
</script>
