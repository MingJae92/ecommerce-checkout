import { useEffect, useState } from "react";
import axios from "axios";
import ProductData from "../../Types/types"; // Ensure correct import
import { Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";

function Homepage() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get<ProductData[]>(
          "https://api.escuelajs.co/api/v1/products"
        );
        console.log(response.data)
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.error("Error fetching product data:", err);
        // setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Server load error. Please try again later.</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <ul>
  {products.map((product) => (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <Typography>Basket</Typography>
      <button>Add</button>
      <button>Remove</button>

      {/* Display all product images */}
      <h3>Product Images:</h3>
      {product.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product ${product.id} - ${index}`}
          width="150"
        />
        
      ))}

      
    </li>
  ))}
</ul>


    </div>
  );
}

export default Homepage;
