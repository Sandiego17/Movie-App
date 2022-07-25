<template>
    <div>
        <h3>{{heading}}</h3>
        <div id="movie-list">
            <div class="items" v-for="movie in movies" :key="movie.id">
                <movie-card-vue :movie="movie" />
            </div>
        </div>
    </div>
</template>

<script>
import movieCardVue from './movieCard.vue'
import Axios from 'axios'
import { API_KEY, BASE_URL } from './../config.js'

export default {
    components: {
        movieCardVue
    },
    props: {
        keyword: {
            type: String,
            default: 'trending'
        },
        heading: {
            type: String,
            default: 'Trending this week'
        },
        numberOfMovies: {
            type: Number,
            default: 3
        },
    },
    data () {
        return {
            isBusy: false,
            movies: []
        }
    },
    mounted() {
        this.isBusy = true,
        Axios.get(`${BASE_URL}${this.keyword}?api_key=${API_KEY}`).then(res => {
            this.movies = res.data.results.slice(0, this.numberOfMovies)
            this.isBusy = false
            console.log(this.movies)
        })
    }
}
</script>

<style scoped>
    #movie-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: space-between;
    }

    .items {
        flex: 0 1 250px;
    }
</style>