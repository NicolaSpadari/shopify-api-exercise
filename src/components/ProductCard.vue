<template>
    <div class="group" relative pointer>
        <div min-h-80 transition-opacity aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover="opacity-75" lg="aspect-none h-80">
            <img :src="props.product.image.src" :alt="props.product.title" size-full object-cover object-center>
        </div>
        <div mt-4>
            <p class="text-sm text-gray-700">
                {{ props.product.title }}
            </p>
            <p text-sm text-gray-500 capitalize mt-2>
                {{ props.product.tags }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        product: Product
    }>();
</script>
