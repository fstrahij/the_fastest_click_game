<template>
    <div class="sidebar">
        <h1>Instructions</h1>       
        <div class="panel">
            <ol>
                <li
                    class="btn"
                    v-for="btn in btns"                
                    :key="btn.id"
                    v-bind:style="{ width: btnWidth + 'px', 
                                  height: btnHeight + 'px', 
                                  background: btn.color }"
                />
            </ol>
        </div>        
        <p>You have 60 seconds per level to solve problem!</p> 
    </div>
</template>

<script>
export default {
    name: 'Instructions',
    data () {
        return {
            btnWidth: 0,
            btnHeight: 0,
            btns: []
        }
    },
    computed: {
        getButtons: function() {
            this.btns = this.$store.getters.getButtons;
        }
    },
    mounted() {
        this.btnWidth = window.innerWidth / 16;
        this.btnHeight = window.innerHeight / 18;
        this.getButtons;
    },
    watch: {
        getButtons (newBtns, oldBtns){}
    }
}
</script>

<style scoped>
h1 {
    font-weight: normal;
}
.panel{
    margin-top: 10px;
    border: 2px solid black;
}
.btn {
    margin-top: 10px;
    margin-left: 5px;
    border: 1px solid black;
}
</style>