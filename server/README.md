## Server Side

### Get Starting

```shell
# in ./server
npm i

npm start
```

### Change database info
* in **./server/api/test2.js**
```javascript
const pool = require('mysql').createPool({
  host: '166.62.30.147', # host domain
  user: 'rainforest80256', # user name
  password: 'DGWmzC3Bya8pcjE', # password
  database: 'AISteel' # database name
})
```

### MySQL Table Structure
| id | color_path | depth_path | infrared_path | ply_path |
| -- | ---------- | ---------- | ------------- | -------- |
