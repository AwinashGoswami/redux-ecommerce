import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../container/ProductComponent'
import axios from 'axios'
import { setProduct } from '../redux/actions/productActions'


const ProductListing = () => {

  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((error) => console.log(error))
    dispatch(setProduct(response.data));

  }

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, [])

  console.log(products);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing