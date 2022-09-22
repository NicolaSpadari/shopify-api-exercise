const product = useSessionStorage<Product>("product", null);

const useProduct = () => {
    const setProduct = async (product_id: number) => {
        console.log("setting single product");
        const { data } = await useFetch<Product>(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${product_id}.json`, {
            afterFetch(ctx) {
                console.log("fetched product", ctx);
                ctx.data = ctx.data.product;
                return ctx;
            }
        }).get().json();

        product.value = data.value;
    };

    return {
        product,
        setProduct
    };
};

export { useProduct };
export default useProduct;
