<template>
  <div class="progress-list">
    <div class="progress-list__item" v-for="item in progressData" :key="item.key">
      <h2 class="progress-list__title">{{ item.name }}</h2>
      <div class="progress-list__content">
        <GoalBar :progressValue="item"/>
        <MoodStatistics class="progress-list__mood-line"
                        :data="item.colorsValue"/>
      </div>
    </div>
  </div>
</template>

<script>
import GoalBar from '../components/progress/GoalBar';
import MoodStatistics from "../components/progress/MoodStatistics";

export default {
  name: "ProgressList",
  components: {
    GoalBar,
    MoodStatistics
  },
  computed: {
    progressData() {
      return this.$store.getters.getProgressData;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setProgressData", []);
    next();
  }
}
</script>

<style lang="scss" scoped>
.progress-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat-Regular", Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #272727;
  margin-top: 90px;

  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 550px;
    background-color: #fff;
    box-shadow: 0 1px 12px -4px #bababa;
    border-radius: 10px;
    flex-wrap: wrap;
    padding: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  &__title {
    width: 100%;
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__mood-line {
    width: 350px;
    height: 380px;
    margin-left: 15px;
  }
}
</style>