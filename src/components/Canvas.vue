<template>
  <canvas ref="canvas">Canvas not supported in your browser</canvas>
</template>

<script>
import PiEstimator from "./../estimator/PiEstimator.js";

export default {
  props: {
    radius: Number,
    estimator: PiEstimator,
    onReset: Function
  },
  data() {
    return {
      ctx: null
    };
  },
  methods: {
    drawPoint(point, inside) {
      if (point !== undefined) {
        this.ctx.fillStyle = inside ? "#0000FF" : "#00FF00";
        this.ctx.fillRect(point.x, point.y, 3, 3);
      }
    },
    reset() {
      this.ctx.clearRect(0, 0, 2 * this.radius, 2 * this.radius);
      this.ctx.strokeStyle = "grey";
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI);
      this.ctx.stroke();
    }
  },
  watch: {
    "estimator.pointsInsideCircle": function() {
      const pointsInsideCircle = this.estimator.pointsInsideCircle;
      if (pointsInsideCircle.length === 0) {
        this.reset();
      } else {
        const lastPoint = pointsInsideCircle[pointsInsideCircle.length - 1];
        this.drawPoint(lastPoint, true);
      }
    },
    "estimator.pointsOutsideCircle": function() {
      const pointsOutsideCircle = this.estimator.pointsOutsideCircle;
      if (pointsOutsideCircle.length === 0) {
        this.reset();
      } else {
        const lastPoint = pointsOutsideCircle[pointsOutsideCircle.length - 1];
        this.drawPoint(lastPoint, false);
      }
    }
  },
  mounted() {
    this.$refs["canvas"].width = 2 * this.radius;
    this.$refs["canvas"].height = 2 * this.radius;
    this.ctx = this.$refs["canvas"].getContext("2d");
    this.reset();
  }
};
</script>

<style scoped>
canvas {
  border: 3px solid grey;
  background: white;
}
</style>

