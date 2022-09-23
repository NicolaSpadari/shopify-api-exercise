<template>
    <div>
        <Navbar />

        <Suspense>
            <CollectionList />
        </Suspense>

        <ProductList />

        <Modal />
    </div>
</template>

<style lang="scss">
    html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    body {
        @apply overflow-x-hidden font-sans;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }

    button:disabled{
        @apply disabled;
    }

    // Generic transitions
    .fade-enter-active,
    .fade-leave-active {
        @apply transition-opacity ease-in-out duration-300;
    }
    .fade-enter-from,
    .fade-leave-to {
        @apply opacity-0;
    }
</style>
