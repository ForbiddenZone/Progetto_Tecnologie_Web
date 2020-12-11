<template>
  <div class="about">
    <h1>gioco 1</h1>
    <div v-if="domande[0]!=null" class="col">
      <h1>{{this.domande[numerodomanda].domanda}}</h1>
    <b-button @click="risposta(index)"  v-for="(item,index) in domande[numerodomanda].argomento" :key="item">
      {{item}}
    </b-button>
    <b-button v-if="numerodomanda<2" @click="avanti"> avanti</b-button>
    
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
      domande: [],
      giochi: [],
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
     console.log(this.soluzione);
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
  if (this.numerodomanda<2){
  this.numerodomanda=this.numerodomanda+1;
  this.soluzione=this.domande[this.numerodomanda].soluzione;
}
},

risposta (data) {
if (data==this.soluzione) {
  console.log("bravo");
  this.avanti();
}

  else {
    console.log("magari muori");
  }
}

  },
};
</script>
