<template>
    <div crate>
        <div grid grid-cols-2 gap-6>
            <div>
                <div v-for="cat in categories" :key="cat" space-x-2>
                    <input :id="cat" v-model="selectedCategories" :value="cat" type="checkbox" name="cat" @change="emit('choose')">
                    <label :for="cat">{{ cat }}</label>
                </div>
            </div>
            <div>
                <div space-y-5 mb-10>
                    <div space-y-2>
                        <p>order: {{ selectedOrder }}</p>

                        <div flex space-x-4>
                            <div v-for="order in ordering" :key="order" space-x-2>
                                <input :id="order" v-model="selectedOrder" :value="order" type="radio" name="order" @change="emit('choose')">
                                <label :for="order">{{ order }}</label>
                            </div>
                        </div>
                    </div>

                    <div space-y-2>
                        <p>direction: {{ selectedDirection }}</p>

                        <div flex space-x-4>
                            <div v-for="dir in direction" :key="dir" space-x-2>
                                <input :id="dir" v-model="selectedDirection" :value="dir" type="radio" name="direction" @change="emit('choose')">
                                <label :for="dir">{{ dir }}</label>
                            </div>
                        </div>
                    </div>

                    <div space-x-2>
                        <p inline>
                            Per page:
                        </p>
                        <select v-model="itemsPerPage" @change="emit('resize', itemsPerPage)">
                            <option v-for="size in sizes" :key="size" :value="size">
                                {{ size }}
                            </option>
                        </select>
                    </div>
                </div>

                <p>selected: {{ selectedCategories }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const emit = defineEmits(["choose", "resize"]);
    const { categories, selectedCategories } = useCategories();
    const { ordering, direction, selectedOrder, selectedDirection, itemsPerPage } = useOrder();

    const sizes = [5, 10, 15, 20];
</script>
