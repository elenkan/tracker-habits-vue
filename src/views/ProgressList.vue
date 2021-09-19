<template>
  <div class="progress-list">
    <div class="progress-list__item" v-for="item in progressData" :key="item.key">
      <h2 class="progress-list__title">{{ item.name }}</h2>
      <GoalBar :progressValue="item.value"/>
      <MoodStatistics class="progress-list__mood-line"
                      :data="item.colorsValue"/>
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
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat-Regular", Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #272727;

  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #89ccc5;
    border-radius: 10px;
    flex-wrap: wrap;
    padding: 10px;
    margin-right: 20px;
  }

  &__title {
    width: 100%;
    margin-bottom: 20px;
  }

  &__mood-line {
    width: 350px;
    height: 380px;
    margin-left: 20px;
  }
}
</style>