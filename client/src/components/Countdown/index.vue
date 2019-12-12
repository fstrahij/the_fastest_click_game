<template>
    <div class="container">
        <h1>{{ remain }}</h1>
    </div>
</template>

<script>
import { Countdown } from './utils'

export default {
    name: 'Countdown',
    data () {
        return {
            remain: 3,
        }
    },
    methods: {
        async Startremaindown() {
            while(this.remain > 0){
                await Countdown(this.remain).then( (msg) => {
                    this.remain = msg;
                });
                this.remain --;
            }
        }
    },
    mounted() {
        this.Startremaindown();
    },
    watch: {
        remain (){
            if (this.remain == 0) {
                this.remain = "PLAY!";
            }
        }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>