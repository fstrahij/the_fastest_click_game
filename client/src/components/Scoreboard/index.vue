<template>
	<div class="container">
		<div class="panel">
			<div class="my-score">
				<h2>YOUR SCORE</h2>
				<p class="score">{{ score }}</p>
			</div>
			<div class="top-five">
				<h2>TOP 5 PLAYERS</h2>
				<ol>
					<li 
						v-for="player in players"
						:key="player.id"
					>
						<span class="players" >{{ player.name }}</span>
						<span class="scores">{{ player.score }}</span>
					</li>
				</ol>
			</div>
		</div>
		
		<div class="btns">
			<div>	
				<button @click="PlayAgain()">Play Again</button>
			</div>
			<div>
				<router-link to="/" tag="button">Change Player</router-link>			
			</div>
		</div>
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
    		this.$store.commit("setRemain", remain);
    	},
    	async PostData() {
    		const baseURI = "http://localhost:3000/newPlayer";
    		const name = JSON.parse( localStorage.getItem('player') );
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
.panel {
	min-height: 250px;
}
li {	
	width: 90%;
	text-align: left;
	margin-bottom: 5px;
    font-size: 19px;
}
.players {
	padding-left: 2px;
}
.scores {
	float: right;
	text-align: right;
}
.score {	
	margin-top: 0px;
    font-size: 60px;
}
button:hover {
	color: red;
}
button {	
	width: 250px;
	margin-top: 30px;
	font-weight: bold;
	text-transform: uppercase;
}
.my-score {
	float: left;
	width: 60%;
	margin: auto;
}
.top-five {
	float: left;
	width: 40%;
	margin: auto;
}
.container {
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.7);
	color: white;
	font-weight: bold;
	border: 3px solid #f1f1f1;
	position: absolute;
	top: 40%;
	left: 50%;
	height: 70%;
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