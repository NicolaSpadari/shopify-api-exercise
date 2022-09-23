<template>
    <Teleport to="body">
        <div relative z-50 :class="!visible ? 'pointer-events-none' : ''" role="dialog">
            <Transition enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div v-show="visible" fixed inset-0 bg="gray-500/75" transition-opacity />
            </Transition>

            <div fixed z-10 inset-0 overflow-y-auto>
                <div flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm="block p-0">
                    <span hidden sm="inline-block align-middle h-screen">&#8203;</span>
                    <Transition enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div v-show="visible" ref="modal" relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm="my-8 align-middle max-w-lg w-full" md="max-w-3xl" lg="max-w-5xl">
                            <button absolute right-0 top-0 p-8 z-10 hover="opacity-60" @click="closeModal(); product = null;">
                                <i-heroicons-solid-x-mark w-5 h-5 text-gray-400 />
                            </button>

                            <div p-8>
                                <Transition name="fade">
                                    <div v-show="loading" flex justify-center>
                                        <Loader text-blue-400 w-7 h-7 animate-spin />
                                    </div>
                                </Transition>

                                <Transition name="fade">
                                    <ProductDetail v-if="!loading && product" />
                                </Transition>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
    const { visible, closeModal } = useModal();
    const { product, loading } = useProduct();
    const modal = ref(null);

    onClickOutside(modal, () => {
        closeModal();
        product.value = null;
    });
</script>
