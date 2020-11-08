<template>
<div v-click-outside="externalClick" class=" w-88 h-100 bg-gray-500">
	<div id="PopUp" class="w-full h-full">
		<canvas id="canvas" class="w-full h-full" content="3D Content" v-tippy="{arrow: true, placement: 'top'}"></canvas>
	</div>
</div>
</template>

<script>

import vClickOutside from 'v-click-outside';

import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);

export default {

	name: 'PopUp',

	directives: {

		clickOutside: vClickOutside.directive,

	},

	data () {

		return {

			PopUp: null,
			scene: null,

			renderer: null,
			perspectiveCamera: null,
			canvas: null,

			cube: null,

			orbitControl: null,

		}

	},


	methods: {

		init() {

			// Container
			this.PopUp = document.getElementById('PopUp');

			// Canvas
			this.canvas = document.getElementById('canvas');

			// WebGL Renderer
			{
				this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
				this.renderer.name = "Renderer";
				this.renderer.setClearColor(0x220022);

				this.renderer.setPixelRatio(window.devicePixelRatio);
				this.renderer.setSize(this.PopUp.clientWidth, this.PopUp.clientHeight);
			}

			// Scene
			{
				this.scene = new THREE.Scene();
				this.scene.name  = "Scene";
			}

			// Percpective Camera
			{
				let fov = 75;
				let aspect = this.PopUp.clientWidth / this.PopUp.clientHeight;
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
				const material = new THREE.MeshPhongMaterial({color: 0xa988ea, emissive: 0xaa66aa});

				let mesh = new THREE.Mesh(geometry, material);
				this.cube = mesh;

				this.scene.add(mesh);
			}

			// // Axes Helper
			// {
			// 	let helper = new THREE.AxesHelper(50);
			// 	this.scene.add(helper);
			// }

			// // Grid Helper
			// {
			// 	let gridHelper = new THREE.GridHelper(500, 500, 0xffffff);
			// 	gridHelper.position.set(0, 0, 0);
			// 	this.scene.add(gridHelper);
			// }

			// Animate
			this.renderer.setAnimationLoop(this.animate);

		},

		animate() {

			this.cube.rotation.x -= 0.01;
			this.cube.rotation.z -= 0.01;

			this.renderer.render(this.scene, this.perspectiveCamera);

		},

		externalClick (event) {

			this.$emit('externalClick', false);

		},

	},

	mounted() {

		this.init();

		const gsap = this.$gsap;

		let tl = gsap.timeline({});

		tl.from(this.cube.position, {

			x: -3,
			y: -3,
			z: -3,
			duration: 2.5,
			ease: "back.out(1.7)"

		}).to(this.cube.rotation, {

			x: +5,
			z: +5,

			duration: 2.5,
			ease: "back.out(3)"

		}, 0);

	},

}

</script>
