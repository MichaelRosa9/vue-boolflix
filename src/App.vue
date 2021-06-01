<template>
  <div id="app">
    <header>
      <div class="container flex-center-between">
      <div class="logo">
        <h1>Boolflix</h1>
      </div>
      <Nav v-on:searchText="searchShow($event)"
        v-on:categorySelect="categorySelect"
       />

      </div>
    </header>

    <main>
      <div class="container flex-items-center wrap">
        <!-- <h2>{{ results }} risultati trovati</h2> -->
        <Thumbnail class="thumbnail basis-5" 
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
import "@fontsource/roboto";


export default {
  name: 'App',
  components: {
    Nav,
    Thumbnail
  },
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/discover/movie',
      apiSearch: 'https://api.themoviedb.org/3/search/movie',
      apiKey: 'be3fa3bd2b20925e1d6c0b3adfcb12d6',
      query: '',
      lang: 'it-IT',
      sort_by: 'most-popular',
      inputTextNav: '',
      shows: [],
      category:'movie',
      results:'',
      page:'',
      totalPages:'',
    }
  },
  /* created: {
    axios_sort() {
      axios.get(this.apiURL,{
      params: {
        api_key: this.apiKey,
        sort_by: this.sort_by,
        language: this.lang
      }
    }).then(response => {
      this.results = response.data.total_results;
      this.shows = response.data.results;
      this.page = response.data.page;
      
    }).catch(err => {
      console.log(err);
    })
    }
  }, */
  methods: {
    searchShow($event){ // metodo che mi cerca dentro l'API tramite l'input preso dal componente Nav 
      this.inputTextNav = $event;
      axios.get(this.apiSearch,{
      params: {
        api_key: this.apiKey,
        query: $event,
        language: this.lang
      }
    }).then(response => {
      this.results = response.data.total_results;
      this.shows = response.data.results;
      this.page = response.data.page;
      
    }).catch(err => {
      console.log(err);
    })
    },
    categorySelect(str){ //funzione che prende l'emit dalla funzion categorySelect dentro il div category dentro il componente Nav e mi sceglie tra la categoria tv o film cambiando l'URL dell'API
      this.category = str
      if(str === 'tv'){
        this.apiSearch = 'https://api.themoviedb.org/3/search/tv'
      }else{
        this.apiSearch = 'https://api.themoviedb.org/3/search/movie'
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
  background-color: rgb(44, 0, 0);

  .logo {
    text-transform: uppercase;
    font-size: 20px;
    color: red;
    text-shadow: 1px 1px 5px rgb(110, 16, 16);
  }
}
main {
  background-color: rgb(158, 154, 154);
  
  .thumbnail {
    margin-top: 20px;
    margin-right: 30px;
  }
}
</style>
