<template>
  <tr class="bookmark_row">
    <th scope="row">{{i+1}}</th>
    <td class="">
      <img :src="el.image_url" alt="" width="80" height="100">
    </td>
    <td >
      <a class="text-decoration-none text-white" @click.prevent="toDetail(el.mal_id)"> {{ el.title  }} </a>
    </td>
    <td>
      <select class="form-select text-white bg-transparent" v-model="status" @change="changeStatus">
        <option class="text-dark" value="Plan to Watch" >Plan to Watch</option>
        <option class="text-dark" value="Watched">Watched</option>
      </select>
    </td>
    <td>
      <a type="click" class="btn btn-outline-light ms-2" target="_blank"
        @click.prevent="deleteBookmark(el.mal_id)"
       >Delete</a>
    </td>
  </tr>
</template>

<script>
import swal from 'sweetalert2'
import {mapState} from 'vuex'
export default {
  name: 'BookmarkRow',
  props: ['el', 'i'],
  data() {
    return {
      status: ""
    }
  },
  computed: {
      ...mapState(['bookmarkAll'])
  },
  methods: {
    deleteBookmark(value) {
        this.$store.dispatch('deleteBookmark' , value)
    },
    changeStatus() {
        // console.log(this.status)
        let payload = {
          status: this.status,
          mal_id: this.el.mal_id
        }
        this.$store.dispatch('statusBookmark', payload )
    },
    toDetail(value){
      this.$router.push({name: 'Detail', params: {id: value}})
    },
    deleteBookmark(value) {
      this.$store.dispatch('deleteBookmark' , value)
      this.$router.push('/bookmark').catch(() => {})
    }
  },
  created() {
    this.status = this.el.status
    // this.$store.dispatch('findBookmark')
  }

}
</script>

<style>
.bookmark-row a:hover {
  transform: scale(1.3);
  transition: all .3s ease-in-out
}

</style>