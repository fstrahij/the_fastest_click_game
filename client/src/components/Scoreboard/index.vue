<template>
	<div class="container">
		<div>
			<p>YOUR SCORE</p>
			<p>{{ score }}</p>
		</div>
		<p>PLAYER | SCORE</p>
		<ol>
			<li 
				v-for="player in players"
				:key="player.id"
			>
				{{ player.name }} - {{ player.score }}
			</li>
		</ol>
		<button @click="PlayAgain()">Play Again</button>
		<button @click="ChangePlayer()">Change Player</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Scoreboard',
    data () {
        return {
        	score: 0,
            players: []
        }
    },
    methods: {
    	PlayAgain() {    		
                const remain = 3;
                this.$store.commit('setRemain', remain);
    	},
    	ChangePlayer() {
            const player = "";
            this.$store.commit('setPlayer', player);
    	},
    	async PostData() {
    		const baseURI = "http://localhost:3000/newPlayer";
    		const name = this.$store.getters.getPlayer;;
    		const score = this.$store.getters.getScore;
    		this.score = score;
	    	await axios.post(baseURI, {
	    		name: name,
	    		score: score
	    	}).then(response => {
	    		this.GetData();
	    	})
    	},
    	GetData() {
    		const baseURI = "http://localhost:3000/scoreboard";
	    	axios.get(baseURI).then(response => {
				this.players = response.data;
    		})
    	}
    },
    mounted(){
    	this.PostData();
    }
}

</script>

<style scoped>
.container {
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.4);
	color: white;
	font-weight: bold;
	border: 3px solid #f1f1f1;
	position: absolute;
	top: 40%;
	left: 50%;
	height: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	width: 80%;
	padding: 20px;
	text-align: center;
}
h1, h2 {
  font-weight: normal;
}
</style>