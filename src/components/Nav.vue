<template>
 <nav>
   <input type="text"
    v-model="inputText"
    @keyup.enter="searchText(inputText)"
   >
   <button
    @click="searchText(inputText)"
   >search</button>
   <select name="language" id="">
     <option value="">Select Language</option>
   </select>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {

  input, button, select {
    height: 50%;
    margin-right: 20px;
    padding: 5px;
    border: none;
    border-radius: 4px;
  }
  input {
    outline: none;
  }
}

</style>
