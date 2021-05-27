<template>
 <nav>
   <input type="text"
    v-model="inputText"
    @keyup.enter="searchText(inputText)"
   >
   <button
    @click="searchText(inputText)"
   >search</button>
   <div class="category">
     <h3>Category</h3>
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
      inputText:''
    }
  },
  methods: {
    searchText(){
      this.$emit('searchText', this.inputText);
      this.inputText = '';
    },
    select(str){
      this.$emit('categorySelect', str)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {

  input, button, .category {
    height: 50%;
    margin-right: 20px;
    padding: 5px;
    border-radius: 4px;
  }
  input, button, {  
    border: none;
  }

  input {
    outline: none;
  }

  .category {
    display: inline-block;
    position: relative;
    border: solid 1px;
    background-color: white;

    ul{
      position: absolute;
      top: 30px;
      left: 0;
      display: none;
      background-color: rgba(#f5a5a5, .5);
      width: 100%;
      li{
        cursor: pointer;
        text-transform: uppercase;
        &:hover{
        background-color: rgba(#000000, .5);
      }
      }
    }
    &:hover ul {
      display: inline-block;
      
    }
  }
}

</style>
