import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        habitsList: [],
        colorMood: "",
        progressData: [],
        list: [],
        colorsData: [],
        isShowNavigation: false
    },
    getters: {
        getHabitsList: state => state.habitsList,
        getColorMood: state => state.colorMood,
        getProgressData: state => state.progressData,
        getIsShowNavigation: state => state.isShowNavigation
    },
    mutations: {
        setColorMood(state, value) {
            state.colorMood = value;
        },
        setProgressData(state, value) {
            state.progressData = value;
        },
        setIsShowNavigation(state, value) {
            state.isShowNavigation = value;
        }
    },
    actions: {},
    modules: {}
})
