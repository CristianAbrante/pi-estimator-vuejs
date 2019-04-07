<template>
  <div id="app">
    <Canvas v-bind:radius="radius" v-bind:estimator="estimator"/>
    <Controller
      :reproductionHasBeenActivated="reproductionHasBeenActivated"
      :reproductionIsActive="reproductionIsActive"
      :addHandler="onAddPoint"
      :playHandler="onPlay"
      :resetHandler="onReset"
    />
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
      reproductionHasBeenActivated: false,
      reproductionIsActive: false,
      executionTimer: null
    };
  },
  methods: {
    onAddPoint() {
      if (!this.reproductionIsActive) {
        this.estimator.addRandomPoint();
      }
    },
    onPlay() {
      if (!this.reproductionHasBeenActivated) {
        this.reproductionHasBeenActivated = true;
      }
      if (!this.reproductionIsActive) {
        this.reproductionIsActive = true;
        this.executionTimer = setInterval(
          () => this.estimator.addRandomPoint(),
          50
        );
      } else {
        this.reproductionIsActive = false;
        clearInterval(this.executionTimer);
      }
    },
    onReset() {
      this.reproductionHasBeenActivated = false;
      this.reproductionIsActive = false;
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
