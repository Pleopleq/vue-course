<template>
    <div>
        <the-header :title="'RememberMe'"></the-header>
        <stored-resources :resources="resources"></stored-resources>
    </div>
</template>

<script>
import StoredResources from './components/resources/StoredResources.vue'
import TheHeader from './components/layouts/TheHeader.vue'
export default {
  components: { StoredResources, TheHeader },
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