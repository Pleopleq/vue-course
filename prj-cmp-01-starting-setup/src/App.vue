<template>
<div>
  <ul>
      <resource-item
        v-for="resource in this.resources" 
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></resource-item>
  </ul>
</div>
</template>

<script>
import ResourceItem from './components/ResourceItem.vue'
export default {
  components: { ResourceItem },
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>