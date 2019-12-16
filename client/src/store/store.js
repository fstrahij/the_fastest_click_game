import Vue from 'vue'
import Vuex from 'vuex'
import Buttons from "@/store/modules/buttons"
import Score from "@/store/modules/score"
import Remain from "@/store/modules/remain"

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {},
		mutations: {},
		modules: {
			Buttons,
			Score,
			Remain
		}
	})
}

export default createStore;