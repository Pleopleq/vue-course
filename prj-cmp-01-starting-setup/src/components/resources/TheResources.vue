<template>
 <div>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
    <keep-alive>
        <component :is="selectedTab" @add-resource="addNewResource"></component>
    </keep-alive>
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
            resources: this.resources,
            removeResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addNewResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link: url
            }
            this.resources.unshift(newResource)
            this.setSelectedTab('stored-resources')
        },
        removeResource(resId) {
            const resIndex = this.resources.findIndex(res => res.id === resId)
            this.resources.splice(resIndex, 1)
        }
    }
}
</script>

<style>

</style>