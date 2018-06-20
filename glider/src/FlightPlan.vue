<template>
	<div class="flightplan">
		<div class="parts">
		    <Part id="part1" state="inactive">
		      <h1>Hello!</h1>
		    </Part>

		    <Part id="part2" state="inactive">
		      <h1>Part Part Part</h1>
	    	</Part>

	    	<ImageZoom id="imagezoom1" zoomLevel="1" state="inactive" asset="http://placekitten.com/400/400"></ImageZoom>
    	</div>

    	<div class="phases">
    		
    	</div>

    	<div class="places">

    	</div>
	</div>
</template>

<script>

import Part from './components/Part.vue'
import ImageZoom from './components/ImageZoom.vue'


export default {
  name: 'FlightPlan',
  components: {
    Part,
    ImageZoom
  }
}
</script>

