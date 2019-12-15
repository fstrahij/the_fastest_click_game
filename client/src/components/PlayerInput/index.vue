<template>
    <div class="container">
        <div class="input-elements">
            <input 
                v-model.trim="player" 
                placeholder="Player Name"
            >
            <button @click="CheckInput()">Start Game</button>
            <p v-if="errors != ''"> {{ errors }} </p>
        </div>        
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
                this.$store.dispatch('setPlayer', this.player);
            }   
        }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.container {
    background-color: rgba(144, 238, 144, 0.2);
    border-radius: 25px;
    border: 2px solid #006400;
    height: 25%;
    width: 50%;
    margin: auto;
    margin-top: 5%;
}
.input-elements {
    padding: 3% 10% 4% 10%;
}
p{
    color: red;
}
</style>