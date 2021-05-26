<template>
  <div id="app">
    <header>
      <div class="logo"></div>
      <Nav v-on:searchText="searchShow($event)" />
    </header>

    <main>

    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Nav
  },
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: 'be3fa3bd2b20925e1d6c0b3adfcb12d6',
      query: 'back to the future',
      lang: 'it-IT',
      inputTextNav: '',
      
    }
  },
  created(){
    axios.get(this.apiURL,{
      params: {
        api_key: this.apiKey,
        query: this.query,
        language: this.lang
      }
    }).then(response => {
    console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    searchShow($event){
      this.inputTextNav = $event;
      console.log(this.inputTextNav)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/general.scss';
@import '@/styles/utilities.scss';

header {
  background-color: red;
}
main {
  background-color: black;
}
</style>
