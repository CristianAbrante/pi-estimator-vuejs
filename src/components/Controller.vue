<template>
  <div class="buttons">
    <button @click="addHandler">Add point</button>
    <button
      @click="playHandler"
      v-bind:class="{resume: this.getResumeClass(), pause: this.getPauseClass()}"
    >{{this.getPlayButtonText()}}</button>
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
    },
    getResumeClass() {
      return this.reproductionHasBeenActivated && !this.reproductionIsActive;
    },
    getPauseClass() {
      return this.reproductionHasBeenActivated && this.reproductionIsActive;
    }
  }
};
</script>

<style scoped>
.buttons {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
.buttons button {
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  padding: 10px;
  background: #2ce8d8;
  border-radius: 5px;
  box-shadow: 0px 1px 5px grey;
  color: #1799e8;
  border: none;
}

.buttons button:hover {
  cursor: pointer;
}

.buttons .resume {
  background: #ffcb05;
}

.buttons .pause {
  background: #f23c50;
  color: white;
}
</style>


