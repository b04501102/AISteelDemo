<template lang="pug">
  .card
    img.card-img-top(:src='url')
    .card-body.d-flex.flex-column.align-items-start
      h5.card-title {{ title }}
      slot
</template>

<script>
export default {
  props: {
    title: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
  .card {
    overflow: hidden;
    cursor: pointer;
    img {
      transition: .3s;
    }
  }
  .card:hover {
    img {
      transform: scale(1.05);
    }
  }
</style>



