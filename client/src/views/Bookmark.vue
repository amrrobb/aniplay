<template>
  <div class="container">
    <div class="mb-4 p-2">
        <h3 class="h3"> My Bookmark </h3>
    </div>
    <div class="mt-3" style="padding-bottom: 8%;" v-show="bookmarkAll[0]">
        <div class="d-flex justify-content-start align-items-center" style="width: 30%">
            <dt class="col-sm-3 me-2">Filter by:</dt>
            <select class="form-select text-white bg-transparent w-50" v-model="filter" @change="filterBookmark">
                <option class="text-dark" value="All" >All</option>
                <option class="text-dark" value="Plan to Watch" >Plan to Watch</option>
                <option class="text-dark" value="Watched">Watched</option>
            </select>
        </div>
        <table class="table text-white mt-3 px-5">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <BookmarkRow
            v-for="(el,i) in bookmarkAll" :key="el.id" :el="el" :i="i"
            />
        </tbody>
        </table>
    </div>

    <div v-show="!bookmarkAll[0]">
        <h5>You don't have any bookmarks</h5>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import BookmarkRow from '../components/BookmarkRow.vue'
export default {
  components: { BookmarkRow },
    name: 'Bookmark',
    data() {
        return {
            filter: "All"
        }
    },
    computed: {
        ...mapState(['bookmarkAll'])
    },
    methods: {
        ...mapActions(['findBookmark']),
        filterBookmark() {
            this.$store.dispatch('findBookmark', this.filter)
        }
    },
    created() {
        this.findBookmark()
        // this.$store.dispatch('findBookmark', 'Watched')
    }
}
</script>

<style>

</style>