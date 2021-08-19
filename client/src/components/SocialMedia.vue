<template>
   <div class="pb-5 container" v-if="animeOne.title" >
    <h5 class="mt-5 mb-0">Share this to your Social Media</h5>
    <div class="nav d-flex justify-content-center">
    <ShareNetwork
        network="facebook"
        :url="shareLink"
        title="Aniplay"
        desciption="Check this anime on Aniplay"
        :quote="animeOne.title"
        hashtags="aniplay"
        >
        <a href="#" class="fa fa-facebook"></a>
    </ShareNetwork>

    <ShareNetwork
        network="twitter"
        :url="shareLink"
        title="Aniplay"
        desciption="Check this anime on Aniplay"
        :quote="animeOne.title"
        hashtags="aniplay"
    >
        <a href="#" class="fa fa-twitter"></a>
    </ShareNetwork>

    <ShareNetwork
        network="telegram"
        :url="shareLink"
        title="Aniplay"
        desciption="Check this anime on Aniplay"
        :quote="animeOne.title"
        hashtags="aniplay"
    >
        <a href="#" class="fa fa-telegram"></a>
    </ShareNetwork>

    <ShareNetwork
        network="whatsapp"
        :url="shareLink"
        title="Aniplay"
        desciption="Check this anime on Aniplay"
        :quote="animeOne.title"
        hashtags="aniplay"
    >
        <a href="#" class="fa fa-whatsapp"></a>
    </ShareNetwork>
    </div>

</div>
</template>

<script>
export default {
    name: 'SocialMedia',
    props: ['animeOne'],
    computed: {
        shareLink(){
            let link = 'https://aniplay-client.web.app' + this.$route.path
            return link
        }
    }
}
</script>

<style>
.fa {
  padding: 0 1em;
  font-size: 30px;
  margin: 0%;
  width: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}

.fa:hover {
  transform: scale(1.2);
  transition: all .3s ease-in-out;
}
</style>