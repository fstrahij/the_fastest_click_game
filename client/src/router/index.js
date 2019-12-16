import Vue from 'vue'
import Router from 'vue-router'
import PlayerInput from '../components/PlayerInput'
import Countdown from '../components/Countdown'

Vue.use(Router)

const router =  new Router({
	routes: [
		{
			path: '/',
			name: 'playerInput',
			component: PlayerInput,
				
		},
		{
			path: '/game',
			name: 'game',
			component: Countdown,
			meta: {
				requiresPlayer: true
			}
		}
	],
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	if (to.matched.some( record => record.meta.requiresPlayer )) {
		if (!localStorage.getItem('player')) {
			next({
				path: '/'
			})
		}else{
			next()
		}
	}else{
		next({
			query: {}
		})
	}
})

export default router;