<template>
  <div id="app">
    <div 
        class="player-input"
        v-if="startCountdown === false && startGame === false"
    >
        <PlayerInput/>        
    </div>
    <div 
        class="countdown"
        v-if="startCountdown === true && startGame === false"
    >
        <Countdown/>        
    </div>
    <div v-else-if="startCountdown === false && startGame === true">
        <div class="game-panel">
            <Game/>
        </div>
        <div class="instructions-panel">
            <Instructions/>
        </div>
    </div>
  </div>
</template>

<script>
import PlayerInput from './components/PlayerInput'
import Countdown from './components/Countdown'
import Game from './components/Game'
import Instructions from './components/Instructions'

export default {
    name: 'App',
    components: {
        PlayerInput,
        Countdown,
        Game,
        Instructions
    },
    data () {
        return {
            startCountdown: false,
            startGame: false
        }
    },
    computed: {
        isPlayerSet: function() {
            const player = this.$store.getters.getPlayer;
            if (player != "") {
                return true;
            }                
            return false;              
        },
        isCountdownEnd: function() {
            let remain = this.$store.getters.getRemain;
            if (remain == 0) {
                return true;
            }                
            return false;
        }
    },
    watch: {
        isPlayerSet (newValue, oldValue){
            this.startCountdown = newValue;
            this.startGame = false;
        },
        isCountdownEnd (newValue, oldValue){
            this.startCountdown = oldValue;
            this.startGame = newValue;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.game-panel {
    float: left;
    display: inline;
    width: 69%;
    height: 100%;
}
.instructions-panel {
    float: left;
    display: inline;
    margin-left: 1%;
    height: 100%;
    width: 30%;
}
</style>
