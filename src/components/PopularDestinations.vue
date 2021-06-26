<template>
  <div
    class="
      flex
      items-center
      rounded-lg
      bg-white
      shadow-lg
      overflow-hidden
      max-w-md
    "
  >
    <img
      class="h-32 w-32 flex-shrink-0"
      :src="getImg(destination.imageUrl)"
      :alt="destination.imageAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ destination.city }}
      </h3>

      <p class="text-gray-600">
        ${{ destination.averagePrice }} / night average
      </p>
      <div class="mt-4">
        <a
          href="#"
          class="text-brand hover:text-indigo-500 font-semibold text-sm"
        >
          Explore {{ destination.propertyCount }} properties
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Destination } from '@/models'

export default defineComponent({
  props: {
    destination: {
      type: Object as PropType<Destination>,
      required: true
    }
  },
  methods: {
    getImg(image: any) {
      return require(`@/assets${image}`)
    }
  }
})
</script>
