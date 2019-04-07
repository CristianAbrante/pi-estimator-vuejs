<template>
  <div id="app">
    <Canvas v-bind:radius="radius" v-bind:estimator="estimator"/>
    <Controller :addHandler="onAddPoint" :playHandler="onPlay" :resetHandler="onReset"/>
    <Information v-bind:estimator="estimator"/>
  </div>
</template>

<script>
import Estimator from "./estimator/PiEstimator.js";
import Canvas from "./components/Canvas.vue";
import Controller from "./components/Controller.vue";
import Information from "./components/Information.vue";

export default {
  name: "app",
  components: {
    Canvas,
    Controller,
    Information
  },
  data() {
    return {
      radius: 150,
      estimator: null,
      reproductionActivated: false,
      execution: null
    };
  },
  methods: {
    onAddPoint() {
      if (!this.reproductionActivated) {
        this.estimator.addRandomPoint();
      }
    },
    onPlay() {
      if (!this.reproductionActivated) {
        this.reproductionActivated = true;
        this.execution = setInterval(
          () => this.estimator.addRandomPoint(),
          100
        );
      } else {
        this.reproductionActivated = false;
        clearInterval(this.execution);
      }
    },
    onReset() {
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
