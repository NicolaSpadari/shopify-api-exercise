<template>
    <div crate>
        <div class="inline-flex items-center justify-center gap-3">
            <button
                class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                @click="emit('prev')"
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
                @click="emit('next')"
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
</template>

<script lang="ts" setup>
    const emit = defineEmits(["prev", "next"]);

    const { filteredProducts } = useProducts();
    const { currentPage, totalPages } = usePagination(filteredProducts, 5);
</script>
