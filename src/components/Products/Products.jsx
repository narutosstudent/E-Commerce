import React from "react";
import Product from "./Product/Product";
import { Grid } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$100",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
