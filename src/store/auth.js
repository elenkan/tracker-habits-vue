import firebase from "firebase/compat";

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async signInApp({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                console.log(e)
            }
        },
        async logout() {
            await firebase.auth().signOut();
        },
        async signUpApp({dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUserId')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name
                })
            } catch (e) {
                console.log(e)
            }
        },
        getUserId() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
}