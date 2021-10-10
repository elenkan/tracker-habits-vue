import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        habitsList: [],
        colorMood: "",
        progressData: [],
        list: [],
        colorsData: [],
        isShowNavigation: false,
        showAuthForm: false,
        changeableHabit: null
    },
    getters: {
        getHabitsList: state => state.habitsList,
        getColorMood: state => state.colorMood,
        getProgressData: state => state.progressData,
        getIsShowNavigation: state => state.isShowNavigation,
        getShowAuthForm: state => state.showAuthForm,
        getChangeableHabit: state => state.changeableHabit
    },
    mutations: {
        setHabitsList(state, value) {
            state.habitsList = value;
        },
        setColorMood(state, value) {
            state.colorMood = value;
        },
        setProgressData(state, value) {
            state.progressData = value;
        },
        setIsShowNavigation(state, value) {
            state.isShowNavigation = value;
        },
        setShowAuthForm(state, value) {
            state.showAuthForm = value;
        },
        setChangeableHabit(state, value) {
            state.changeableHabit = value;
        },
    },
    actions: {},
    modules: {
        auth
    }
})
