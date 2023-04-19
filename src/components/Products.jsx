import Counter from "./Counter";
import Product from "./Product";
import { useState, useContext, useRef } from "react";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../contexts/ProductContext";

function Products() {
   
    const title = useRef("")
    const price = useRef(0)

    const {products, addProduct} = useContext(ProductContext)
    
   
    const [message,setMessage] = useState("")
    let showList = true;
    

    //!function to get the title from input

    const titleInput = (e) => {
        if(e.target.value === ""){
            setMessage("This is required !")
        }else if (e.target.value.trim().length < 3){
            setMessage("please tape more than three caracters")
        }else{
            setMessage(null)
            
        }
    }


    //! function to get the price from input

    const priceInput = (e) => {
       
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log(title,price);
        let myProduct = {
            id: uuid(),
            label: title.current.value,
            price: price.current.value
        }
        console.log(myProduct);
        addProduct(myProduct)
       title.current.value=""
       price.current.value = 0
         
    }

    
  return (
    <>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum?</p>
        <form onSubmit={submitForm}>
            <div className="form-group my-2">
                <label htmlFor="title" className="form-label">Title</label>
                <input id="title" ref={title} onChange={titleInput} type="text" className="form-control" ></input>
            </div>
            {message && (
            <div className="alert alert-danger">{message}</div>
            )}
            <div className="form-group my-2">
                <label htmlFor="price" className="form-label">Price</label>
                <input id="price" ref={price} onChange={priceInput} type="number" className="form-control"></input>
            </div>
            <button className="btn btn-dark my-2">Save</button>
        </form>

       <Counter />
        
        {showList && (
        <div>
            {products.map((product,i) =>(
                <div key={i}>

                   <Product id={product.id}>
                   
                   <div className="card-body" >
                    <h4 className="card-title">{product.label}</h4>
                    <p className="card-text">
                    <button className="btn btn-danger"> {product.price}</button>
                    </p>
                  </div>
                    </Product> 
                    </div>
            ))}
        </div>) }
        
</>
  )
}

export default Products