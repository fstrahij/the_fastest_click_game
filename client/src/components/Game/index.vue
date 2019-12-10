<template>
    <div 
        class="main"
        ref="main"
    >
        <h1>Level {{ level }}</h1>
        <div
            class="panel"
            ref="panel" 
        >
            <div 
                v-for="btn in btns"
                :key="btn.id"
            >
                <div 
                  class="btn" 
                  v-bind:style="{ width: btnWidth + 'px', 
                                  height: btnHeight + 'px', 
                                  marginTop: btn.top + 'px',
                                  marginLeft: btn.left + 'px',
                                  background: btn.color }"
                  @click="CheckBtn( btn.id )"
                />                     
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Game',
    data () {
        return {
            MAX_TIME: 1000000,
            level: 0,
            btnWidth: 0,
            btnHeight: 0,
            startTime: 0,
            levelTimeElapsed: 0,
            score: 0,
            btns: []         
        }
    },
    computed: {
        timeElapsed: function() {
            let endTime = new Date();
            return endTime - this.startTime;
        },
        isInTime: function() {
            if (this.levelTimeElapsed >= this.MAX_TIME) {
                return false;
            }
            return true;
        },
        calculateScore: function() {
            let score = 0;
            let multiplier = 1 + ( this.level / 100 );
            if (this.levelTimeElapsed > 0) {
                score = Math.round (( this.MAX_TIME - this.levelTimeElapsed ) * multiplier );
            }
            return score;
        }
    },
    methods: {
        SetBtns(){
            const btns = [];
            btns.push({ name: "btn1", id: 1, color: "", top: 0, left: 0 },
                { name: "btn2", id: 2, color: "", top: 0, left: 0 },
                { name: "btn3", id: 3, color: "", top: 0, left: 0 }); 
            this.btns = btns;
        },
        CheckBtn( id ) { 
            let i = 0;
            if (id == this.btns[i].id) {
                this.btns.splice(i, 1);
                /*const width = this.btnWidth;
                const height = this.btnHeight; 
                for (let b in this.btns) {
                    if (this.btns[b].top <=  this.btns[i].top) {
                        this.btns[b].top -= this.btns[b].top;
                    }
                    if (this.btns[b].left <=  this.btns[i].left) {
                        this.btns[b].left -= this.btns[b].left;
                    }
                }*/
            }
            else{               
                console.log("GAME OVER\nYOUR SCORE = " + this.score);
                this.StartGame();
            } 
        },
        InitSizeBtns() {
            let modifier = 10;
            this.btnWidth = window.innerWidth / modifier;
            this.btnHeight = window.innerHeight / modifier;
        },
        SetPositionBtns(){
            let absolute = -1;
            let headingHeight = this.$refs.main.clientHeight + 60;
            let gameHeight = window.innerHeight - headingHeight;
            for (let i in this.btns) {
               let top = Math.floor((Math.random() * gameHeight-(this.btnHeight + headingHeight)));
               let left = Math.floor((Math.random() * this.$refs.panel.clientWidth-this.btnWidth));
               if (top < 0) {
                    top *= absolute;
               }
               if (left < 0) {
                    left *= absolute;
               }
               this.btns[i].top = top
               this.btns[i].left = left;
            }
        },
        SetColorBtns() {                 
            for (let i in this.btns) {
               this.btns[i].color = "#" + ( Math.random() * 0xFFFFFF<<0 ).toString(16);
            }
        },
        StartGame(){
            this.level = 1;
            this.levelTimeElapsed = 0;
            this.score = 0;
            this.startTime = new Date();
            this.SetBtns();
            this.InitSizeBtns();
            this.SetPositionBtns();
            this.SetColorBtns();
        },
        LoadNextLevel() {
            this.levelTimeElapsed +=  this.timeElapsed;
            this.score = this.calculateScore;
            console.log("Level " + this.level + "\n Time: " + this.levelTimeElapsed);
            console.log("YOUR SCORE = " + this.score);
            this.startTime = new Date();
            this.level++;
            let modifier = 1.5;
            this.btnWidth /= modifier;
            this.btnHeight /= modifier;
            this.SetBtns();
            this.SetPositionBtns();
            this.SetColorBtns();
        }
    },
    mounted() {
        this.StartGame();
    },
    watch: {
        btns() {
            if (this.btns.length == 0) {
                this.LoadNextLevel();
            }
        },
        isInTime() {
            if (this.isInTime == false) {
                this.StartGame();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#app {
    height: 100%;
}
.panel{
    position: relative;
    border: 2px solid black;
}
.btn {
    position: absolute;
    border: 1px solid black;
    z-index: 1;
}
</style>
