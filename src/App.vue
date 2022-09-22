<template>
    <div>
        <Navbar />

        <Suspense>
            <Collections />
        </Suspense>

        <Products />

        <Modal :product="product" />
    </div>
</template>

<script lang="ts" setup>
    const { product } = useProduct();
</script>

<style lang="scss">
    html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    body {
        @apply overflow-x-hidden font-sans min-h-200vh;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }
    [container] {
        @apply mx-auto;
    }
</style>
