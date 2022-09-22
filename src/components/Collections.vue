<template>
    <div>
        <p text-4xl>
            Collections (current: {{ collectionId }})
        </p>
        <div grid grid-cols-2 md="grid-cols-3" lg="grid-cols-4" gap-4>
            <div v-for="collection in collections" :key="collection.collection_id" pointer @click="setCollectionId(collection.collection_id); setProducts(collectionId)">
                <img :src="collection.default_product_image.src" w-full max-h-300px>
                <p>{{ collection.title }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { collections, collectionId, setCollections, setCollectionId } = useCollections();
    const { setProducts } = useProducts();

    onBeforeMount(() => {
        if (!collections.value.length) {
            setCollections();
        }
    });
</script>
