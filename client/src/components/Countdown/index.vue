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
            let remain = this.remain;
            while(remain >= 0){
                await Countdown(remain).then( (msg) => {
                    this.remain = msg;
                });
                remain --;
            }
        }
    },
    mounted() {
        this.Startremaindown();
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>