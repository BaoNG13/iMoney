<template>
  <div class="mt-6">{{ user.displayName }}</div>
</template>

<script>
// @ is an alias to /src

import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",
  components: {
  },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  }
};
</script>
