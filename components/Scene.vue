<template>
<div class="w-full h-full scene">
	<div id="sceneSpace" class="w-full h-full" content="3D Content" v-tippy="{followCursor : true, arrow: true, placement: 'top'}">
		<canvas id="scene" class="w-full h-full"></canvas>
	</div>
</div>
</template>

<script>

import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);

export default {

	name: 'Scene',

	data () {

		return {

			sceneSpace: null,
			canvas: null,

			renderer: null,
			perspectiveCamera: null,
			scene: null,

			cube: null,

			orbitControl: null,

		}

	},

	methods: {

		init() {

			// Container
			this.sceneSpace = document.getElementById('sceneSpace');

			// Canvas
			this.canvas = document.getElementById('scene');

			// WebGL Renderer
			{
				this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
				this.renderer.name = "Renderer";
				this.renderer.setClearColor(0x220022);

				this.renderer.setPixelRatio(window.devicePixelRatio);
				this.renderer.setSize(this.sceneSpace.clientWidth, this.sceneSpace.clientHeight);
			}

			// Scene
			{
				this.scene = new THREE.Scene();
				this.scene.name  = "Scene";
			}

			// Percpective Camera
			{
				let fov = 75;
				let aspect = this.sceneSpace.clientWidth / this.sceneSpace.clientHeight;
				const near = 0.01;
				const far = 2000;

				this.perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
				this.perspectiveCamera.name = "Camera";

				this.perspectiveCamera.position.set(0,3,2);
			}

			// Orbit Control
			{
				this.orbitControl = new OrbitControls(this.perspectiveCamera, this.renderer.domElement);

				this.orbitControl.minDistance = 5;
				this.orbitControl.maxDistance = 100;

				this.orbitControl.update();
			}

			// Directional Light
			{
				const color = 0xaaaaaa;
				const intensity = 1;

				const light = new THREE.DirectionalLight(color, intensity);
				light.name = "Directional Light";

				light.position.set(5, 15, 5);
				light.lookAt(0,0,0);

				this.scene.add(light);
			}

			// Cube
			{
				const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
				const material = new THREE.MeshPhongMaterial({color: '#af18c9', emissive: 0xaa66aa});

				let mesh = new THREE.Mesh(geometry, material);
				this.cube = mesh;
				this.cube.visible = false;

				this.scene.add(mesh);
			}

			// Animate
			this.renderer.setAnimationLoop(this.animate);

		},

		animate() {

			this.cube.rotation.x -= 0.01;
			this.cube.rotation.z -= 0.01;

			this.renderer.render(this.scene, this.perspectiveCamera);

		},

		onWindowResize() {

			this.renderer.setSize(this.sceneSpace.clientWidth, this.sceneSpace.clientHeight)

			this.perspectiveCamera.aspect = this.sceneSpace.clientWidth / this.sceneSpace.clientHeight;
			this.perspectiveCamera.updateProjectionMatrix();
		}

	},

	mounted() {

		this.init();

		const gsap = this.$gsap;

		let tl = gsap.timeline({delay: 2, onStart: () => {this.cube.visible = true;}});

		tl.from(this.cube.position, {

			x: -18,
			y: -18,
			z: -18,
			duration: 3,
			ease: "back.out(0.9)"

		}).to(this.cube.rotation, {

			x: +3,
			// z: +3,

			duration: 3,
			ease: "back.out(3)"

		}, 0);

		window.addEventListener('resize', this.onWindowResize, false);

	},

}

</script>
