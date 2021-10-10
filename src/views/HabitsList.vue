<template>
  <div class="habits-page">
    <ul class="habits-list">
      <habit-item v-for="habit in habitsList"
                  :habit="habit"
                  :key="habit.id" />
    </ul>
  </div>
</template>

<script>
import HabitItem from "../components/HabitItem";

export default {
  name: "HabitsList",
  components: { HabitItem },
  computed: {
    habitsList() {
      console.log(this.$store.getters.getHabitsList)
      return this.$store.getters.getHabitsList;
    }
  }
}
</script>

<style scoped lang="scss">
.habits-page {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.habits-list {
  display: flex;
  flex-direction: column;
  //width: calc(100% - 450px);
  border-collapse: collapse;
  margin-top: 80px;
  margin-bottom: 40px;
}
</style>