<template>
 <div>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
    <component :is="selectedTab" @add-resource="addNewResource"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    provide() {
        return {
            resources: this.resources
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addNewResource(title, description, url) {
            const newResource = {
                id: title,
                title,
                description,
                link: url
            }
            this.resources.push(newResource)
            this.setSelectedTab('stored-resources')
        }
    }
}
</script>

<style>

</style>