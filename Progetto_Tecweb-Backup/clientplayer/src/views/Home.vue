<template>
  <div class="home">
    <h1> {{ giochi }} </h1>
  </div>
</template>

<script>

export default {
  data(){
    return {
      giochi: [],
    }
  },

      mounted:function() {
      console.log("montato");  
      },

  sockets: {
    connect() {
      console.log("Connesso al Server");
    },
    return_data(lista_giochi) {
      console.log(lista_giochi);
      this.giochi = lista_giochi;
    },
    test(data){
      console.log(data);
    },
  },
  methods: {

  },
};
</script>
