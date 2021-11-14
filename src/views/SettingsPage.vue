<template>
  <div class="setting">
    <v-tabs v-model="settingItem"
            background-color="transparent"
            color="#89ccc5"
            grow
            centered>
      <v-tab v-for="item in headers"
             :key="item">
        {{ item }}
      </v-tab>
      <v-tab-item class="setting__item">
        <span class="setting-account">Удалить аккаунт</span>
        <v-btn class="setting-account__button">Удалить</v-btn>
      </v-tab-item>
      <v-tab-item class="setting__item">
        <span class="setting-theme">Темная тема</span>
        <v-switch v-model="isDark"/>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
  data() {
    return {
      isDark: false,
      headers: ["Аккаунт", "Темы"],
      settingItem: null
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  display: inline-block;
  border-radius: 10px;
  width: 400px;
  min-height: 300px;
  box-sizing: border-box;
  font-family: "Montserrat-Regular", Arial, sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #272727;
  background-color: #fff;
  box-shadow: 0 1px 12px -4px #bababa;

  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    padding: 10px 0;
    background-color: transparent;
  }
}
</style>