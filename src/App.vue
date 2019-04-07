<template>
  <div id="app" class="container">
    <div class="title">
      <h1>Pi estimator</h1>
      <p>Estimator of Pi using a Monte Carlo method.</p>
    </div>
    <div class="estimator">
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
      if (!this.reproductionIsActive) {
        this.reproductionHasBeenActivated = false;
        this.reproductionIsActive = false;
      }
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

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu:700");

body {
  background: #297eff;
}

.container {
  width: 40vw;
  margin: auto;
}

.title {
  text-align: center;
}

.title h1 {
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-size: 3rem;
  margin: 20px 0 0;
  padding: 0;
  border-bottom: 1px solid white;
}

.title p {
  margin: 5px 0 15px;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
}

.estimator {
  border-radius: 15px;
  background: white;
  box-shadow: 0px 5px 8px grey;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
}
</style>
