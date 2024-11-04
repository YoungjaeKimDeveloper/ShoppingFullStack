import React, { useState } from "react";

const CreatePage = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImageUrl,
    };
    // Reset Components
    handleCreateProuct(newProduct);
    setproductName("");
    setProductPrice("");
    setProductImageUrl("");
  };
  const handleCreateProuct = async (newProduct) => {
    const { name, price, image } = newProduct;
    if (!name || !price || !image) {
      throw new Error("Fill up the All Forms Please");
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!res.ok) {
      throw new Error("Failed to create product. Please try again");
    }
    const data = await res.json();
    return { success: true, message: "You create the Product", data: data };
  };

  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-center bg-blue-800">
      <h1 className="mb-10 text-4xl font-bold tracking-wide text-pink-400">
        Create New Product
      </h1>
      <div className="create-Container flex h-2/4 w-2/4 flex-col items-center justify-center rounded-xl bg-pink-50 p-4">
        <div className="flex w-1/2 flex-col">
          <form
            className="flex h-full w-full flex-col gap-y-2 rounded-xl bg-red-200 p-4"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              placeholder="Produt Name"
              className="rounded-xl p-2"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price"
              className="rounded-xl p-2 placeholder:hidden"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="productImageUrl"
              className="rounded-xl p-2"
              value={productImageUrl}
              onChange={(e) => setProductImageUrl(e.target.value)}
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
