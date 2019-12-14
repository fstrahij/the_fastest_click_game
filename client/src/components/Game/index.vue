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
        <div v-if="gameOver === true">            
            <Scoreboard/>
        </div>
    </div>
</template>

<script>
import Scoreboard from '../Scoreboard'

export default {
    name: 'Game',
    components: {
        Scoreboard
    },
    data () {
        return {
            MAX_TIME: 60000,
            level: 0,
            btnWidth: 0,
            btnHeight: 0,
            startTime: 0,
            endTime: 0,
            score: 0,
            gameOver: false,
            btns: []         
        }
    },
    computed: {
        timeElapsed: function() {
            return this.endTime - this.startTime;
        },
        isInTime: function() {
            if (this.timeElapsed >= this.MAX_TIME) {
                return false;
            }
            return true;
        },
        calculateScore: function() {
            let score = 0;
            let multiplier = 1 + ( this.level / 100 );
            if (this.timeElapsed > 0) {
                score = Math.round (( this.MAX_TIME - this.timeElapsed ) * multiplier );
            }
            return score;
        },
        isOverlapping(){
            for (let i = 0; i < this.btns.length; i++) {
                let j = i + 1;
                let topEdge = this.btns[i].top;
                let botEdge = this.btns[i].top + this.btnHeight;
                let rightEdge = this.btns[i].left;
                let leftEdge = this.btns[i].left + this.btnWidth;
                while (j < this.btns.length) {
                    let maxTop = this.btns[j].top + this.btnHeight;
                    let maxLeft = this.btns[j].left + this.btnWidth;
                    if (((botEdge >= this.btns[j].top && botEdge <= maxTop)
                        || (topEdge >= this.btns[j].top && topEdge <= maxTop))
                        && 
                        ((leftEdge >= this.btns[j].left && leftEdge <= maxLeft)
                        || (rightEdge >= this.btns[j].left && rightEdge <= maxLeft))) {
                        return true; 
                    } 
                    j++;                 
                } 
            }
            return false;
        }
    },
    methods: {
        SetBtns(){
            const btns = [];            
            const syncBtns = [];
            btns.push({ name: "btn1", id: 1, color: "", top: 0, left: 0 },
                { name: "btn2", id: 2, color: "", top: 0, left: 0 },
                { name: "btn3", id: 3, color: "", top: 0, left: 0 }); 
            this.btns = btns; 
            for (let i in this.btns) {
                syncBtns.push(btns[i]);
            }
            this.$store.commit('setButtons', syncBtns);           
        },
        CheckBtn( id ) { 
            let i = 0;
            if (id == this.btns[i].id && !this.gameOver) {
                this.btns.splice(i, 1);
            }
            else{   
                this.gameOver = true;  
            } 
        },
        InitSizeBtns() {
            let modifier = 10;
            this.btnWidth = window.innerWidth / modifier;
            this.btnHeight = window.innerHeight / modifier;
        },
        SetPositionBtns(){
            let absolute = -1;
            let headingHeight = this.$refs.main.clientHeight;
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
               if (this.btns[i].color.length < 7) {
                    this.btns[i].color += 0;
               }   
            }            
        },
        StartGame(){
            this.gameOver = false;
            this.level = 1;
            this.score = 0;
            this.startTime = new Date();
            this.SetBtns();
            this.InitSizeBtns();
            do{
                this.SetPositionBtns();
            } while(this.isOverlapping);
            this.SetColorBtns();           

        },
        LoadNextLevel() {            
            this.endTime = new Date();
            this.score += this.calculateScore;
            this.$store.commit("setScore", this.score);
            console.log("Level " + this.level + "\n Time: " + this.timeElapsed);
            console.log("YOUR SCORE = " + this.score);
            this.startTime = new Date();
            this.level++;
            let modifier = 1.5;
            this.btnWidth /= modifier;
            this.btnHeight /= modifier;
            this.SetBtns();
            do{
                this.SetPositionBtns();
            } while(this.isOverlapping);
            this.SetColorBtns();
        }
    },
    mounted() {
        this.StartGame();
    },
    watch: {
        btns() {
            if (this.btns.length == 0 && this.isInTime) {
                this.LoadNextLevel();
            }
        },
        isInTime() {
            if (this.isInTime == false) {
                this.gameOver = true;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
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
