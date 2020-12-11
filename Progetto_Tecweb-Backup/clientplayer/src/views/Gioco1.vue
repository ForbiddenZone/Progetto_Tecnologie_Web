<template>
  <div class="about">
    <h1>gioco 1</h1>
    <div v-if="domande[0]!=null && numerodomanda<lunghezza" class="col">
      <h1>{{this.domande[numerodomanda].domanda}}</h1>
    <b-button @click="risposta(index)"  v-for="(item,index) in domande[numerodomanda].argomento" :key="item">
      {{item}}
    </b-button>
    <b-button v-if="numerodomanda<lunghezza -1" @click="avanti"> avanti
    </b-button>
  </div>
  <div v-if="numerodomanda>=lunghezza">
  <h1 > hai fatto {{corrette}} domande corrette su {{lunghezza}}  </h1>
<b-button @click="riprova()"> riprova</b-button>
</div>

  </div>
</template>

<script>
      import myjson from './../DevFile/Domande.json'
export default {
  data(){
    return {
      numerodomanda: 0,
      soluzione: "",
      lunghezza: "",
      domande: [],
      corrette: 0,
      items: [
  { message: 'Foo' },
  { message: 'Bar' }
]
    }
  },

      created:function() {
      console.log('montato');
     console.log(myjson);
     for (var i = 0; i < myjson.quesito.length ; i++) {
         this.domande[i]=myjson.quesito[i]
     }
     console.log(this.domande);
     this.soluzione=myjson.quesito[0].soluzione;
     this.lunghezza=this.domande.length;
      },

  sockets: {
      domandericevute(dati) {
        console.log(dati);
      },
    },
  methods: {
    mostra() {
      console.log(this.domande);
    },
avanti() {
    this.numerodomanda=this.numerodomanda+1;
  if (this.numerodomanda<2){
  this.soluzione=this.domande[this.numerodomanda].soluzione;
}
},

risposta (data) {
if (data==this.soluzione) {
  console.log("bravo");
  this.avanti();
  this.corrette=this.corrette+1;
}

  else {
    this.avanti();
  }
},

riprova() {
console.log("ciao");
this.numerodomanda=0;
this.soluzione=this.domande[0].soluzione;
this.corrette=0;
}

  },
};
</script>
