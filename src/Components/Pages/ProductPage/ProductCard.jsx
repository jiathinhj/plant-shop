import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

const ProductCard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "inherit",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
  }));
  return <Item />;
};

export default ProductCard;
