declare interface Collection {
    collection_id: number
    updated_at: string
    body_html: string
    default_product_image: {
        id: number
        created_at: string
        position: number
        updated_at: string
        product_id: number
        src: string
        variant_ids: any[]
        width: number
        height: number
    }
    handle: string
    image: null
    title: string
    sort_order: string
    published_at: string
}

declare interface Product {
    id: number
    title: string
    body_html: string
    vendor: string
    product_type: string
    created_at: string
    handle: string
    updated_at: string
    published_at: string
    template_suffix: null
    status: string
    published_scope: string
    tags: string
    cats: string[]
    admin_graphql_api_id: string
    options: ProductOption[]
    images: ProductImage[]
    image: ProductImage
}

interface ProductImage {
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: null
    width: number
    height: number
    src: string
    variant_ids: any[]
    admin_graphql_api_id: string
}

interface ProductOption {
    id: number
    product_id: number
    name: string
    position: number
}