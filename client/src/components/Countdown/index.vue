<template>
    <div class="container">        
        <div 
            class="panel" 
            v-if="remain > 0"
        >
            <div>
                <h2>Game starts in </h2>
            </div>
            <div>            
                <p>{{ remain }}</p>
            </div>
        </div>
        
        <div v-else>
            <Game/>
        </div>
    </div>
</template>

<script>
import Game from '../Game'

export default {
    name: 'Countdown',
    components: {
        Game
    },
    data () {
        return {
            remain: 0,
        }
    },
    computed: {
        playAgain: function() {
            return this.$store.getters.getRemain;
        }
    },
    methods: {
        async StartCountdown() {
            let remain = this.remain;
            while(remain >= 0){
                remain --;                
                await this.$store.dispatch('setRemain', remain).then( (msg) => {
                    this.remain = msg;
                });
            }
        }
    },
    mounted() {
        this.remain = 3;
        this.StartCountdown();
    },
    watch: {
        playAgain (newValue, oldValue){
            this.remain = newValue;
            this.StartCountdown();
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 0;
    margin-bottom: 0;
    height: 100%;
}
.panel{
    margin-top: 10%;
}
h2 {
  font-weight: normal;
}
p {
    font-size: 100px;
}
</style>