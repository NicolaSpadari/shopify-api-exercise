<template>
    <div relative px-4 py-8 mx-auto max-w-screen-xl>
        <div items-start grid grid-cols-1 gap-8 md="grid-cols-2">
            <div grid gap-4 md="grid-cols-1">
                <img :src="product.image.src" :alt="product.title" object-cover w-full aspect-square rounded-xl>

                <div v-if="product.images.length > 1" grid grid-cols-2 gap-4 lg="mt-3">
                    <img v-for="img in product.images" :key="img.id" :src="img.src" :alt="`Image ${img.position}`" object-cover w-full aspect-square rounded-xl>
                </div>
            </div>

            <div>
                <span v-if="product.product_type" inline-block font-bold border border-blue-600 rounded-full tracking-wide px-3 font-medium py-1 text-xs bg-gray-100 text-blue-600 mb-8>
                    {{ product.product_type }}
                </span>

                <div flex justify-between>
                    <div max-w-xs>
                        <p text-2xl font-bold>
                            {{ product.title }}
                        </p>

                        <p mt-1 text-sm>
                            {{ product.vendor }}
                        </p>
                    </div>

                    <p v-if="product.variants[0]?.price" text-lg font-bold>
                        {{ product.variants[0].price }} €
                    </p>
                </div>

                <div relative mt-4>
                    <p text-dark-800 v-html="product.body_html" />
                </div>

                <div space-y-5 mt-8>
                    <div v-if="product.variants.length > 1">
                        <p text-sm font-medium>
                            Choose variant
                        </p>

                        <div mt-3>
                            <div flex space-x-3>
                                <label v-for="variant in product.variants" :key="variant.id" :for="variant.id" pointer>
                                    <input :id="variant.id" v-model="choosenVariant" type="radio" :value="variant.id" name="variant" class="peer" hidden>

                                    <span px-3 py-1 text-xs font-medium border rounded-full transition-colors peer-checked="bg-dark-800 text-white border-dark-800">
                                        {{ variant.title }}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p text-sm font-medium>
                            Tags
                        </p>

                        <div mt-3>
                            <div flex space-x-3>
                                <div v-for="cat in formatTags(product.tags)" :key="cat" px-3 py-1 text-xs font-medium border rounded-full text-gray-500 capitalize>
                                    {{ cat }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" :disabled="choosenVariant === 0 && product.variants.length > 1" block px-5 py-3 mt-10 text-xs font-medium text-white bg-blue-500 rounded-md @click="handleCart()">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { product } = useProduct();
    const choosenVariant = ref(0);

    const formatTags = (tags: string) => {
        return tags.replaceAll(", ", ",").split(",");
    };

    const handleCart = () => {
        alert("TODO: handle cart etc...");
    };
</script>
