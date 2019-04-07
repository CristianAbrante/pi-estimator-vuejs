<template>
  <div>
    <button @click="addHandler">Add point</button>
    <button @click="playHandler">{{this.getPlayButtonText()}}</button>
    <button @click="resetHandler">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    addHandler: Function,
    playHandler: Function,
    resetHandler: Function,
    reproductionHasBeenActivated: Boolean,
    reproductionIsActive: Boolean
  },
  methods: {
    getPlayButtonText() {
      if (!this.reproductionHasBeenActivated) {
        return "Play";
      } else {
        if (this.reproductionIsActive) {
          return "Pause";
        } else {
          return "Resume";
        }
      }
    }
  }
};
</script>

