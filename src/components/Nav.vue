<template>
 <nav>
   <div class="input-section">
   <input type="text"
    v-model="inputText"
    @keyup.enter="searchText(inputText)"
    placeholder="Search show"
    ref="inputRef"
   >
   <i class="fas fa-search" @click="setFocus()"></i>
   </div>
   <button
    @click="searchText(inputText)"
   >Search</button>
   <div class="category">
     <span>Category</span>
    <ul >
      <li @click="select('tv')"><a href="#">tv</a></li>
      <li @click="select('movie')"><a href="#">movie</a></li>
    </ul>

   </div>
 </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
   
  },
  data(){
    return{
      inputText:'',
    }
  },
  methods: {
    searchText(){
      this.$emit('searchText', this.inputText);
    },
    select(str){ // funzione che mi manda la stringa all'app per cambiare la ricerca API tra film e serie
      this.$emit('categorySelect', str);
    },
    setFocus() { //funzione che mette il focus nell'input 
      this.$refs.inputRef.focus()
    }
  }
}
</script>

<style scoped lang="scss">
nav {  
  color: white;

  .input-section {
    display: inline-block;
    position: relative;
    input {
      color: white;
      font-size: 15px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid red;
      background-color: rgb(63, 36, 36);
      outline: none;
    }

    i {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: text;
    }

  }

  input, button, .category {
      height: 50%;
      margin-right: 20px;
      padding: 5px; // .category ha il suo padding personale
      border-radius: 4px;
  }

  button {
    color: inherit;
    background-color: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  button:active{
      background-color: lightgrey;
  }
  .category:hover span,
  button:hover  {      
      color: red;
  }

  .category {
    display: inline-block;
    position: relative;
    padding: 5px 15px;
    border-top: none;
    border-left: 2px solid rgb(172, 66, 5);
    border-right: none;
    border-bottom: none;
    background-color: transparent;
    transition: color .5s;
    
    
    &:hover {
      cursor: pointer;
    }
    
    ul{
      position: absolute;
      top: 30px;
      left: 0;
      display: none;
      background-color: rgba(#000000, .2);
      width: 100%;
      li{
        padding: 5%;
        text-transform: uppercase;
        
        &:hover{
        /* cursor: pointer; */
        color: white;
        background-color: rgba(#5a5555, .9);
        border-bottom: 1px solid rgb(255, 0, 0);
        box-shadow: 0px  1px red;
      }
      }
    }
    &:hover ul {
      display: inline-block;
      z-index: 999;
    }
  }
}

</style>
