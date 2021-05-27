<template>
  <div v-if="category=== 'movie'">
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

  <div v-else-if="category === 'tv'">
    <h3>
      {{ show.name }}
    </h3>
    <h4>
      {{ show.originalname }}
    </h4>
    <h5>
      Lang: {{ show.original_languag }}
    </h5>
    <h6>
      Rated: {{ show.vote_average }}
    </h6>
  </div>

</template>

<script>
export default {
  name: 'Thumbnail',
  props:{
    show: Object,
    category: String
  }
}
</script>

<style lang="scss" scoped>

  div {
    height: 250px;
    width: 350px;
    background-color: red;
    margin-top: 40px;

    h3 {
      text-align: center;
    }
  }
</style>