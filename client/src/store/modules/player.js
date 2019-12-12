const state = () => ({
	player: ""
});

const mutations = {
	setPlayer(state, player) {
		state.player = player;
	}
};

const actions = {
	setPlayer(vuexContext, player) {
		vuexContext.commit('setPlayer', player);
	}
}

const getters = {
	getPlayer(state) {
		return state.player;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};