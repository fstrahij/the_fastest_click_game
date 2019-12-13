import Vue from 'vue'
import Vuex from 'vuex'
import Buttons from "@/store/modules/buttons"
import Player from "@/store/modules/player"
import Remain from "@/store/modules/remain"

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {},
		mutations: {},
		modules: {
			Buttons,
			Player,
			Remain
		}
	})
}

export default createStore;