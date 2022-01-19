<template>
    <div>
        <base-dialog 
        v-if="isInputInvalid"
        :title="'Invalid Input'"
        @close-dialog="confirmError">
            <template #default>
                <p>Please enter valid text into the inputs</p>
            </template>
            <template #actions>
                <base-button @click="confirmError">
                    Okay
                </base-button>
            </template>
        </base-dialog>
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
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
    data() {
        return {
            title: '',
            description: '',
            url: '',
            isInputInvalid: false
        }
    },
    methods: {
        addResource() {
            if (this.title.trim() === '' 
            || this.description.trim() === '' 
            || this.url.trimp() === '') {
                this.isInputInvalid = true
                return;
            }
            this.$emit('add-resource', this.title, this.description, this.url)
        },
        confirmError() {
            this.isInputInvalid = false
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