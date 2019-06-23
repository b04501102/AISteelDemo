<template lang="pug">
  .card
    #ply_container.card-img-top
    .card-body
      h5.card-title {{ title }}
</template>

<script>
const THREE = window.THREE = require('three')
require('three/examples/js/loaders/PLYLoader')

const OrbitControls = require('three-orbit-controls')(THREE)

export default {
  props: {
    title: String,
    url: String
  },
  data() {
    return {
      scene: null,
      camera: null,
      fov: 90,
      loader: null,
      renderer: null,
      controls: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.getElementById('ply_container')
      
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(container.offsetWidth, 500)

      this.scene = new THREE.Scene()
      this.scene.add(new THREE.AmbientLight(0xffffff))

      const dirLight = new THREE.DirectionalLight( 0xffffff, 1 )
      dirLight.color.setHSL( 0.1, 1, 0.95 )
      dirLight.position.set( - 1, 1.75, 1 )
      this.scene.add( dirLight )
      dirLight.castShadow = true
      dirLight.shadow.mapSize.width = 2048
      dirLight.shadow.mapSize.height = 2048
      const d = 50
      dirLight.shadow.camera.left = - d
      dirLight.shadow.camera.right = d
      dirLight.shadow.camera.top = d
      dirLight.shadow.camera.bottom = - d
      dirLight.shadow.camera.far = 3500
      dirLight.shadow.bias = - 0.0001
      const dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 )
      // this.scene.add( dirLightHeper )

      this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000)
      this.camera.position.set(5, 0, 5)

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.minDistance = 0
      this.controls.maxDistance = 400
      this.controls.update()

      this.loader = new THREE.PLYLoader()
      this.loader.load(this.url, geometry => {
        geometry.computeVertexNormals()
        const material = new THREE.MeshLambertMaterial({
          color: '#B2DFDB',
          flatShading: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(0, 0, 0)
        mesh.rotation.y = Math.PI/2
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.scene.add(mesh)

        this.camera.lookAt(geometry.boundingSphere.center.multiplyScalar(-1))
        dirLight.target = mesh
      })

      // this.scene.add(new THREE.AxesHelper(5))

      this.renderer.render(this.scene, this.camera)

      container.appendChild(this.renderer.domElement)

      window.addEventListener('resize', this.onWindowResize, false)
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.render()
    },
    render() {
      // const timer = Date.now() * 0.0005;
      // this.camera.position.x = Math.sin(timer) * 2.5;
      // this.camera.position.z = Math.cos(timer) * 2.5;

      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      const container = document.getElementById('ply_container')
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(container.offsetWidth, 500)
    }
  }
}
</script>

