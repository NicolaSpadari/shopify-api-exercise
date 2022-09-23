<template>
    <div bg-white>
        <!-- MOBILE PANEL -->
        <Panel :open="!collapsedPanel">
            <div ml-auto flex size-full max-w-xs flex-col transform overflow-y-auto bg-white py-4 pb-10 shadow-xl>
                <div flex items-center justify-between px-4>
                    <p text-lg font-medium text-dark-800>
                        Filters
                    </p>
                    <button type="button" flex h-10 w-10 items-center justify-center rounded-md p-2 @click="collapsedPanel = true">
                        <i-heroicons-solid-x-mark w-6 h-6 text-gray-400 />
                    </button>
                </div>

                <div mt-5 border-t border-gray-200>
                    <div px-4 py-5>
                        <div pb-5>
                            <button type="button" py-3 text-gray-400 @click="collapsedCategories = !collapsedCategories">
                                <span font-medium text-dark-800>
                                    Categories
                                    <span text-xs ml-1 text-gray-500>({{ categories.length }})</span>
                                </span>
                            </button>

                            <div space-y-4 pt-3>
                                <div v-for="cat in categories" :key="cat" flex items-center>
                                    <input :id="cat" v-model="selectedCategories" :value="cat" type="checkbox" :name="cat" h-4 w-4 rounded border-gray-300 text-blue-600 focus="ring-blue-500" pointer @change="emit('choose')">
                                    <label :for="cat" ml-3 text-gray-600 pointer>{{ cat }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>

        <!-- DESKTOP -->
        <div crate>
            <div flex flex-col lg="flex-row" items-baseline justify-between border-b border-gray-200 pt-10 pb-5>
                <p text-4xl font-bold tracking-tight text-dark-800 mb-5 lg="mb-0">
                    {{ collectionName }}
                </p>

                <div flex items-center space-x-4>
                    <div relative inline-block>
                        <button ref="sort" type="button" class="group" inline-flex justify-center text-sm text-left font-medium text-dark-800 @click="collapsedSorting = !collapsedSorting">
                            Sort by: {{ selectedOrder }}
                            <i-heroicons-solid-chevron-down w-5 h-5 ml-1 text-gray-400 />
                        </button>

                        <div v-show="!collapsedSorting" absolute lg="right-0" z-10 mt-2 w-40 rounded-md bg-white shadow-2xl>
                            <div py-1>
                                <div v-for="order in ordering" :key="order">
                                    <input :id="order" v-model="selectedOrder" type="radio" name="order" hidden :value="order">
                                    <label :for="order" block px-4 py-2 text-sm pointer capitalize hover="bg-gray-50" :class="selectedOrder === order ? 'font-medium text-gray-800' : 'text-gray-500'">
                                        {{ order }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div relative>
                        <button ref="numItems" type="button" class="group" inline-flex justify-center text-sm text-left font-medium text-dark-800 @click="collapsedItemsPerPage = !collapsedItemsPerPage">
                            Items per page: {{ itemsPerPage }}
                            <i-heroicons-solid-chevron-down w-5 h-5 ml-1 text-gray-400 />
                        </button>

                        <div v-show="!collapsedItemsPerPage" absolute lg="right-0" z-10 mt-2 w-40 rounded-md bg-white shadow-2xl>
                            <div py-1>
                                <div v-for="num in sizes" :key="num">
                                    <input :id="num" v-model="itemsPerPage" type="radio" name="numItems" hidden :value="num" @change="emit('resize', itemsPerPage)">
                                    <label :for="num" block px-4 py-2 text-sm pointer capitalize hover="bg-gray-50" :class="itemsPerPage === num ? 'font-medium text-gray-800' : 'text-gray-500'">
                                        {{ num }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div flex>
                        <div>
                            <input id="asc" v-model="selectedDirection" hidden value="asc" type="radio" name="direction" @change="emit('choose')">
                            <label for="asc" px-3 py-1 border rounded-l-md pointer :class="selectedDirection === 'asc' ? 'bg-blue-400 border-blue-400' : ''">
                                <i-heroicons-solid-chevron-up w-4 h-4 :class="selectedDirection === 'asc' ? 'text-white' : 'text-gray-600'" />
                            </label>
                        </div>
                        <div>
                            <input id="desc" v-model="selectedDirection" hidden value="desc" type="radio" name="direction" @change="emit('choose')">
                            <label for="desc" px-3 py-1 border rounded-r-md pointer :class="selectedDirection === 'desc' ? 'bg-blue-400 border-blue-400' : ''">
                                <i-heroicons-solid-chevron-down w-4 h-4 :class="selectedDirection === 'desc' ? 'text-white' : 'text-gray-600'" />
                            </label>
                        </div>
                    </div>

                    <button type="button" p-2 text-gray-400 lg="hidden" @click="collapsedPanel = false">
                        <i-heroicons-solid-funnel w-5 h-5 />
                    </button>
                </div>
            </div>

            <div pt-6 pb-24>
                <div grid grid-cols-1 gap-x-8 gap-y-10 lg="grid-cols-4">
                    <div hidden lg="block">
                        <div pb-5>
                            <button type="button" flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover="text-gray-500" @click="collapsedCategories = !collapsedCategories">
                                <span font-medium text-dark-800>
                                    Categories
                                    <span text-xs ml-1 text-gray-500>({{ categories.length }})</span>
                                </span>
                                <span ml-6 flex items-center>
                                    <i-heroicons-solid-plus v-show="collapsedCategories" w-5 h-5 />
                                    <i-heroicons-solid-minus v-show="!collapsedCategories" w-5 h-5 />
                                </span>
                            </button>

                            <div v-show="!collapsedCategories" pt-5>
                                <div space-y-4>
                                    <div v-for="cat in categories" :key="cat" flex items-center>
                                        <input :id="cat" v-model="selectedCategories" :value="cat" type="checkbox" :name="cat" h-4 w-4 rounded border-gray-300 text-blue-600 focus="ring-blue-500" pointer @change="emit('choose')">
                                        <label :for="cat" ml-3 text-sm text-gray-600 pointer capitalize>{{ cat }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div lg="col-span-3">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const emit = defineEmits(["choose", "resize"]);
    const { collectionName } = useCollections();
    const { categories, selectedCategories } = useCategories();
    const { selectedOrder, selectedDirection, itemsPerPage } = useOrder();

    const sizes = [5, 10, 15, 20];
    const ordering = ["name", "updated", "created", "published"];

    const sort = ref(null);
    const numItems = ref(null);
    const collapsedCategories = ref(true);
    const collapsedSorting = ref(true);
    const collapsedItemsPerPage = ref(true);
    const collapsedPanel = ref(true);

    onClickOutside(sort, () => collapsedSorting.value = true);
    onClickOutside(numItems, () => collapsedItemsPerPage.value = true);
</script>
