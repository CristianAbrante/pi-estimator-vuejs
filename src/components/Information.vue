<template>
  <div class="information">
    <InformationItem
      v-for="(infoItem, index) in infoItems"
      v-bind:key="index"
      v-bind:itemName="infoItem.name"
      v-bind:itemValue="infoItem.value"
    />
  </div>
</template>

<script>
import Estimator from "./../estimator/PiEstimator";
import InformationItem from "./InformationItem.vue";

export default {
  props: {
    estimator: Estimator
  },
  components: {
    InformationItem
  },
  data() {
    return {
      infoItems: [
        {
          name: "Total Points",
          value: () => (this.estimator ? this.estimator.getTotalPoints() : 0)
        },
        {
          name: "Points inside circle",
          value: () =>
            this.estimator ? this.estimator.getPointsInsideCircle() : 0
        },
        {
          name: "Real Pi Value",
          value: () => Math.PI
        },
        {
          name: "Estimated Pi value",
          value: () =>
            this.estimator ? this.estimator.getEstimatedPiValue() : 0.0
        }
      ]
    };
  }
};
</script>

<style scoped>
.information {
  background: #00d9ff;
  width: 80%;
  padding: 10px;
  border-radius: 5px;
}
</style>

