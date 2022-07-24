<template>
  <div>
    <h1>UserFirstName : {{ single.first_name }}</h1>
    <h2>UserlastName: {{ single.last_name }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return { single: {} };
  },
  computed: {
    ...mapState(["teacher", "student"]),
  },
  mounted() {
    const user = this[this.$route.params.category][this.$route.params.id];
    this.single = user;
  },
};
</script>
