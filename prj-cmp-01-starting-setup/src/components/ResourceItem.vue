<template>
    <li>
        <div>
            <header>
                <h2>{{title}}</h2>
                <button>Delete</button>
            </header>
            <div>
                <p>{{description}}</p>
                <a :href="link" target="_blank">View Resource</a>
            </div>
        </div>
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

<style>

</style>