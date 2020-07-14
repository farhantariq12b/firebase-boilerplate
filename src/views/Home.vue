<template>
  <div class="w-full flex justify-center">
    <form class="w-full max-w-lg">
		  <div class="flex flex-wrap -mx-3 mb-6">
		    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
		        First Name
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="firstName" @input="saveData"/>
		    </div>
		    <div class="w-full md:w-1/2 px-3">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
		        Last Name
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="lastName" @input="saveData"/>
		    </div>
		  </div>
		  <div class="flex flex-wrap -mx-3 mb-6">
		    <div class="w-full px-3">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
		        Email Address
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email Address" name="emailAddress" @input="saveData"/>
		    </div>
		  </div>
		  <div class="flex flex-wrap -mx-3 mb-2">
		    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
		        City
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" name="city" @input="saveData"/>
		    </div>
		    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
		        State
		      </label>
		      <div class="relative">
		       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="State" name="state" @input="saveData" />
		      </div>
		    </div>
		  </div>
		</form>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { debounce } from '@/components/helpers/debounce'

export default {
  name: 'Home',
  mounted() {
  	this.bindUser({ id: 'F71LsA2ki4Cuv9zfEEGC' })
  },
  methods: {
  	...mapActions(['updateUser', 'bindUser']),
		
		saveData: debounce(function(e) {
			this.updateUser({
				name: e.target.name,
				value: e.target.value
			})
		}, 200)
		
  }
}
</script>
