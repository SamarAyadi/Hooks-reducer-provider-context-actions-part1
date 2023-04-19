import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import {useContext,useState} from 'react'


const ShowProduct = () => {

    const myParams = useParams();

    const {products }= useContext(ProductContext);

    
    const myProduct = products.find(product => product.id === +myParams.id)
    const [product,setProduct] = useState(myProduct)
   

    return (
      <>
    <h1>{product.label}</h1>
     <button className="btn btn-dark"> {product.price}</button>
    </>
  )
  //hooks for redirecting
  //const navigate = useNavigate();
 
  //function to redirect
  // const redirectToHome = () => {
  // navigate("/")
  // }
}

export default ShowProduct