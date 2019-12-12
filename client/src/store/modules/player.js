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
		setTimeout(() => {
			vuexContext.commit('setPlayer', player);
		}, 1500)
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