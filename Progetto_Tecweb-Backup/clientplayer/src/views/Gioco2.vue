<template>
  <div>
    <h1>gioco 2</h1>
    <div>
    <b-button @click="rimuovi(i)" v-for="(item, i) in parolachiave" v-bind:key="item">
      {{item}}
    </b-button>
  </div>
  <div>
  <b-button @click="inserisci(index)" v-for="(item2,index)  in parolachiave2" v-bind:key="item2">
    {{item2}}
  </b-button>
</div>
  </div>

</template>

<script>
  //    import myjson from './../DevFile/Domande.json'
export default {
  data(){
    return {
      parola:"XXXXX",
      parola2:"cassiopea",
      parolachiave2: [],
      parolachiave: [],
      caso2: [],
      cane:[],
    }
  },

      mounted:function() {
      console.log('montato');
      for (var i = 0; i < this.parola.length ; i++) {
          this.parolachiave.splice(i, 1,this.parola[i]);
      }
      for (var j = 0; j < this.parola2.length ; j++) {
          this.parolachiave2.splice(j, 1,this.parola2[j]);
      }
      console.log(this.parolachiave);
      if(this.parolachiave=="XXXXX") {
        console.log("yey");
      }
      else {
        console.log("no");
      }

      },

  sockets: {
    },
  methods: {
      rimuovi(i) {
        console.log(i);
        this.parolachiave.splice(i,1,"X");
        console.log(this.parolachiave);
      },
      inserisci(i) {
        for (var j = 0; j < this.parolachiave.length ; j++) {
if(this.parolachiave[j]=="X") {
  this.parolachiave.splice(j,1,this.parolachiave2[i]);
  j=this.parolachiave.length;
}
        }
        console.log(this.parolachiave);
      }
  },
};
</script>

<style>

</style>
