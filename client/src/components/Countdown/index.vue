<template>
    <div class="container">
        <div>
            <h2>Game starts in </h2>
        </div>
        <div>            
            <p>{{ remain }}</p>
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
.container{
    margin-top: 10%;
}
h2 {
  font-weight: normal;
}
p {
    font-size: 100px;
}
</style>