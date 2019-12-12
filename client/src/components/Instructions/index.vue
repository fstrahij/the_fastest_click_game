<template>
    <div class="sidebar">
        <h2>Instructions</h2>
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
        
    </div>
</template>

<script>
export default {
    name: 'Instructions',
    data () {
        return {
            btnWidth: 50,
            btnHeight: 50,
            btns: []
        }
    },
    computed: {
        getButtons: function() {
            this.btns = this.$store.getters.getButtons;
        }
    },
    mounted() {
        this.getButtons;
    },
    watch: {
        getButtons (newBtns, oldBtns){}
    }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
}
.panel{
    border: 2px solid black;
}
.btn {
    margin-top: 10px;
    margin-left: 5px;
    border: 1px solid black;
}
</style>