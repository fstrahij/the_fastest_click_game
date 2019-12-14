const state = () => ({
	score: 0
});

const mutations = {
	setScore(state, score) {
		state.score = score;
	}
};

const actions = {
	setScore(vuexContext, score) {
		vuexContext.commit('setScore', score);
	}
}

const getters = {
	getScore(state) {
		return state.score;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};