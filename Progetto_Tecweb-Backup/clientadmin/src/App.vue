<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> Ciao, Seleziona i giochi: </h1>
    <b-container>
      <b-row>
        <b-col> <b-button v-on:click="gioco1 = 'A'"> Gioco A </b-button> <b-button v-on:click="gioco1 = 'B'"> Gioco B </b-button> <br> {{ gioco1 }} </b-col>
        <b-col> <b-button v-on:click="gioco2 = 'C'"> Gioco C </b-button> <b-button v-on:click="gioco2 = 'D'"> Gioco D </b-button> <br> {{ gioco2 }} </b-col>
        <b-col> <b-button v-on:click="gioco3 = 'E'"> Gioco E </b-button> <b-button v-on:click="gioco3 = 'F'"> Gioco F </b-button> <br> {{ gioco3 }} </b-col>
      </b-row>
      <b-row> {{ gioco1 + gioco2 + gioco3 }} </b-row>
      <b-row> <b-button v-on:click="sendData()"> Invia i giochi </b-button> </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      gioco1: "",
      gioco2: "",
      gioco3: ""
    };
  },
  sockets: {
    connect() {
      console.log("Connesso al Server");
    },
    test(data){
      console.log(data);
    }
  },
  methods: {
    sendData() {
      let lista_giochi = [this.gioco1, this.gioco2, this.gioco3];
      console.log(lista_giochi);
      this.$socket.client.emit('choose_games', lista_giochi);
    },
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
