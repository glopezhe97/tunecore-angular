export interface ProductInterface {
    name: string,
    price: number,
    isOnSale: boolean,
    featured: boolean,
    stock: number,
    description: string,
    img_url: string,
    disposition: number[],
    brand_name: string,
    category_name: string,
    subcategory_name: string,
    product_type_names: string[]
}
