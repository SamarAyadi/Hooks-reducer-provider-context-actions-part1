import { createContext, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({children}) => {
    
    const [products,setProducts] = useState([
        {
            id: 1,
            label: "iPhone13",
            price: 3150
        },{
            id: 2,
            label: "Samsung",
            price: 2150
        },{
            id: 3,
            label: "Huawei",
            price: 1150
        }
    ]);

//! function delete product
    const deleteProduct =(id) =>{
        let myList=products.filter(product => product.id !== id)
        setProducts((prev) =>{
            return myList
        })
    }

 //! add new product
    const addProduct = (item) => {
        setProducts([item,...products])
    }


    return (
        <ProductContext.Provider value={{
            message: "salem",
            title: "pinguCoder Crypto",
            products,
            deleteProduct,
            addProduct
            
            }}>
           {children}
        </ProductContext.Provider>
    )
}