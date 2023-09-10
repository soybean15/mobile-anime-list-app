<template>
  <div class="card">
    <img class="image" :src="anime.images.jpg.image_url"/>

    <span href="/tabs/anime">{{ anime.titles[0].title }}</span>
  </div>
</template>

<script>

export default {
    props:['anime']

}
</script>

<style scoped>
.card{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    cursor: pointer;
}
.image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* This property scales the image to cover the container */
}

</style>