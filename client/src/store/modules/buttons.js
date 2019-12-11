const state = () => ({
	buttons: []
});

const mutations = {
	setButtons(state, buttons) {
		state.buttons = buttons;
	}
};

const actions = {
	setButtons(vuexContext, buttons) {
		vuexContext.commit('setButtons', buttons);
	}
}

const getters = {
	getButtons(state) {
		return state.buttons;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};