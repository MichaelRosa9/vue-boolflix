<template>
  <div id="app">
    <header>
      <div class="container flex-center-between">
      <div @click="setHomepage()" class="logo">
        <h1>Boolflix</h1>
      </div>
      <Nav v-on:searchText="searchShow($event)"
        v-on:categorySelect="categorySelect"
       />

      </div>
    </header>

    <main>
      <div class="container">
        <h2 v-if="searchedResult === true">{{ results }} risultati trovati</h2>

        <div v-if="loader === false" class="">
          <div class="flex-items-center wrap">
            <Thumbnail class="thumbnail basis-5" 
              v-for="show in shows" :key="show.id"
              :show="show" :category='category'
            />        
          </div>

          <div v-if="searchedResult === true" class="pages flex-center-center">
            <button @click="setPage(index)"  v-for="index in total_pages" :key="index"> {{ index }} </button>
          </div>  

        </div>

        <div v-else class="loading container flex-center-center">
          <h2>
            Loading...
          </h2>

          <div class="lds-ring"><div></div><div></div><div></div><div></div></div> <!-- icona del caricamento, il CSS si trova nel file utilities.scss -->
        </div>

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
      apiURLSort: 'https://api.themoviedb.org/3/discover/movie',
      apiURLSearch: 'https://api.themoviedb.org/3/search/movie',
      apiKey: 'be3fa3bd2b20925e1d6c0b3adfcb12d6',
      query: '',
      lang: 'it-IT',
      sort_by: 'most popular',
      inputTextNav: '',
      shows: [],
      category:'',
      results:'',
      searchedResult: false,
      total_pages:'',
      page:'',
      totalPages:'',
      loader: true
    }
  },
  created() {
    axios.get(this.apiURLSort,{
    params: {
      api_key: this.apiKey,
      sort_by: this.sort_by,
      language: this.lang
    }
    
  }).then(response => {
    this.results = response.data.total_results;
    this.shows = response.data.results;
    this.page = response.data.page;
    this.total_pages = response.data.total_pages;
    this.loader = false
  }).catch(err => {
    console.log(err);
  })
    
  },
  methods: {
    searchShow($event){ // metodo che mi cerca dentro l'API tramite l'input preso dal componente Nav 
      this.inputTextNav = $event;
      if(this.inputTextNav !== ''){ //condizione che mi fa partire la funzione sol se metto qualcosa nell'input
      
        this.searchedResult = true; //valore booleano che mi mostra il numero di risultati trovati
        axios.get(this.apiURLSearch,{
          params: {
            api_key: this.apiKey,
            query: $event,
            language: this.lang,
            page: this.page
          }
        }).then(response => {
          this.results = response.data.total_results;
          this.shows = response.data.results;
          this.page = response.data.page;
          this.total_pages = response.data.total_pages;
          this.loader = false
        }).catch(err => {
          console.log(err);
        })
      }      
    },
    setHomepage(){
      this.searchedResult = false; //valore booleano che mi nasconde il numero di risultati trovati
      axios.get(this.apiURLSort,{
        params: {
          api_key: this.apiKey,
          sort_by: this.sort_by,
          language: this.lang,
        }
      }).then(response => {
        this.results = response.data.total_results;
        this.shows = response.data.results;
        this.page = response.data.page;
        this.total_pages = response.data.total_pages;
        
      }).catch(err => {
        console.log(err);
      })
    },
    categorySelect(str){ //funzione che prende l'emit dalla funzion categorySelect dentro il div category dentro il componente Nav e mi sceglie tra la categoria tv o film cambiando l'URL dell'API
      this.category = str
      if(str === 'tv'){
        this.apiURLSearch = 'https://api.themoviedb.org/3/search/tv'
      }else{
        this.apiURLSearch = 'https://api.themoviedb.org/3/search/movie'
      }
      
      this.searchShow(this.inputTextNav)//al cambio di categoria richiamo la funzione che mi cerca l'inpute nell'api

    },
    setPage(index){
      this.page = index;

      this.searchShow(this.inputTextNav);

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
    cursor: pointer;
  }
}
main {
  
  
  h2 {
    color: rgb(255, 255, 255);
  }
  .thumbnail {
    margin-top: 20px;
    margin-bottom: 25px;
    margin-right: 30px;
  }

  .pages {
    width: 100%;
    margin-bottom: 10px;
    button {
      padding: 10px;
      margin: 5px;
      cursor: pointer;
    }
  }
  .loading {
    h2 {
      color: rgb(255, 0, 0);

    }
  }

}
</style>
