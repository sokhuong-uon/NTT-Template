<template>
<div class="w-screen h-screen bg-gray-800">

	<div class="h w-full h-full flex flex-col">

		<header class="w-full h-22 flexcontainer text-3xl bg-gray-900">

			<nav class="w-32 h-full mr-auto flexcontainer">
				<nuxt-link to="/" class="h-12 text-gray-300 p-1 flexcontainer">Home</nuxt-link>
			</nav>

			<div class="w-24 h-auto flexcontainer">

				<a href="https://github.com/SOKHUONG/NTT-Template" target="_blank" rel="noopener noreferrer">

					<span class="sr-only">Link to Github Repository</span>

					<svg class="transform scale-300 text-teal-600" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							fill="currentColor"
							d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104.49.538.832 1.272.832 2.153 0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
						/>
					</svg>

				</a>

			</div>

		</header>

		<div class="w-full flex-1 flex">

			<main class="w-full h-full flexcontainer">

				<div class="w-full h-full text-pink-600 flexcontainer">

					<div class="relative w-32 h-32 flexcontainer">

						<svg class="transform scale-200" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 21C8.387 17.773 2 13.76 2 8.395 2 5.374 4.42 3 7.5 3c1.74 0 3.41.744 4.5 2 1.09-1.256 2.76-2 4.5-2C19.58 3 22 5.374 22 8.395c0 5.356-6.379 9.396-10 12.605z"
								fill="currentColor"
							/>
						</svg>

						<svg class="absolute transform scale-300 animate-ping duration-500" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 21C8.387 17.773 2 13.76 2 8.395 2 5.374 4.42 3 7.5 3c1.74 0 3.41.744 4.5 2 1.09-1.256 2.76-2 4.5-2C19.58 3 22 5.374 22 8.395c0 5.356-6.379 9.396-10 12.605z"
								fill="currentColor"
							/>
						</svg>
					</div>


				</div>

			</main>

		</div>

	</div>

</div>
</template>

<script>

export default {

}

</script>
