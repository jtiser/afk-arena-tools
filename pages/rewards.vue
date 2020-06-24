<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <stage-idle-rewards></stage-idle-rewards>
    </v-flex>
  </v-layout>
</template>

<script>
import StageIdleRewards from "~/components/stage-idle-rewards";
export default {
  components: {
    StageIdleRewards
  }
};
</script>
