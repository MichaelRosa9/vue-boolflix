<template>
  <div>
    <img v-if="show.poster_path !== null" :src="imgBaseURL + width500 +show.poster_path" :alt="show.title">
    
    <div v-else class="not-found">
    <h4> immage unavailable</h4>
    </div>

    <div class="info">
      <h3>
      {{ show.title || show.name }}
    </h3>

    <h4>
      {{ show.originaltitle ||show.originalname }}
    </h4>

    <div class="lang-flag">
      <div > <!-- Bandiera-->
      <flag :iso="show.original_language" />
    </div>

    <div v-if="show.original_language === 'en'"> <!-- Bandiera ENG -->
     <flag iso="gb" />
    </div>

    <div v-else-if="show.original_language === 'ja'"> <!-- Bandiera Japan -->
     <flag iso="jp" />
    </div>    

    <h5 v-else>
      Lang: {{ show.original_language }}
    </h5>
    </div>

    <div class="stars">
      
      <span v-for="index in convertRatingTo5" :key="`${index}star`"> <!-- stelle piene -->
        <i class="fas fa-star"></i>
      </span>
      
      <span v-for="index in emptyStars" :key="`${index}empty-star`"> <!-- stelle vuote -->
        <i class="far fa-star"></i>
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
      rating: 5,
    }
  },
  computed:{
    convertRatingTo5() { //funzione che mi converte il rating da 1-10 a un rating da 1-5
      let oldRating = 10;
      let result = parseInt((Math.round(this.rating * this.show.vote_average) / oldRating).toFixed(0));
      return result
    },
    emptyStars() {  //funzione che mi ritorna il numero di stelle vuote da ciclare nel v-for
      let maxStars = 5;
      let empty_star = parseInt(maxStars - this.convertRatingTo5);
      console.log(empty_star);
      return empty_star
    }
  }
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
    
    .not-found{
      h4 {
        text-transform: uppercase;
      }
    }
  }
    
</style>