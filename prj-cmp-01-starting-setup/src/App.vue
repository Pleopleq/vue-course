<template>
<div>
  <ul v-for="resource in this.resources" :key="resource.id">
      <resource
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></resource>
  </ul>
</div>
</template>

<script>
import Resource from './components/ResourceItem.vue'
export default {
  components: { Resource },
    data() {
        return {
            resources: [
                {
                    id: 1,
                    title: 'Offical Guide',
                    description: 'The official Vue.js documentation',
                    link:'https://vuejs.org'
                },
                {
                    id: 2,
                    title: 'Google',
                    description: 'Learn to google',
                    link:'https://google.com'
                },
            ]
        }
    }
}
</script>

<style>

</style>