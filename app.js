const scene = new Scene()

const camera = new PerspectiveCamera(70, innerWidth/innerHeight)
camera.position.set(0,0,4)
camera.lookAt(0,0,0)

const geometry = new BoxGeometry(1,1,1)
const material = new MeshPhongMaterial()
const mesh = new Mesh(geometry, material)

const light = new PointLight()
light.position.set(1,0,4)

scene.add(mesh)
scene.add(light)

const graphic = new WebGLRenderbuffer({canvas})
graphic.render(scene, camera)
