<template>
  <b-container>
    <div>
      <b-table striped hover :items="teacher">
        <template v-slot:cell(first_name)="data">
          <router-link :to="`/single/teacher/${data.index}`">
            {{ data.value }}
          </router-link>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["teacher"]),
  },
};
</script>
