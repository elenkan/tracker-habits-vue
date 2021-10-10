<template>
  <v-dialog class="auth"
            v-model="showAuthForm"
            overlay-color="#d7ebe9"
            max-width="400px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn-toggle v-model="auth"
                    background-color="black"
                    rounded
                    group>
        <v-btn @click="isNewUser=true"
               v-bind="attrs"
               v-on="on"
               depressed
               class="auth__button">Регистрация</v-btn>
        <v-btn @click="isNewUser=false"
               v-bind="attrs"
               v-on="on"
               depressed
               class="auth__button">Войти</v-btn>
      </v-btn-toggle>
    </template>
    <v-card class="auth-form">
      <!--      <v-card-title>-->
      <!--        <span class="auth__title">{{ isNewUser ? "Зарегистрироваться" : "Войти" }}</span>-->
      <!--      </v-card-title>-->
      <v-card-text>
        <v-btn class="auth-form__guest-button"
               color="#89ccc5"
               @click="showQuestMode"
               outlined
               depressed>Войти как гость</v-btn>
        <span class="auth-form__divider">Или</span>
        <v-text-field
            v-if="isNewUser"
            class="auth-form__field"
            placeholder="Имя"
            v-model="name"
            hide-details
            dense
            required
            outlined/>
        <v-text-field
            placeholder="Email"
            v-model="userEmail"
            class="auth-form__field"
            hide-details
            dense
            required
            outlined/>
        <v-text-field
            placeholder="Password"
            v-model="userPassword"
            class="auth-form__field"
            hide-details
            type="password"
            dense
            outlined
            required/>
      </v-card-text>
      <v-card-actions>
        <v-btn
            class="auth-form__button"
            width="100%"
            color="#e2958c"
            text
            outlined
            @click="saveData">
          {{ isNewUser ? "Зарегистрироваться" : "Войти" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AuthorizationForm",
  data() {
    return {
      isNewUser: false,
      auth: false,
      userPassword: null,
      userEmail: null,
      name: null
    }
  },
  computed: {
    showAuthForm: {
      get() {
        return this.$store.getters.getShowAuthForm;
      },
      set(newVal) {
        this.$store.commit("setShowAuthForm", newVal);
      }
    }
  },
  methods: {
    saveData() {
      const userData = {
        email: this.userEmail,
        password: this.userPassword,
        name: this.name
      }
      if (this.isNewUser) {
        this.$store.dispatch("signUpApp", userData);
      } else {
        this.$store.dispatch("signInApp", userData).then(() => {
          this.$store.commit("setShowAuthForm", false);
        });
      }
    },
    showQuestMode() {
      this.$router.push({name: "createHabit"});
    }
  }
}

</script>

<style lang="scss" scoped>
.auth {
  &__button {
    font-family: "Raleway-Bold", Arial, sans-serif;
    text-transform: none;
  }

  //&__title {
  //  font-family: "Montserrat-Regular", Arial, sans-serif;
  //  font-size: 18px;
  //  line-height: 18px;
  //  margin-bottom: 20px;
  //}

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px 20px;

    &__guest-button {
      margin-bottom: 20px;

      ::v-deep .v-btn__content {
        color: #272727;
      }
    }

    &__divider {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 20px;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #89ccc5;
        padding: 0;
      }

      &::before {
        margin-right: 5px;
      }

      &::after {
        margin-left: 5px;
      }
    }

    &__field {
      ::v-deep .v-input__slot {
        margin-bottom: 20px !important;;
      }
    }

    &__button {
      background-color: #e2958c;

      ::v-deep .v-btn__content {
        color: #fff;
        width: 250px;
      }
    }
  }

}

::v-deep .v-input__slot fieldset {
  color: #89ccc5 !important;
}

::v-deep .v-sheet.v-card {
  border-radius: 10px;
}

::v-deep .v-card > .v-card__text {
  padding: 0;
}
</style>