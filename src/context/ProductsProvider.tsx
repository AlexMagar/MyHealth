import { ReactElement, createContext, useEffect, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number
}
// const initState: ProductType[]=[]

const initState: ProductType[] =[
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Delux Widget",
        "price": 29.99
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: []}

export const ProductsContext = createContext<UseProductsContextType>(initContextState)

const UseProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ProductsProvider = ({ children}: ChildrenType): ReactElement =>{
    const [products, setProducts] = useState<ProductType[]>(initState)

    // useEffect(() => {
    //     const fetchProducts = async(): Promise<ProductType[]> =>{
    //         const data = await fetch("http://localhost:5173/products").then(res => {
    //             return res.json()
    //         }).catch(err =>{
    //                 if(err instanceof Error) console.log(err.message);
    //             })
    //             return data
    //     }
    //     fetchProducts().then(products => setProducts(products))
    // },[])

    return(
        <UseProductsContext.Provider value={{ products}}>
            {children}
        </UseProductsContext.Provider>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             