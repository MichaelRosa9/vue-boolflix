<template>
  <div >
    <img :src="imgBaseURL + width500 +show.poster_path" :alt="show.title">

    <div class="info">
      <h3>
      {{ show.title || show.name }}
    </h3>

    <h4>
      {{ show.originaltitle ||show.originalname }}
    </h4>

    <div class="lang-flag">
      <div v-if="show.original_language === 'it'"> <!-- Bandiera IT -->
      <flag :iso="show.original_language" />
    </div>

    <div v-else-if="show.original_language === 'en'"> <!-- Bandiera ENG -->
     <flag iso="gb" />
    </div>

    <div v-else-if="show.original_language === 'ja'"> <!-- Bandiera ENG -->
     <flag iso="jp" />
    </div>

    <div v-else-if="show.original_language === 'es'"> <!-- Bandiera ENG -->
     <flag :iso="show.original_language" />
    </div>

    <h5 v-else>
      Lang: {{ show.original_language }}
    </h5>
    </div>

    <div class="stars">
      <span v-for="(star, index) in newMaxRating" :key="index">
        <i class="fas fa-star"></i>
      </span>
    </div>
    </div>
  </div>

  

</template>

<script>



export default {
  name: 'Thumbnail',
  props:{
    show: Object,
    category: String
  },  
  data(){
    return{
      imgBaseURL: 'https://image.tmdb.org/t/p/',
      width500: 'w500',
      newMaxRating: 5,
      starArray: []
    }
  },
  /* created: {
    convertRatingTo5(vote_average){ //funzione che mi converte il rating da 1-10 a un rating da 1-5
      let oldMaxRating = 10;
      let newMaxRating = 5;
      let result = ((newMaxRating * vote_average) / oldMaxRating).toFixed(0);
      let star = {star:'<i class="fas fa-star"></i>'};
      for (let i = 0; i < result; i++){
        this.starArray.push(star); 
       
      }
    }
  } */
}
</script>

<style lang="scss" scoped>

  div {
    width: 350px;    
    color: white;

    img {
      width: 50%;
      object-fit: cover;
    }
    .mr-star {
      color: inherit;
    }
  }
</style>