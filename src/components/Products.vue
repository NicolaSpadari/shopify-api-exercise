<template>
    <div mt-20>
        <Filters @choose="first()" @resize="handlePageResize" />

        <div v-if="filteredProducts.length" mt-20>
            <div grid grid-cols-2 md="grid-cols-3" lg="grid-cols-6" gap-2>
                <div v-for="product in pagedProducts" :key="product.id" pointer @click="setProduct(product.id); showModal()">
                    <img :src="product.image.src" w-full max-h-150px>
                    <p>{{ product.title }}</p>

                    <div mt-5>
                        <p>Created at {{ getDate(product.created_at) }}</p>
                        <p>Published at {{ getDate(product.published_at) }}</p>
                        <p>Updated at {{ getDate(product.updated_at) }}</p>
                        <p bg-blue-300 p-1 text-xs inline>
                            {{ product.tags }}
                        </p>
                    </div>
                </div>
            </div>

            <div crate>
                <div class="inline-flex items-center justify-center gap-3">
                    <button
                        class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                        @click="prev()"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <p class="text-xs">
                        {{ currentPage }}
                        <span class="mx-0.25">/</span>
                        {{ totalPages }}
                    </p>

                    <button
                        class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                        @click="next()"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-else>
            choose a collection
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { filteredProducts } = useProducts();
    const pageSize = ref(5);
    const { result: pagedProducts, currentPage, totalPages, first, prev, next } = usePagination(filteredProducts, pageSize);
    const { setProduct } = useProduct();
    const { showModal } = useModal();

    const getDate = (date: string) => {
        return new Date(date).toISOString().substring(0, 10);
    };

    const handlePageResize = (num: number) => {
        pageSize.value = num;
        first();
    }
</script>
