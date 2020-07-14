import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '../../configs/firebaseConfig'

Vue.use(Vuex)
export const db = firebase.firestore();

export default new Vuex.Store({
  state: {
  	user: null
  },
  mutations: {
  	...vuexfireMutations,
  },
  actions: {
  	bindUser: firestoreAction(({ bindFirestoreRef }, payload) => {
      return bindFirestoreRef('user', db.collection('users').doc(payload.id))
    }),
    updateUser: firestoreAction(({ state }, element) => {
		  const user = { ...state.user }
    	user[element.name] = element.value

		  return db
		    .collection('users')
		    .doc(user.id)
		    .set(user)
		    .then(() => {
		      console.log('user updated!')
		    })
		})
  },
  modules: {
  }
})
