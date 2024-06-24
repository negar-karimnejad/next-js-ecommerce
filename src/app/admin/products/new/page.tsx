import React from "react";
import PageHeader from "../../../../components/admin/PageHeader";
import ProductForm from "../../../../components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <>
      <PageHeader>Add Product</PageHeader>
      <ProductForm />
    </>
  );
}
