<template>
  <div class="show-wrap"
  @click="infoActive = !infoActive">
    <img v-if="show.poster_path !== null" :src="imgBaseURL + width500 +show.poster_path" :alt="show.title">
    
    <div v-else class="img-not-found">
      <h3> {{ show.title || show.name }}</h3>
      <span> Immage unavailable...</span>
      <span>Click for more info!</span>
    </div>

    <transition name="fade">
      <div class="info-wrap"
          v-if="infoActive"
        >
        <div class="info">
          <h3>
          {{ show.title || show.name }}
          </h3>

          <h4>
            {{ show.originaltitle ||show.originalname }}
          </h4>

          <div class="flags">
            <div class="lang-flag">      
              <flag :iso="show.original_language" />
            </div>

            <div v-if="show.original_language === 'en'"> <!-- Bandiera ENG -->
              <flag iso="gb" />
            </div>

            <div v-else-if="show.original_language === 'ja'"> <!-- Bandiera Japan -->
              <flag iso="jp" />
            </div>
          </div>

          <div class="stars">      
            <span v-for="index in convertRatingTo5" :key="`${index}full-star`"> <!-- stelle piene -->
              <i class="fas fa-star"></i>
            </span>
            
            <span v-for="index in emptyStars" :key="`${index}empty-star`"> <!-- stelle vuote -->
              <i class="far fa-star"></i>
            </span>
          </div>

          <p class="description">
            {{ show.overview }}
          </p>
        </div>
      </div>

    
    </transition>

  </div>

</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    show: Object,
    category: String,
  },
  data() {
    return {
      imgBaseURL: "https://image.tmdb.org/t/p/",
      width500: "w500",
      rating: 5,
      infoActive: false
    };
  },
  computed: {
    convertRatingTo5() {
      //funzione che mi converte il rating da 1-10 a un rating da 1-5
      let oldRating = 10;
      let result = parseInt(Math.ceil(this.rating * this.show.vote_average) / oldRating);
      return result;
    },
    emptyStars() {
      //funzione che mi ritorna il numero di stelle vuote da ciclare nel v-for
      let maxStars = 5;
      let empty_star = parseInt(maxStars - this.convertRatingTo5);
      return empty_star;
    },
  }
};
</script>

<style lang="scss" scoped>

div.show-wrap {
  position: relative;
  width: 290px;
  height: 400px;
  color: white;
  border: 2px solid rgb(156, 156, 156);
  transition: transform .4s; /* Animation */

  img, 
  .info-wrap {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);      
  }


  .not-found {
    h4 {
      text-transform: uppercase;
    }
  }

  .info-wrap,
  .img-not-found {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(#000000, .5);
    
  }
  .img-not-found {

    h3, span{
      margin-top: 20px;
    }
    span {
      display: block;
    }
  }  

  .info {
    height: 100%;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    
    h3 {
      font-size: 23px;
    }
    .stars {
      color: gold;
    }
    p {
      height: 68%;
      font-size: 15px;
      line-height: 21px;
      overflow: auto;
      padding-right: 10px;
    }
  }

  
  /* transition */
  .fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>