<template>
    <div class="container">
        <input 
            v-model.trim="player" 
            placeholder="Player Name"
        >
        <button @click="CheckInput()">Start Game</button>
        <p v-if="errors != ''"> {{ errors }} </p>
    </div>
</template>

<script>
export default {
    name: 'PlayerInput',
    data () {
        return {
            errors: "",
            player: ""
        }
    },
    methods: {
        CheckInput() {
            if (this.player.length < 6) {
                this.errors = "Player Name must have 6 character minimum!";
            }
            else{
                this.errors = '';
                this.$store.commit('setPlayer', this.player);
            }   
        }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.container{
    border: 2px solid black;
}
p{
    color: red;
}
</style>