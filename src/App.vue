<template>
  <div id="app">
    <Header/>
    <mood-list v-if="showMoodList"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MoodList from "./components/MoodList";
import Header from "./components/Header";

export default {
  components: {
    MoodList,
    Header
  },
  computed: {
    showMoodList() {
      return this.$route.name === "habitsList";
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat-Light";
  src: url("./../src/assets/fonts/Montserrat-Light.woff2") format("woff2"),
  url("./../src/assets/fonts/Montserrat-Light.woff") format("woff"),
  url("./../src/assets/fonts/Montserrat-Light.ttf") format("truetype");
}

@font-face {
  font-family: "Montserrat-Regular";
  src: url("../src/assets/fonts/Montserrat-Regular.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-Regular.woff") format("woff"),
  url("../src/assets/fonts/Montserrat-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Raleway-Bold";
  src: url("../src/assets/fonts/Raleway-Bold.woff2") format("woff2"),
  url("../src/assets/fonts/Raleway-Bold.woff") format("woff"),
  url("../src/assets/fonts/Raleway-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Raleway-Medium";
  src: url("../src/assets/fonts/Raleway-Medium.woff2") format("woff2"),
  url("../src/assets/fonts/Raleway-Medium.woff") format("woff"),
  url("../src/assets/fonts/Raleway-Medium.ttf") format("truetype");
}

html, body {
  height: 100vh;
}

#app {
  font-family: "Montserrat-Regular", Arial, sans-serif;
  text-align: center;
  color: #fff;
  // background:linear-gradient(to right top, #b2648b, #bf8cb1, #ceb3d1, #e2daeb, #ffffff);
  font-size: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

ul {
  list-style: none;
}

.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  //margin-top: 50px;
}
</style>
