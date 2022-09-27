const scene = new THREE.Scene();
scene.background= new THREE.Color() ;
/* const  fondo = new THREE.Scene() */

var loader = new THREE.TextureLoader();
loader.load('./Recursos/imagenes/fondo-1.jpg', function(texture) {
	scene.background = texture
})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

//Para la luz
const light = new THREE.AmbientLight(0x404040, 8)
scene.add(light) 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );





const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('./Recursos/3D/policeman/scene.gltf', (gltf) =>{

    var objetoloader = gltf.scene;
    console.log('carga completa')
    scene.add('loaderObjeto')
    objetoloader.position.x = -3
    objetoloader.position.y = -13
    objetoloader.rotation.y = 12.5
    objetoloader.scale.set(12,12,12)
    scene.add(gltf.scene)

    const dControls = new THREE.DragControls([objetoloader], camera, renderer.domElement)
    dControls.deactivate()
    dControls.activate()
    animate(); 

}, ()=>{

    console.log('cargando')
}, ()=> {
    console.log('error')
  
});






const gltfLoader1 = new THREE.GLTFLoader();
gltfLoader.load('./Recursos/3D/dog (3)/scene.gltf', (gltf) =>{

    var objetoloader1 = gltf.scene;
    console.log('carga completa')
    scene.add('loaderObjeto')

    objetoloader1.position.x = -3
    objetoloader1.position.y = -18
    objetoloader1.rotation.y = 13.5
    objetoloader1.scale.set(0.5,0.5,0.5)
    scene.add(gltf.scene)

    const dControls = new THREE.DragControls([objetoloader1], camera, renderer.domElement)
    dControls.deactivate()
    dControls.activate()
    animate(); 

}, ()=>{

    console.log('cargando')
}, ()=> {
    console.log('error')
  
});




camera.position.z= 30;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

