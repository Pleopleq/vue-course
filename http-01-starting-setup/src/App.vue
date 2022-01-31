<template>
  <div>
    <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences
      :results="savedSurveyResults"
      :loadExperiences="loadExperiences"
      :isLoading="isLoading"
      :errorMsg="serverErrorMsg"
    ></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      savedSurveyResults: [],
      isLoading: false,
      serverErrorMsg: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      const surveys = fetch(
        'https://vue-course-4d955-default-rtdb.firebaseio.com/surveys.json',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      surveys
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.isLoading = false;
          this.serverErrorMsg = null;
          const result = [];
          for (let id in data) {
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          return (this.savedSurveyResults = result);
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
          this.serverErrorMsg = 'Failed to fetch data - Please try again.';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
