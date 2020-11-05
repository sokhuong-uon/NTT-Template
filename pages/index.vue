<template>
<div class="relative w-screen h-screen bg-teal-800 flex flex-col overflow-y-hidden overflow-x-hidden">

	<div class="w-full h-full overflow-y-auto flex flex-col">

		<div class="w-full h-18 flex-shrink-0 bg-gray-900 flexcontainer">
			<div class="w-96 text-3xl text-gray-400 font-semibold flex">
				<div>NTT-Template</div>
				<div class="ml-2 text-pink-700">
					<span id="text"></span>
					<span id="cursor">_</span>
				</div>
			</div>
		</div>

		<div class="w-full flex-1 bg-gray-800 flex">

			<div class="w-88 h-full bg-indigo-800">
			</div>

			<div class="w-108 h-auto flex-1 flex flex-col">

				<div id="scss" class="flex w-full c overflow-auto">
					<div>
						<prism language="scss" class="line-numbers flex w-180 h-64">
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

				<div class="flex w-full overflow-auto">
					<prism language="js" class="line-numbers h-104">
						/* eslint-disable no-template-curly-in-string */
						/* eslint-disable no-undef */
						import 'clipboard' // For the copy to clipboard plugin
						import Prism from 'prismjs'
						import Vue from 'vue'

						// Include a theme:
						import 'prismjs/themes/prism-tomorrow.css'

						// Include language support: (optional)
						import 'prismjs/components/prism-scss'
						import 'prismjs/components/prism-markup'
						import 'prismjs/components/prism-ruby'

						// Include the toolbar plugin: (optional)
						import 'prismjs/plugins/toolbar/prism-toolbar'
						import 'prismjs/plugins/toolbar/prism-toolbar.css'

						// Include the autolinker plugin: (optional)
						import 'prismjs/plugins/autolinker/prism-autolinker'
						import 'prismjs/plugins/autolinker/prism-autolinker.css'

						// Include the line numbers plugin: (optional)
						import 'prismjs/plugins/line-numbers/prism-line-numbers'
						import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

						// Include the line highlight plugin: (optional)
						import 'prismjs/plugins/line-highlight/prism-line-highlight'
						import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

						// Include some other plugins: (optional)
						import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
						import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
						import 'prismjs/plugins/show-language/prism-show-language'
						import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

						Vue.component("prism", Prism);
					</prism>
				</div>

				<div id="html" class="flex w-full overflow-auto">
					<prism language="html" class="w-180 min-w-1/4 h-128">
						{{sourcecode}}
					</prism>
				</div>

				<div class="w-full h-36 flexcontainer select-none">
					<div class="btn w-18 h-8 mx-1 bg-teal-600 text-xl cursor-pointer text-gray-400 flexcontainer" content="Left" v-tippy="{arrow: true, placement: 'left'}">Hover</div>
					<div @click="popingUp = true" class="btn w-18 h-8 mx-1 bg-teal-600 text-xl cursor-pointer text-gray-400 flexcontainer" content="Top" v-tippy="{arrow: true, placement: 'top'}">Click</div>
					<div class="btn w-18 h-8 mx-1 bg-teal-600 text-xl cursor-pointer text-gray-400 flexcontainer" content="Right" v-tippy="{arrow: true, placement: 'right'}">Hover</div>
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

import Prism from '@/plugins/prism';
import gsap from "gsap";

export default {

	name: "Home",

	data() {

		return {

			sourcecode: '',

			popingUp: false

		}

	},

	methods: {

		initAnimation(){

			const words = ['Demo.', 'Showcase.', 'Examples.'];

			let cursor = gsap.to('#cursor', {

				opacity: 0,
				duration: 0.5,
				ease: "power2",
				repeat: -1

			});

			let mainTimeline = gsap.timeline({repeat: -1, delay: 1});

			words.forEach( (word) => {

				let tl = gsap.timeline({repeat: 1, yoyo: true});
				tl.to('#text', {duration: 1, text: word});
				mainTimeline.add(tl);

			});
		}

	},

	mounted () {

		this.sourcecode = `
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<title>Without line number</title>
						</head>
						<body>
							<div class="relative w-screen h-screen flex items-center justify-center">

								<h1 class="text-xl text-teal-700">Random</h1>

								<div class="absolute top-16 right-8 w-full h-12 overflow-auto">

									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis aliquam nesciunt ratione distinctio placeat quasi nisi enim reiciendis molestias fuga laborum quia, accusamus, aut alias ex suscipit iste dolorem?

								</div>

								<div class="w-88 h-88 bg-gradient-to-tr from-teal-800 via-indigo-800 to-blue-800 md:w-108 md:h-108">
									<div>hahaha</div>
								</div>

							</div>
						</body>
						</html>
						`;

		this.initAnimation();

	},

}

</script>
