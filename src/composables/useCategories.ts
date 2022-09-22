const categories = useSessionStorage<string[]>("categories", []);
const selectedCategories = ref<string[]>([]);

const useCategories = () => {
    const setCategories = (products: Product[]) => {
        const cats = [] as string[];

        products.map((prod: Product) => prod.cats.forEach((cat: string) => {
            if (!cats.includes(cat)) {
                cats.push(cat);
            }
        }));

        categories.value = cats;
        selectedCategories.value = [];
    };

    return {
        categories,
        selectedCategories,
        setCategories
    };
};

export { useCategories };
export default useCategories;
