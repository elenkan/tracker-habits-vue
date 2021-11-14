<template>
  <div class="goal-bar">
    <div class="goal-bar__circle">
      <h3 class="goal-bar__title">Прогресс выполнения</h3>
      <v-progress-circular
          :value="progressValue.value"
          color="teal"
          size="100">{{ progressValue.value + '%' }}
      </v-progress-circular>
    </div>
    <div class="goal-bar__days">
      Завершено дней <span>{{ progressValue.completedDays }}</span>{{ ` / ${progressValue.period}` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "GoalBar",
  props: {
    progressValue: Object
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

  &__title {
    margin-bottom: 10px;
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 18px;
    line-height: 18px;
  }

  &__circle {
    background-color: #d7ebe9;
    padding: 15px;
    border-radius: 10px;
  }

  &__days {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #d7ebe9;
    width: 100%;

    span {
      font-weight: bold;
    }
  }
}
</style>