const collections = useSessionStorage<Collection[]>("collections", []);
const collectionId = useSessionStorage<number>("collectionId", 0);

const useCollections = () => {
    const setCollections = async () => {
        const { data } = await useFetch<Collection[]>("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json", {
            afterFetch(ctx) {
                ctx.data = ctx.data.collection_listings;
                return ctx;
            }
        }).get().json();

        collections.value = data.value;
    };

    const setCollectionId = (id: number) => {
        collectionId.value = id;
    }

    return {
        collections,
        collectionId,
        setCollections,
        setCollectionId
    };
};

export { useCollections };
export default useCollections;
