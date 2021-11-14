<template>
  <v-form class="habit-form" ref="habitForm">
    <span class="habit-form__title">Создать новую привычку</span>
    <v-text-field
        class="habit-form__item"
        v-model="name"
        color="#89ccc5"
        placeholder="Название привычки"
        dense
        outlined/>
    <v-text-field
        class="habit-form__item"
        v-model="description"
        color="#89ccc5"
        placeholder="Описание"
        dense
        outlined/>
    <div class="habit-form__period">
      <span>Выбрать период:</span>
      <v-btn-toggle
          class="habit-form__buttons-group"
          v-model="countDays"
          color="#89ccc5"
          borderless
          group>
        <v-btn :value="21"
               class="habit-form__button">21 день
        </v-btn>
        <v-btn
            :value="30"
            class="habit-form__button">30 дней
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-btn class="habit-form__button habit-form__button--save"
           color="#e2958c"
           depressed
           @click="saveHabit">Сохранить
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "CreateHabit",
  data() {
    return {
      name: "",
      description: "",
      countDays: 21
    }
  },
  beforeMount() {
    if (this.changeableHabit) {
      //добавить цикл
      this.name = this.changeableHabit.name;
      this.description = this.changeableHabit.description;
      this.countDays = this.changeableHabit.countDays;
    }
  },
  computed: {
    changeableHabit() {
      return this.$store.getters.getChangeableHabit;
    },
    habitList() {
      return this.$store.getters.getHabitsList;
    }
  },
  methods: {
    saveHabit() {
      const habit = {
        name: this.name,
        description: this.description,
        id: this.changeableHabit ? this.changeableHabit.id : `${Math.random() * 2 * Math.random()}`,
        period: this.countDays
      };
      if (this.changeableHabit) {
        const change = this.habitList.find(item => item.id === this.changeableHabit.id);
        for (let key in change) {
          change.name = habit.name;
          change.description = habit.description;
          change.countDays = habit.countDays;
        }
        this.$store.commit("setChangeableHabit", null);
        this.$router.push({name: "habitsList"})
      } else {
        this.habitList.push(habit);
        this.$refs.habitForm.reset();
      }
    }
  }
}
</script>

<style scoped lang="scss">
.habit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 400px;
  padding: 25px 60px 25px;
  box-sizing: border-box;
  font-family: "Montserrat-Regular", Arial, sans-serif;
  font-size: 20px;
  line-height: 28px;
  background-color: #fff;
  box-shadow: 0 1px 12px -4px #bababa;

  &__title {
    display: inline-block;
    margin-bottom: 30px;
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #272727;
  }

  &__period {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      display: inline-block;
      font-family: "Montserrat-Regular", Arial, sans-serif;
      font-size: 16px;
      width: 100%;
      margin-bottom: 15px;
      color: #272727;
    }
  }

  &__buttons-group {
    margin-bottom: 15px;
  }

  &__button {
    font-family: "Montserrat-Regular", Arial, sans-serif;
    font-size: 16px;

    &--save {
      margin-bottom: 0;
    }
  }
}

.v-text-field {
  width: 100%;
  max-height: 60px;
}

::v-deep .v-input__slot fieldset {
  color: #89ccc5 !important;
}

::v-deep .v-btn__content {
  color: #272727;
}
</style>