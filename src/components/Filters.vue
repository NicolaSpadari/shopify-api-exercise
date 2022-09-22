<template>
    <div class="bg-white">
        <div>
            <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    -->
            <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
                <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
                <div class="fixed inset-0 bg-black bg-opacity-25" />

                <div class="fixed inset-0 z-40 flex">
                    <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
                    <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div class="flex items-center justify-between px-4">
                            <h2 class="text-lg font-medium text-gray-900">
                                Filters
                            </h2>
                            <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x-mark -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Filters -->
                        <form class="mt-4 border-t border-gray-200">
                            <h3 class="sr-only">
                                Categories
                            </h3>
                            <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                                <li>
                                    <a href="#" class="block px-2 py-3">Totes</a>
                                </li>

                                <li>
                                    <a href="#" class="block px-2 py-3">Backpacks</a>
                                </li>

                                <li>
                                    <a href="#" class="block px-2 py-3">Travel Bags</a>
                                </li>

                                <li>
                                    <a href="#" class="block px-2 py-3">Hip Bags</a>
                                </li>

                                <li>
                                    <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
                                </li>
                            </ul>

                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Color</span>
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div id="filter-section-mobile-0" class="pt-6">
                                    <div class="space-y-6">
                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Category</span>
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div id="filter-section-mobile-1" class="pt-6">
                                    <div class="space-y-6">
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Size</span>
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div id="filter-section-mobile-2" class="pt-6">
                                    <div class="space-y-6">
                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-3" class="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-4" class="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-size-5" class="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- DESKTOP -->
            <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <p class="text-4xl font-bold tracking-tight text-gray-900">
                        {{ collectionName }}
                    </p>

                    <div class="flex items-center space-x-4">
                        <div class="relative inline-block text-left">
                            <div>
                                <button ref="sort" type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" @click="collapsedSorting = !collapsedSorting">
                                    Sort by: {{ selectedOrder }}
                                    <i-heroicons-solid-chevron-down w-5 h-5 ml-1 text-gray-400 />
                                </button>
                            </div>

                            <div v-show="!collapsedSorting" absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-2xl>
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

                        <div class="relative inline-block text-left">
                            <div>
                                <button ref="numItems" type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" @click="collapsedItemsPerPage = !collapsedItemsPerPage">
                                    Items per page: {{ itemsPerPage }}
                                    <i-heroicons-solid-chevron-down w-5 h-5 ml-1 text-gray-400 />
                                </button>
                            </div>

                            <div v-show="!collapsedItemsPerPage" absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-2xl>
                                <div py-1>
                                    <div v-for="num in sizes" :key="num">
                                        <input :id="num" v-model="itemsPerPage" type="radio" @change="emit('resize', itemsPerPage)" name="numItems" hidden :value="num">
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

                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-6">
                            <span class="sr-only">Filters</span>

                            <i-heroicons-solid-funnel w-5 h-5 />
                        </button>
                    </div>
                </div>

                <div pt-6 pb-24>
                    <div grid grid-cols-1 gap-x-8 gap-y-10 lg="grid-cols-4">
                        <div hidden lg="block">
                            <div pb-5>
                                <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false" @click="collapsedCategories = !collapsedCategories">
                                    <span font-medium text-dark-800>
                                        Categories
                                        <span text-xs ml-1 text-gray-500>({{ categories.length }})</span>
                                    </span>
                                    <span class="ml-6 flex items-center">
                                        <i-heroicons-solid-plus v-show="collapsedCategories" w-5 h-5 />
                                        <i-heroicons-solid-minus v-show="!collapsedCategories" w-5 h-5 />
                                    </span>
                                </button>

                                <div v-show="!collapsedCategories" pt-5>
                                    <div space-y-4>
                                        <div v-for="cat in categories" :key="cat" flex items-center>
                                            <input :id="cat" v-model="selectedCategories" :value="cat" type="checkbox" :name="cat" h-4 w-4 rounded border-gray-300 text-blue-600 focus="ring-blue-500" pointer @change="emit('choose')">
                                            <label :for="cat" ml-3 text-sm text-gray-600 pointer>{{ cat }}</label>
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
            </main>
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
    const collapsedCategories = ref(true);
    const collapsedSorting = ref(true);
    const collapsedItemsPerPage = ref(true);

    // onClickOutside(sort, () => collapsedSorting.value = true);
</script>
