<template>
  <div v-if="category=== 'movie'">
    <img :src="imgBaseURL + width500 +show.poster_path" alt="">

    <div class="info">
      <h3>
      {{ show.title }}
    </h3>
    <h4>
      {{ show.originaltitle }}
    </h4>
    <h5>
      Lang: {{ show.original_languag }}
    </h5>
    <h6>
      Rated: {{ show.vote_average }}
    </h6>
    </div>
  </div>

  <div v-else-if="category === 'tv'">
    <img :src="imgBaseURL + width500 +show.poster_path" alt="">

    <div class="info">
      <h3>
      {{ show.name }}
    </h3>

    <h4>
      {{ show.originalname }}
    </h4>

    <h5 v-if='show.original_languag === "it-IT"'>
      <img src="" alt="">
    </h5>

    <h5>
      Lang: {{ show.original_languag }}
    </h5>

    <h6>
      Rated: {{ show.vote_average }}
    </h6>
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
      width500: 'w500'
    }
  }
}
</script>

<style lang="scss" scoped>

  div {
    width: 350px;
    margin-top: 40px;
    color: white;

    img {
      width: 50%;
      object-fit: cover;
    }

  }
</style>