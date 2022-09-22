const selectedOrder = ref("name");
const selectedDirection = ref("asc");
const itemsPerPage = ref(5);

const useOrder = () => {
    return {
        selectedOrder,
        selectedDirection,
        itemsPerPage
    };
};

export { useOrder };
export default useOrder;
