<template lang="pug">
  .container
    .row
      .col-sm-4.mb-sm-3(v-for='item in test2')
        ImageCard(:title='String(item.id)' :url='item.preview')
          router-link.btn.btn-primary(tag='button' :to='{ name: "test2", params: { id: item.id } }') Open
</template>

<script>
const axios = require('axios')
import ImageCard from '../components/ImageCard'

export default {
  data() {
    return {
      test2: null
    }
  },
  mounted() {
    axios.get('http://140.112.253.162:4000/api/test2/').then(response => {
      this.test2 = response.data
    })
  },
  components: {
    ImageCard
  }
}
</script>

