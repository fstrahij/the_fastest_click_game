import Vue from 'vue'
import Vuex from 'vuex'
import Buttons from "@/store/modules/buttons"
import Player from "@/store/modules/player"

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {},
		mutations: {},
		modules: {
			Buttons,
			Player
		}
	})
}

export default createStore;