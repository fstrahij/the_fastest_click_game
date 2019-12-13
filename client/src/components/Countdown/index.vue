<template>
    <div class="container">
        <div>
            <h2>Game starts in </h2>
        </div>
        <div>            
            <h1>{{ remain }}</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Countdown',
    data () {
        return {
            remain: 0,
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
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>