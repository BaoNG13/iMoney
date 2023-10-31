<template>
    <!-- Start: Info     -->
    <div class="row" v-if="user">
        <div class="container mx-auto p-0">
            <div class="text-center">
                <div class="w-24 h-25 rounded-full overflow-hidden mx-auto">
                    <img class="w-full h-auto object-cover"
                        src="http://172.16.10.200:8080/static/0625831e/images/svgs/logo.svg" size="xs"
                        alt="User's Profile Avatar">
                </div>
                <div class="font-bold text-2xl text-primary mt-3">{{ user.displayName }}</div>
                <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
            </div>
        </div>
    </div>

    <!-- Start: Menu -->
    <div class="row">
        <div class="container mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-primary mb-2">General</h3>
                </div>
                <div class="col-span-1">
                    <ul>
                        <li class="text-dark last:text-red" v-for="profileOption in profileOptions"
                            :key="profileOption.name">
                            <router-link :to="profileOption.route" class="flex justify-between items-center py-3">
                                <div class="flex items-center text-left">
                                    <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                                    <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                                </div>
                                <div class="text-right">
                                    <i class="t2ico t2ico-arrow-right"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
    setup() {
        const profileOptions = reactive(PROFILE_OPTIONS);

        const { getUser } = useUser();
        const { user } = getUser();
        return { profileOptions, user };
    }
}
</script>