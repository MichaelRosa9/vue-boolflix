<template>
  <div id="app">
    <header>
      <div class="logo"></div>
      <Nav v-on:searchText="searchShow($event)" />
    </header>

    <main>
      <div class="container">
        <Thumbnail class="thumbnail" 
          v-for="show in shows" :key="show.id"
          :show="show"
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
    
    }
  },
  created(){
    
  },
  methods: {
    searchShow($event){
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
