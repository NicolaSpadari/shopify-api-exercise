<template>
    <div crate mt-5>
        <div flex items-center justify-center gap-3>
            <button w-8 h-8 border border-gray-100 rounded @click="emit('prev')">
                <i-heroicons-solid-chevron-left w-3 h-3 text-dark-700  />
            </button>

            <p text-xs>
                {{ props.currentPage }}
                <span>/</span>
                {{ props.totalPages }}
            </p>

            <button w-8 h-8 border border-gray-100 rounded @click="emit('next')">
                <i-heroicons-solid-chevron-right w-3 h-3 text-dark-700  />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        currentPage: number
        totalPages: number
    }>();

    const emit = defineEmits(["prev", "next"]);
</script>
