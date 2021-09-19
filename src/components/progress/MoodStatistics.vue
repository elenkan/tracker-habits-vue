<template>
  <div class="mood-statistics">
    <v-sparkline
        :value="data"
        :gradient="colorsList"
        :smooth="radius || false"
        :padding="padding"
        height="210"
        gradient-direction="left"
        stroke-linecap="round"
        auto-draw>
      <template v-slot:label="item">
        {{ item.value }}%
      </template>
    </v-sparkline>
    <ul class="description-list">
      <li class="description-list__item"
          v-for="item in dataList"
          :key="item.id">
        <span :style="{'background-color': item.color}"></span>{{ item.mood }}
      </li>
    </ul>
  </div>
</template>

<script>
import list from "../../../lists.json";

export default {
  name: "MoodStatistics",
  props: {
    data: Array,
  },
  data() {
    return {
      fill: true,
      padding: 8,
      radius: 10,
      width: 2,
      dataList: list.moodList.slice()
    }
  },
  computed: {
    moodData() {
      return list.moodList.slice();
    },
    colorsList() {
      return this.moodData.map(item => {
        Object.assign({}, item);
        return item.color;
      });
    }
  }
}
</script>

<style scoped lang="scss">
.mood-statistics {
  max-width: 600px;
  height: 300px;
  background-color: #d7ebe9;
  border-radius: 10px;
  padding: 10px;
}

.description-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 100px;
  flex-wrap: wrap;
  margin-top: 15px;

  &__item {
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 10px;
    line-height: 10px;
    margin-bottom: 10px;

    span {
      display: inline-block;
      width: 50px;
      height: 5px;
      margin-right: 5px;
    }
  }
}
</style>