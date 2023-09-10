<template>
  <IonPage>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <div style="display: flex; flex-direction: row">
            <ion-title> App Name </ion-title>
            <ion-searchbar v-model="searchText"></ion-searchbar>
          </div>
        </ion-toolbar>
      </ion-header>

      <div style="padding: 15px">
        <div class="title">Top Anime</div>
        <div class="scroll-container">
          <div v-for="anime in topAnime.data" :key="anime.mal_id">
            <TopAnimeCard :anime="anime" />
          </div>
        </div>
      </div>

      <div style="padding: 15px">
        <div class="title">Anime List</div>

        <ion-grid fixed>
          <ion-row>
            <ion-col
              size="4"
              v-for="anime in computedAnime"
              :key="anime.mal_id"
            >
         
               <AnimeCard @click="()=>router.push({name:'animeDetails', params:{id:anime.mal_id}})" :anime="anime" />
              
            
           
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </IonPage>
</template>

<script  >
import {
  IonPage,
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import getAnime from '../data/getAnime'
import TopAnimeCard from "../components/TopAnimeCard.vue";

import { computed, defineComponent, onMounted, ref } from "vue";
import AnimeCard from "../components/AnimeCard.vue";
import { useRouter } from 'vue-router';


export default defineComponent({
  components: {
    IonSearchbar,
    IonPage,
    IonToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainer,
    TopAnimeCard,
    IonCol,
    IonGrid,
    IonRow,
    AnimeCard,
  },
  setup() {
    const topAnime = ref([]);
    const animes = ref([]);
    const searchText =ref('')

    // const getAnime = async (path) => {
    //   const response = await axios.get(path);
    //   console.log(response.data);

    //   return response.data;
    // };

    onMounted(async () => {
      topAnime.value = await getAnime("https://api.jikan.moe/v4/top/anime");
      animes.value = await getAnime("https://api.jikan.moe/v4/anime");
    });

    const computedAnime = computed(() => {
      if (animes.value.data) {
        return animes.value.data.filter((item) => {
          return item.titles.some((titleObj) =>
            titleObj.title
              .toLowerCase()
              .includes(searchText.value.toLowerCase())
          );
        });
      }

      return animes.value
    });

    const hello = ref("hello");
    return { 
      hello,
       topAnime, 
      animes,
       computedAnime,
      searchText ,
      router:useRouter()
     };
  },
});
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  max-width: 100%;
}
.title {
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
}
</style>

