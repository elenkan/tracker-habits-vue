<template>
  <div class="goal-bar">
    <v-progress-circular
        :value="progressValue"
        color="teal"
        size="100">{{ progressValue + '%' }}
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "GoalBar",
  props: {
    progressValue: Number
  },
  data() {
    return {
      interval: {},
      value: 0,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.goal-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>