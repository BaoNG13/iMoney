<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- Start: Form -->
            <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit">
                <div class="row ">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full Name</span>
                        <input id="fullName" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="iMoney..." v-model="fullName">
                    </label>
                </div>
                <div class="row ">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email Address</span>
                        <input id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="example@gmail.com..." autocomplete="username" v-model="email">
                    </label>
                </div>
                <div class="row ">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="Example..." autocomplete="current-password" v-model="password">
                    </label>
                </div>
                <div class="row">
                    <button v-if="!isPending" type="submit"
                        class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
                        Sign Up
                    </button>
                    <button v-else type="button"
                        class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
                        disabled>
                        Loading...
                    </button>
                </div>
            </form>
            <!-- Start: Error -->
            <div v-if="error" class="mt-6 text-rose-700 font-bold text-center">
                <span>{{ error }}</span>
            </div>
            <!-- Start: Direction -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm already a member.</span>
                <span class="ml-1 ">
                    <router-link :to="{ name: 'Login', params: {} }" class=" text-primary font-bold">
                        Sign In
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";

export default {
    setup() {
        const { error, isPending, signUp } = useSignUp();
        const router = useRouter();

        const fullName = ref("");
        const email = ref("");
        const password = ref("");

        async function onSubmit() {
            await signUp(email.value, password.value, fullName.value);
            if (!error.value) router.push({ name: "Profile", params: {} })
        }

        return { fullName, email, password, error, isPending, onSubmit };
    }
}
</script>
