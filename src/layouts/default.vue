<template>
    <navigation-header />
    <slot />
    <navigation-bottom />
</template>
<script>
    import NavigationBottom from "@/components/NavigationBottom.vue";
    import NavigationHeader from "@/components/NavigationHeader.vue";
    export default {
        components: {
            NavigationHeader,
            NavigationBottom
        }
    }
</script>