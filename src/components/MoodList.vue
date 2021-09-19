<template>
  <div class="mood">
    <h3 class="mood__title">Настроение:</h3>
    <ul class="mood-list">
      <li class="mood-list__item" v-for="item in list" :key="item.color">
        <span class="mood-list__color" :style="{backgroundColor: item.color}" @click="setColor(item.color)"></span>
        <span class="mood-list__mood">{{ item.mood }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import lists from "/lists.json";

export default {
  name: "MoodList",
  data() {
    return {
      list: lists.moodList
    }
  },
  methods: {
    setColor(color) {
      this.$store.commit("setColorMood", color);
    }
  }
}

</script>

<style scoped lang="scss">
.mood {
  border: 2px solid #89ccc5;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(50% - 177px);
  right: 15px;
  font-family: "Montserrat-Regular", Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #272727;
  border-radius: 10px;
  padding: 10px;
}
.mood__title {
  margin-bottom: 20px;
  font-family: "Raleway-Medium", Arial, sans-serif;
}

.mood-list {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: black;
  }
}

.mood-list__color {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
}

</style>