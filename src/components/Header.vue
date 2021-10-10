<template>
  <div class="page-header">
    <v-toolbar
        class="header"
        width="100%"
        max-height="48px"
        :color="isHomePage ? '#fff' : '#89ccc5'"
        dense>
      <v-app-bar-nav-icon
          v-if="!isHomePage"
          @click.stop="showMenu=!showMenu"/>
      <v-toolbar-title class="header__title">Трекер привычек</v-toolbar-title>

      <v-spacer></v-spacer>

      <authorization-form v-if="isHomePage"/>

    </v-toolbar>

    <v-navigation-drawer
        v-if="!isHomePage"
        v-model="showMenu"
        class="navigation"
        absolute
        temporary>
      <v-list-item>
        <v-list-item-avatar>
          Logo
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in labels"
            :key="item.label"
            link>
          <!--            <v-list-item-icon>-->
          <!--              <v-icon>{{ item.icon }}</v-icon>-->
          <!--            </v-list-item-icon>-->

          <v-list-item-content>
            <v-list-item-title @click.stop="item.clickFunction">{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import AuthorizationForm from "./AuthorizationForm";

export default {
  name: "Header",
  components: {
    AuthorizationForm
  },
  data() {
    return {
      labels: [
        {clickFunction: this.showProgressList, label: "Прогресс"},
        {clickFunction: this.createHabit, label: "Создать привычку"},
        {clickFunction: this.showHabitsList, label: "Зачекать привычку"},
        {clickFunction: this.clc, label: "Настройки"},
        {clickFunction: this.logout, label: "Выйти"}],
      showMenu: false
    }
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
    isShowNavigation() {
      return this.$store.getters.getIsShowNavigation;
    }
  },
  methods: {
    createHabit() {
      this.$router.push({name: "createHabit"});
    },
    showHabitsList() {
      this.$router.push({name: "habitsList"});
    },
    showProgressList() {
      this.$router.push({name: "progressList"});
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({name: "Home"});
    },
    clc() {
      return console.log("click");
    }
  }
}

</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &__title {
    font-family: "Raleway-Bold", Arial, sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: #272727;
  }
}

.navigation {
  text-align: left;
  color: #000;
  font-family: "Raleway-Medium", Arial, sans-serif;
  font-size: 20px;
  line-height: 20px;
  width: 240px;
  margin-top: 48px;

  li {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #000;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
  }
}
</style>