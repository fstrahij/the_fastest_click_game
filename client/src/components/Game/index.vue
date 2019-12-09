<template>
    <div class="main">
        <h1>Level {{ level }}</h1>
        <div 
            v-for="btn in btns"
            :key="btn.id"
        >
            <div 
              class="btn" 
              v-bind:style="{ width: btnWidth + 'px', 
                              height: btnHeight + 'px', 
                              background: btn.color }"
              @click="Hide(btn.id)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Game',
    data () {
        return {
            level: 0,
            btnWidth: 0,
            btnHeight: 0,
            btns: []         
        }
    },
    methods: {
        SetBtns(){
            this.btns.push({ name: "btn1", id: 1, color: "" },
                { name: "btn2", id: 2, color: "" },
                { name: "btn3", id: 3, color: "" });
        },
        Hide(id) { 
            for (const i in this.btns) {
                if (id == this.btns[i].id) {
                    this.btns.splice(i, 1);
                }   
            }  
        },
        InitBtnsSize() {
            let sizeModifier = 10;
            this.btnWidth = window.innerWidth / sizeModifier;
            this.btnHeight = window.innerHeight / sizeModifier;
        },
        SetBtnsColor() {            
            for (let i in this.btns) {
               let color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
               this.btns[i].color = color;
            }
        },
        LoadNextLevel() {
            this.level++;
            let sizeModifier = 1.5;
            this.btnWidth /= sizeModifier;
            this.btnHeight /= sizeModifier;
            this.SetBtns();
            this.SetBtnsColor();
        }
    },
    mounted() {
        this.level = 1;
        this.SetBtns();
        this.InitBtnsSize();
        this.SetBtnsColor();
    },
    watch: {
        btns() {
            if (this.btns.length == 0) {
                this.LoadNextLevel();
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
</style>
