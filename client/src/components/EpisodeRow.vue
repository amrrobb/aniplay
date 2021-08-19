<template>
  <tr>
    <th scope="row">{{i+1}}</th>
    <td>{{ el.episode }}</td>
    <td>{{ el.date }}</td>
    <td v-if="episodeInfo.title">
      <a type="click" class="btn btn-outline-light me-2" :href="episodeInfo.stream" target="_blank">Watch</a> 
      <a type="click" class="btn btn-outline-light ms-2" :href="episodeInfo.download" target="_blank">Download</a>
    </td>
  </tr>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'EpisodeRow',
  props: ['el', 'i'],
  data() {
    return {
      episodeInfo: {}
    }
  },
  created() {
    // this.episodeInfo = 
    this.$store.dispatch('getAnimeLink', this.el.vid_id)
    .then(data => {
      this.episodeInfo = data[0]
      // console.log(this.episodeInfo);
    })
    .catch(err => {
      swal.fire("error", '', 'error')
    })
  }
}
</script>

<style>

</style>