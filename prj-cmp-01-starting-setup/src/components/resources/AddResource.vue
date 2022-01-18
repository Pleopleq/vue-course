<template>
    <div>
        <base-card>
            <h2>Add Resource</h2>
            <form @submit.prevent="addResource">
                <div class="form-control">
                    <label for="tile">Title</label>
                    <input type="text" id="title" name="title" v-model="title">
                </div>
                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" rows="3" v-model="description"></textarea>
                </div>
                <div class="form-control">
                    <label for="link">Link</label>
                    <input type="url" id="link" name="link" v-model="url">
                </div>
                <div>
                    <base-button type="submit">Add Resource</base-button>
                </div>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            url: ''
        }
    },
    methods: {
        addResource() {
            this.$emit('add-resource', this.title, this.description, this.url)
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>