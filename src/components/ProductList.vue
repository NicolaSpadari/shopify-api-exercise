<template>
    <div mt-20>
        <Filters v-if="pagedProducts.length" @choose="first()" @resize="handlePageResize">
            <div v-show="loading" flex justify-center my-25>
                <Loader text-blue-400 w-7 h-7 animate-spin />
            </div>

            <Transition name="fade">
                <div v-show="!loading" mt-20>
                    <div grid grid-cols-1 gap-y-10 gap-x-6 sm="grid-cols-2" lg="grid-cols-3" xl="gap-x-8" mt-5>
                        <ProductCard v-for="product in pagedProducts" :key="product.id" :product="product" @click="setProduct(product.id); showModal()" />
                    </div>

                    <Pagination :current-page="currentPage" :total-pages="totalPages" @prev="prev()" @next="next()" />
                </div>
            </Transition>
        </Filters>
    </div>
</template>

<script lang="ts" setup>
    const { filteredProducts, loading } = useProducts();
    const pageSize = ref(5);
    const { result: pagedProducts, currentPage, totalPages, first, prev, next } = usePagination(filteredProducts, pageSize);
    const { setProduct } = useProduct();
    const { showModal } = useModal();

    const handlePageResize = (num: number) => {
        pageSize.value = num;
        first();
    };
</script>
