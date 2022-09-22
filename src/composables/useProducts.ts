const products = useSessionStorage<Product[]>("products", []);
const loading = ref(false);

const useProducts = () => {
    const setProducts = async (collection_id: number) => {
        const { setCategories } = useCategories();
        loading.value = true;

        const { data } = await useFetch<Product[]>(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collection_id}/products.json`, {
            afterFetch(ctx) {
                ctx.data.products.map((prod: Product) => prod.cats = prod.tags.replaceAll(", ", ",").split(","));
                ctx.data = ctx.data.products;
                console.log(ctx);

                return ctx;
            }
        }).get().json();

        products.value = data.value;
        setCategories(products.value);
        loading.value = false;
    };

    const filteredProducts = computed(() => {
        const { selectedCategories } = useCategories();
        const { selectedOrder, selectedDirection } = useOrder();
        const prods = ref<Product[]>([]);

        if (selectedCategories.value.length) {
            prods.value = products.value.filter((prod: Product) => prod.cats.some((cat: string) => selectedCategories.value.includes(cat)));
        } else {
            prods.value = products.value;
        }

        if (selectedOrder.value === "name") {
            prods.value = prods.value.sort((a: Product, b: Product) => {
                if (selectedDirection.value === "asc") {
                    return a.title.localeCompare(b.title);
                }

                return b.title.localeCompare(a.title);
            });
        }

        if (selectedOrder.value === "created") {
            prods.value = prods.value.sort((a: Product, b: Product) => {
                if (selectedDirection.value === "asc") {
                    return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf();
                }

                return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf();
            });
        }

        if (selectedOrder.value === "published") {
            prods.value = prods.value.sort((a: Product, b: Product) => {
                if (selectedDirection.value === "asc") {
                    return new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf();
                }

                return new Date(a.published_at).valueOf() - new Date(b.published_at).valueOf();
            });
        }

        if (selectedOrder.value === "updated") {
            prods.value = prods.value.sort((a: Product, b: Product) => {
                if (selectedDirection.value === "asc") {
                    return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
                }

                return new Date(a.updated_at).valueOf() - new Date(b.updated_at).valueOf();
            });
        }

        return prods.value;
    });

    return {
        loading,
        products,
        filteredProducts,
        setProducts
    };
};

export { useProducts };
export default useProducts;
