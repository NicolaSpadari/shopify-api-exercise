import { StorageSerializers } from "@vueuse/core";

const product = useSessionStorage<Product>("product", null, { serializer: StorageSerializers.object });
const loading = ref(false);

const useProduct = () => {
    const setProduct = async (product_id: number) => {
        loading.value = true;
        const { data } = await useFetch<Product>(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${product_id}.json`, {
            afterFetch(ctx) {
                ctx.data = ctx.data.product;
                return ctx;
            }
        }).get().json();

        product.value = data.value;
        loading.value = false;
    };

    return {
        loading,
        product,
        setProduct
    };
};

export { useProduct };
export default useProduct;
