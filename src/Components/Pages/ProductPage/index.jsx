import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[0, 1, 2, 3].map((value) => (
          <Grid key={value} item xs={2} sm={3} md={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
