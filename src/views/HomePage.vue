<template>
  <div class="home-page">
    <p></p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    // goToHabitForm() {
    //   this.$store.commit("setShowAuthForm", true);
    // }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  //width: 100%;
  //height: 100%;
  background-color: #d7ebe9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__btn {
    font-family: "Raleway-Bold", Arial, sans-serif;
    font-size: 20px;
    line-height: 20px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    color: #000 !important;
    background-color: #e2958c !important;
  }
}
</style>