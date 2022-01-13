<template>
  <li>
    <h2>{{ name }} {{ favorite ? '(Favorite)' : '' }} </h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  emits: ['toggleFavorite', 'deleteFriend'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    id: String,
    name: String,
    phone: String,
    email: String,
    favorite: Boolean
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id)
    }
  }
};
</script>