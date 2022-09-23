<template>
    <Teleport to="body">
        <div z-50 relative role="dialog">
            <Transition name="fade">
                <div v-show="props.open" bg="gray-800/50" inset-0 transition-opacity fixed />
            </Transition>

            <div inset-0 fixed overflow-hidden :class="props.open ? '' : 'pointer-events-none'">
                <div id="backdrop" inset-0 absolute overflow-hidden>
                    <div flex max-w-full inset-y-0 right-0 pointer-events-none fixed>
                        <Transition name="slide">
                            <div v-show="props.open" max-w-sm w-screen transform pointer-events-auto>
                                <aside ref="panel" flex flex-col h-full shadow-xl>
                                    <div h-screen>
                                        <slot />
                                    </div>
                                </aside>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        open: Boolean
    }>();

    const emit = defineEmits(["close"]);

    const panel = ref<HTMLElement | null>(null);

    onClickOutside(panel, (e: any) => {
        if (e.target.id === "backdrop") {
            emit("close");
        }
    });
</script>

<style scoped>
    .slide-enter-active,
    .slide-leave-active{
        @apply transition-transform ease-in-out duration-300 translate-x-0;
    }
    .slide-enter-from,
    .slide-leave-to{
        @apply translate-x-full;
    }
</style>
