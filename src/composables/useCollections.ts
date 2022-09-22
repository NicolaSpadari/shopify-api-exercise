const collections = useSessionStorage<Collection[]>("collections", []);
const collectionId = useSessionStorage<number>("collectionId", 0);
const collectionName = useSessionStorage<string>("collectionName", "");

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

    const setCollection = (coll: Collection) => {
        collectionId.value = coll.collection_id;
        collectionName.value = coll.title;
    }

    return {
        collections,
        collectionId,
        collectionName,
        setCollections,
        setCollection
    };
};

export { useCollections };
export default useCollections;
