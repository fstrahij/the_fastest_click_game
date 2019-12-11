<template>
  <div id="app">
    <div class="game-panel">
        <Game/>
    </div>
    <div class="instructions-panel">
        <Instructions/>
    </div>
  </div>
</template>

<script>
import Game from './components/Game'
import Instructions from './components/Instructions'

export default {
  name: 'App',
  components: {
    Game,
    Instructions
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
