<template>
    <div class="group">
        <img :src="props.product.image.src" :alt="props.product.title" transition-opacity group-hover="opacity-75" pointer object-cover w-full h-56 shadow-xl rounded-xl />

        <div p-4>
            <p text-lg font-bold text-gray-700 pointer>
                {{ props.product.title }}
            </p>

            <p mt-2 text-gray-500 capitalize text-sm>
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
