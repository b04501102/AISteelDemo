# frontend_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### change backend services in ./views
* in **Home.vue**
```javascript
mounted() {
  axios.get('http://rainforest.tools:4000/api/test2/').then(response => { # fetch all test2 data in id & color_path format
    this.test2 = response.data
  })
},
```
* in **Test2Cards.vue**
```
.row.mb-sm-3
  .col-sm-4
    # get color image by id
    ImageCard(title='Color Image' :url='"http://rainforest.tools:4000/api/test2/" + $route.params.id + "/color"')
  .col-sm-4
    # get depth image by id
    ImageCard(title='Depth Image' :url='"http://rainforest.tools:4000/api/test2/" + $route.params.id + "/depth"')
  .col-sm-4
    # get infrared image by id
    ImageCard(title='Infrared Image' :url='"http://rainforest.tools:4000/api/test2/" + $route.params.id + "/infrared"')
.row
  .col-sm-12
    # get ply model by id
    PLYCard(title='PLY Model' :url='"http://rainforest.tools:4000/api/test2/" + $route.params.id + "/ply"')
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
