<template>
    <div class="group" relative pointer>
        <div min-h-80 transition-opacity aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover="opacity-75" lg="aspect-none h-80">
            <img :src="props.product.image.src" :alt="props.product.image.title" size-full object-cover object-center>
        </div>
        <div mt-4 flex justify-between>
            <div>
                <p class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0" />
                    Basic Tee
                </p>
                <p class="mt-1 text-sm text-gray-500">
                    Black
                </p>
            </div>
            <p class="text-sm font-medium text-gray-900">
                $35
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        product: Product
    }>();
</script>
