import Vue from 'vue'
import Vuex from 'vuex'
import Buttons from "@/store/modules/buttons"

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {},
		mutations: {},
		modules: {
			Buttons
		}
	})
}

export default createStore;