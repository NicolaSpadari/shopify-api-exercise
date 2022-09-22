const visible = ref(false);

const useModal = () => {
    const showModal = () => {
        visible.value = true;
    };

    const closeModal = () => {
        visible.value = false;
    };

    return {
        showModal,
        closeModal,
        visible
    };
};

export { useModal };
export default useModal;
