<template>
    <li>
        <base-card>
            <header class="item-header">
                <h3>{{title}}</h3>
                <button>Delete</button>
            </header>
            <div class="item-body">
                <p>{{description}}</p>
                <a :href="link" target="_blank">View Resource</a>
            </div>
        </base-card>
    </li>
</template>

<script>
export default {
    name: 'Resource',
    props: {
        title: String,
        description: String,
        link: String
    }
}
</script>

<style scoped>
    li {
        padding: 1rem;
    }
    a {
        color: #DAA363;
    }
    .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>