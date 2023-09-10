<template>
  
    <div class="card" >
        
        <img class="image" :src="anime.images.jpg.image_url"/>
    </div>

</template>

<script>
export default {
    props:['anime'],


}
</script>

<style>
.card {
  width: 100px;
  height: 150px; 
  padding: 5px;
 
  border-radius: 10px; 
  overflow: hidden; /* Hide any content that might overflow */
}

.image {
  width: 100%;
  border-radius: 10px; 
  box-shadow: 0 0 10px rgba(163, 159, 159, 0.2);
  height: 100%;
  object-fit: cover; /* This property scales the image to cover the container */
}
</style>