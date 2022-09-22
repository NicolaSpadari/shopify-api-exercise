const ordering = ["name", "updated", "created", "published"];
const direction = ["asc", "desc"]
const selectedOrder = ref("name");
const selectedDirection = ref("asc");
const itemsPerPage = ref(5);

const useOrder = () => {
    return {
        ordering,
        direction,
        selectedOrder,
        selectedDirection,
        itemsPerPage
    };
};

export { useOrder };
export default useOrder;
