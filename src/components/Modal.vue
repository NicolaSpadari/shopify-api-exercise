<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="visible" fixed inset-0 grid place-content-center bg="gray-800/65">
                <div w-50vh h-50vh bg-white overflow-y-auto p-10>
                    <div flex justify-end>
                        <i-heroicons-solid-x w-6 h-6 text-dark-800 pointer @click="closeModal(); product = null;">
                            close
                        </i-heroicons-solid-x>
                    </div>
                    <div v-if="props.product">
                        {{ props.product }}
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        product: Product | null
    }>();

    const { visible, closeModal } = useModal();
    const { product } = useProduct();
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        @apply transition-opacity ease-in-out duration-300;
    }
    .fade-enter-from,
    .fade-leave-to {
        @apply opacity-0;
    }
</style>
