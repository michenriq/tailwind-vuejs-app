<template>
  <div class="grid lg:grid-cols-2 bg-gray-100 2xl:grid-cols-5">
    <div
      class="
        px-8
        py-12
        max-w-md
        mx-auto
        sm:max-w-xl
        lg:px-12 lg:py-28 lg:max-w-full
        2xl:col-span-3
      "
    >
      <div class="xl:max-w-xl 2xl:max-w-4xl">
        <img
          class="mt-6 h-10"
          src="@/assets/img/logo-brand.svg"
          alt="Workcation"
        />
        <img
          class="
            mt-6
            rounded-lg
            shadow-xl
            sm:mt-8 sm:h-64 sm:w-full sm:object-cover
            object-center
            lg:hidden
          "
          src="@/assets/img/beach-work.jpg"
          alt="Woman Workcationing on the beach"
        />
        <h1
          class="
            mt-6
            text-2x1
            font-bold
            text-gray-900
            sm:mt-8 sm:text-4xl
            lg:text-3xl
          "
        >
          You can work from anywhere.
          <br class="hidden lg:inline" />
          <span class="text-brand">Take advantage of it.</span>
        </h1>
        <p class="mt-6 text-gray-400 sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful location
          so you can enjoy some nice weather even when you're not on vacation
        </p>
        <div class="mt-4 sm:mt-6">
          <a
            class="
              inline-block
              px-5
              py-3
              bg-brand
              hover:brand-light
              sm:hover:brand-light
              hover:-translate-y-0.5
              transform
              transition
              focus:outline-none
              focus:ring
              focus:ring-offset-2
              focus:ring-brand-light
              focus:ring-opacity-50
              active:brand-dark
              rounded-lg
              shadow-lg
              text-white
              uppercase
              tracking-wider
              font-semibold
              text-sm
              sm:text-base
            "
            href="#"
            >Book your scape</a
          >
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative 2xl:col-span-2">
      <img
        class="absolute inset-0 w-full h-full object-cover object-center"
        src="@/assets/img/beach-work.jpg"
        alt="Woman Workcationing on the beach"
      />
    </div>
    <div
      class="
        max-w-md
        sm:max-w-xl
        lg:max-w-6xl
        2xl:max-w-full
        mx-auto
        px-8
        lg:px-12
        py-8
        2xl:col-span-5
        lg:col-span-3
      "
    >
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <p class="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div
        class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
      >
        <PopularDestinations
          v-for="destination in destinations"
          :key="destination.city"
          :destination="destination"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopularDestinations from '@/components/PopularDestinations.vue'
import { destinations } from '@/utils/popularDestinations.json'

export default defineComponent({
  name: 'App',
  components: { PopularDestinations },
  data() {
    return {
      destinations: destinations
    }
  }
})
</script>
