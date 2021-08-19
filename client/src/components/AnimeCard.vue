<template>
    <!-- <div class="box-card d-flex justify-content-center align-items-center "> -->
        <!-- <div class="row g-2 row-cols-2 "> -->

        <div class="text-start mx-5 col-3" @click.prevent="toDetailPage()" >
        <b-card no-body class="overflow-hidden image-card" text-variant="light">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-body>
                    <label class="h6">{{ el.title}}</label>
                <p>
                    {{ description }}
                </p >
                </b-card-body>
            </b-col>
            <b-col md="6">
                <b-card-img :src="el.image_url" width="100%" height="250px" alt="" class=""></b-card-img>
            </b-col>
            </b-row>
        </b-card>
        </div>
    
</template>

<script>
export default {
    name: 'AnimeCard',
    props: ['el'],
    computed: {
        description() {
            if (this.el.synopsis) {
                return this.el.synopsis.substring(0, 30) + '...'

            }
        }
    },
    methods: {
        toDetailPage() {
            this.$router.push({name: 'Detail', params: {id: this.el.mal_id}}).cacth(() => {})
        }
    }
}
</script>

<style>
.image-card {
    border-radius: 10px !important;
    /* max-width: 450px; 
    max-height: 280px;  */
    width: 380px;
    height: 200px;
    background-image: linear-gradient(to right, #458fac 10%, #9d00d6 100%);
    /* background-image: linear-gradient(to right, #c99999 10%, #2f98a1 100%); */
    filter: brightness(70%);
    font-size: 0.75em;
}

.image-card p {
    font-size: 1.2em;
}

.image-card:hover {
    filter: none;
    transform: scale(1.1);
    transition: all .3s ease-in-out
}


</style>