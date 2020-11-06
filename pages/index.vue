<template>
<div class="relative w-screen h-screen bg-teal-800 flex flex-col overflow-y-hidden overflow-x-hidden">

	<div class="w-full h-full overflow-y-auto flex flex-col">

		<div class="w-full h-18 px-2 flex-shrink-0 bg-gray-900 flexcontainer">

			<div class="relative w-auto min-w-64 flex-shrink-0 text-xl sm:text-2xl md:text-3xl text-gray-400 font-semibold flex">
				<div id="ntt-text"></div>
				<div class="ml-2 text-pink-700">
					<span id="text"></span>
					<span id="cursor">_</span>
				</div>
				<nuxt-link to="/test" class="absolute w-full h-full"></nuxt-link>
			</div>

			<div class="w-auto ml-auto mr-0 sm:mr-8 h-full flexcontainer select-none">

				<div @click="popingUp = true" class="btn w-22 h-10 mx-1 rounded-full border-2 border-teal-600 bg-teal-600 bg-opacity-30 hover:bg-opacity-80 text-xl cursor-pointer text-gray-400 flexcontainer" content="Three.js" v-tippy="{arrow: true, placement: 'top'}">Three.js</div>

			</div>

		</div>

		<div class="w-full flex-1 bg-gray-800 flex">


			<!-- Main -->
			<div class="w-full h-auto flex-1 flex flex-col bg-green-500">

				<div class="trigger flex flex-col w-full min-w-18">

					<div v-show="showComponent" v-for="doto of todos" :key="doto" :id="doto" class="w-full h-full">
						<prism language="scss" class="scss line-numbers flex w-full h-64">
							.VueToNuxtLogo {
								display: inline-block;
								animation: turn 2s linear forwards 1s;
								transform: rotateX(180deg);
								position: relative;
								overflow: hidden;
								height: 180px;
								width: 245px;
							}
						</prism>
					</div>

				</div>

			</div>

		</div>

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

import Prism from 'prismjs';

export default {

	name: "Home",

	data() {

		return {

			sourcecode: '',

			popingUp: false,

			todos: ['a', 'b', 'c'],

			showComponent: false

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
				delay: 0.5

			});

		}

	},

	mounted () {

		Prism.highlightAll();

		const gsap = this.$gsap;
		const TextPlugin = this.$TextPlugin;
		const ScrollTrigger = this.$ScrollTrigger;

		gsap.registerPlugin(TextPlugin, ScrollTrigger);

		const tl = gsap.timeline({});

		tl.from('#a', {y: 1500, duration: 1, onStart: () => {this.showComponent = true}})
		.from('#b', {y: 1500, duration: 1}, '-=0.5')
		.from('#c', {y: 1500, duration: 1}, '-=0.5')

		this.animateNttText();
		this.initAnimation();

	},

}

</script>
