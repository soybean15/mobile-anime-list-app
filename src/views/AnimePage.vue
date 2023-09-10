<template>
  <IonPage>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>

          <ion-title v-if="anime">{{ anime.data.titles[0].title }}</ion-title>
        </ion-toolbar>
      </ion-header>


      <div class="flex" v-if="anime">
        <img class="image" :src="anime.data.images.jpg.large_image_url" />

        <div class="flex-col" style="padding-top: 10px;">

          <div style="padding-block: 3px;"><span class="anime-title">Title :</span> {{ anime.data.title }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Japanese Title :</span> {{ anime.data.title_japanese }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Type :</span> {{ anime.data.type }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Episodes :</span> {{ anime.data.episodes }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Score :</span> {{ anime.data.score }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Status :</span> {{ anime.data.status }}</div>
          <div style="padding-block: 3px;"><span  class="anime-title">Year :</span> {{ anime.data.year }}</div>
        </div>
      </div>

      <div class="flex-col" style="padding: 15px;" v-if="anime">
        <span class="title" style=" font-size: 1.5em;">
          Sypnosis
        </span>

        <p >{{ anime.data.synopsis }}</p>
      </div>
    </ion-content>
  </IonPage>
</template>

<script>
import { useRoute } from "vue-router";

import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/vue";
import getAnime from "../data/getAnime";
import { onMounted, ref } from "vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonContent,
  },
  setup() {
    const router = useRoute();
    const anime = ref(null);
    const id = router.params.id;

    onMounted(async () => {
      anime.value = await getAnime(`https://api.jikan.moe/v4/anime/${id}`);
    });

    return { router, anime };
  },
};
</script>

<style scoped>
.image {
  margin: 5px;
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.flex {
  display: flex;
}.flex-col{
  display: flex;
  flex-direction: column;
}
.anime-title{

  font-weight: bold;


}
</style>