<template>
<div class="relative w-screen h-screen flex flex-col overflow-y-hidden overflow-x-hidden">

	<div class="w-full h-full overflow-y-auto flex flex-col">

		<header class="w-full h-18 px-2 flex-shrink-0 bg-gray-900 flexcontainer">

			<nuxt-link to="/resource" class="relative w-auto min-w-64 flex-shrink-0 text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold flex">
				<div id="ntt-text"></div>
				<div class="ml-2 text-pink-500">
					<span id="text"></span>
					<span id="cursor">_</span>
				</div>
			</nuxt-link>

			<div class="w-auto ml-auto mr-0 sm:mr-8 h-full flexcontainer select-none">

				<div @click="popingUp = true" class="btn w-22 h-10 mx-1 rounded-full border-2 border-teal-600 bg-teal-600 bg-opacity-30 hover:bg-opacity-80 text-xl cursor-pointer text-gray-400 flexcontainer" content="Pop up" v-tippy="{arrow: true, placement: 'top'}">Three.js</div>

			</div>

		</header>

		<main class="w-full flex-1 min-h-18 flex">

			<!-- Main -->
			<div class="w-full h-full flex flex-col overflow-hidden">

				<div class="scene w-full h-full">
					<Scene/>
				</div>

				<div>
					<svg class="git absolute bottom-16 transform scale-300 text-pink-600" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							fill="currentColor"
							d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104.49.538.832 1.272.832 2.153 0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
						/>
					</svg>

					<svg class="cube absolute top-16 left-4 transform scale-300 text-teal-600" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.51 4l-5-3h-1l-5 3-.49.86v6l.49.85 5 3h1l5-3 .49-.85v-6L13.51 4zm-6 9.56l-4.5-2.7V5.7l4.5 2.45v5.41zM3.27 4.7l4.74-2.84 4.74 2.84-4.74 2.59L3.27 4.7zm9.74 6.16l-4.5 2.7V8.15l4.5-2.45v5.16z"
							fill="currentColor"
						/>
					</svg>
				</div>


			</div>

		</main>

	</div>

	<!-- Pop Up -->
	<div v-if="popingUp" class="absolute inset-0 bg-gray-900 bg-opacity-75">
		<div class="w-full h-full flexcontainer">
			<PopUp @externalClick="popingUp = $event" />
		</div>
	</div>

</div>
</template>

<script>

export default {

	name: "Home",

	data() {

		return {

			popingUp: false,
			showComponent: false,

		}

	},

	methods: {

		initAnimation(){

			const gsap = this.$gsap;

			const words = ['Demo.', 'Showcase.', 'Examples.'];

			let cursor = gsap.to('#cursor', {

				opacity: 0,
				duration: 0.5,
				ease: "power2",
				repeat: -1

			});

			let mainTimeline = gsap.timeline({repeat: -1, delay: 1.5});

			words.forEach( (word) => {

				let tl = gsap.timeline({repeat: 1, yoyo: true});
				tl.to('#text', {duration: 1, text: word});

				mainTimeline.add(tl);

			});

		},

		animateNttText() {

			this.$gsap.to('#ntt-text', {

				duration: 1,
				text: 'NTT-Template',
				ease: "power2",
				delay: 0.3

			});

		},

		animateSvg() {

			const gsap = this.$gsap;

			const tl = gsap.timeline({});

			tl.to('.cube', {

				y: '90vh',
				rotation: 360,
				duration: 6,
				ease: 'power3.inOut',
				repeat: -1,
				yoyo: true

			}).fromTo('.git', {

				x: '10vw',
				rotation: 360,
				duration: 3,
				ease: 'back.inOut(3)',
				repeat: -1,
				yoyo: true,

			}, {

				x: '80vw',
				rotation: 360,
				duration: 3,
				ease: 'back.inOut(3)',
				repeat: -1,
				yoyo: true,

			}, 0)

		}

	},

	mounted () {

		const gsap = this.$gsap;
		const TextPlugin = this.$TextPlugin;

		gsap.registerPlugin(TextPlugin);

		this.initAnimation();
		this.animateNttText();
		this.animateSvg();

	},

}

</script>
