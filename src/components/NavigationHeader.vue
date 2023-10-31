<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center ">
                <div class="flex items-center">
                    <div v-if="meta.leading" class="w-10 h-10 overflow-hidden rounded-full">
                        <img src="http://172.16.10.200:8080/static/0625831e/images/svgs/logo.svg" size="sm" alt="UserAVT"
                            class="w-full h-auto object-cover">
                    </div>
                    <h1 class="text-xl font-bold text-dark ml-2">{{meta.text}}</h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="t2ico t2ico-notification text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
    setup() {
        const route = useRoute();
        return {
            meta: computed(() => route.meta)
        }
    }
}
</script>