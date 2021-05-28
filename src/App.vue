<template>
  <div id="app">
    <header>
      <div class="logo"></div>
      <Nav v-on:searchText="searchShow($event)"
        v-on:categorySelect="categorySelect"
       />
    </header>

    <main>
      <div class="container">
        <Thumbnail class="thumbnail" 
          v-for="show in shows" :key="show.id"
          :show="show" :category='category'
         />
      </div>
      
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from './components/Nav.vue';
import Thumbnail from './components/Thumbnail.vue';


export default {
  name: 'App',
  components: {
    Nav,
    Thumbnail
  },
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: 'be3fa3bd2b20925e1d6c0b3adfcb12d6',
      query: '',
      lang: 'it-IT',
      inputTextNav: '',
      shows: [],
      category:'movie'
    
    }
  },  
  methods: {
    searchShow($event){ // metodo che mi cerca l'input preso dal componente Nav dentro l'API 
      this.inputTextNav = $event;
      axios.get(this.apiURL,{
      params: {
        api_key: this.apiKey,
        query: $event,
        language: this.lang
      }
    }).then(response => {
      this.shows = response.data.results;
      
    }).catch(err => {
      console.log(err);
    })
    },
    categorySelect(str){ //funzione che prende l'emit dalla funzion categorySelect dentro il div category dentro il componente Nav e mi sceglie tra la categoria tv o film cambiando l'URL dell'API
      this.category = str
      if(str === 'tv'){
        this.apiURL = 'https://api.themoviedb.org/3/search/tv'
      }else{
        this.apiURL = 'https://api.themoviedb.org/3/search/movie'
      }

      //al cambio di categoria richiamo la funzione che mi cerca l'inpute nell'api
      this.searchShow(this.inputTextNav)
    }
  }
}
</script>

<style lang="scss">
@import './styles/general.scss';
@import './styles/utilities.scss';

header {
  background-color: red;
}
main {
  background-color: black;
}
</style>
