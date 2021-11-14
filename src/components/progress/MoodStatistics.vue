<template>
  <div class="mood-statistics">
    <h3 class="mood-statistics__title">График настроения</h3>
    <v-sparkline
        :value="data"
        :gradient="colorsList"
        :smooth="radius || false"
        :padding="padding"
        label-size="12"
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
        <span class="description-list__color" :style="{'background-color': item.color}"></span>
        <span class="description-list__name">{{ item.mood }}</span>
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 18px;
    line-height: 18px;
  }
}

.description-list {
  display: flex;
  justify-content: flex-start;
  width: 300px;
  max-height: 100px;
  flex-wrap: wrap;
  margin-top: 15px;
  padding-left: 0;

  &__item {
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 10px;
    line-height: 10px;
    margin-bottom: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;

    span {
      display: inline-block;
      width: 85px;
      height: 5px;
      font-size: 11px;
    }
  }
  &__color {
    margin-bottom: 5px;
  }
}
</style>