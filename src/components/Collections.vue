<template>
    <div bg-gray-100>
        <div crate>
            <div py-16 lg="py-24">
                <p text-2xl font-bold font-heading text-dark-800>
                    Collections
                </p>

                <div mt-6 space-y-12 lg="grid grid-cols-3 gap-x-6 space-y-0">
                    <div v-for="collection in collections" :key="collection.collection_id" @click="setCollection(collection); setProducts(collectionId)" class="group" relative>
                        <div transition-opacity pointer relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover="opacity-75" sm="aspect-w-2 aspect-h-1 h-64" lg="aspect-w-1 aspect-h-1">
                            <img :src="collection.default_product_image.src" :alt="collection.title" size-full object-cover object-center>
                        </div>
                        <p pointer font-medium text-dark-800 mt-4>
                            {{ collection.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { collections, collectionId, setCollections, setCollection } = useCollections();
    const { setProducts } = useProducts();

    onBeforeMount(() => {
        if (!collections.value.length) {
            setCollections();
        }
    });

    console.log(collections.value)
</script>
