<template lang="pug">
  .container
    nav.navbar.px-0
      router-link.navbar-brand.text-left.px-0(to='/') ←
    .row.mb-sm-3
      .col-sm-4
        ImageCard(title='Color Image' :url='"http://140.112.253.162:4000/api/test2/" + $route.params.id + "/color"')
      .col-sm-4
        ImageCard(title='Depth Image' :url='"http://140.112.253.162:4000/api/test2/" + $route.params.id + "/depth"')
      .col-sm-4
        ImageCard(title='Infrared Image' :url='"http://140.112.253.162:4000/api/test2/" + $route.params.id + "/infrared"')
    .row
      .col-sm-12
        PLYCard(title='PLY Model' :url='"http://140.112.253.162:4000/api/test2/" + $route.params.id + "/ply"')
</template>

<script>
import ImageCard from '../components/ImageCard'
import PLYCard from '../components/PLYCard'

export default {
  components: {
    ImageCard,
    PLYCard
  }
}
</script>

