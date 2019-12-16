const state = () => ({
	remain: 1
});

const mutations = {
	setRemain(state, remain) {
		state.remain = remain;
	}
};

const actions = {
	setRemain(vuexContext, remain) {
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				if (remain > 0) {
					resolve(remain);
					vuexContext.commit('setRemain', remain);
				}else{
					resolve(remain);
					vuexContext.commit('setRemain', remain);
				}
			}, 1000);
		});
	}
}

const getters = {
	getRemain(state) {
		return state.remain;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};