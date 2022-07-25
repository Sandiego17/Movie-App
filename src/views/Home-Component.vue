<template>
    <div>
        <movie-list-vue :keyword="'/trending/all/week'" :numberOfMovies="6" :heading="'Trending this week'" />
        <movie-list-vue :keyword="'/movie/top_rated'" :numberOfMovies="6" :heading="'Top Rated Movies'" />
        <movie-list-vue :keyword="'/trending/all/day'" :numberOfMovies="6" :heading="'Trending today'" />
        <movie-list-vue :keyword="'/movie/popular'" :numberOfMovies="6" :heading="'Popular Movies'" />
        <movie-list-vue :keyword="'/movie/upcoming'" :numberOfMovies="6" :heading="'Upcoming Movies'" />
    </div>
</template>

<script>
import movieListVue from './../components/movieList.vue'

export default {
  components: {
    movieListVue
  }
}
</script>

<style>

</style>