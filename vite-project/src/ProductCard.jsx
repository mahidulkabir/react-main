import React from "react";

const ProductCard = () => {
  return (
    <div className="mx-auto mt-20">
      <h1 className="text-3xl font-bold">These Are Products</h1>
      <div className="flex gap-3 justify-evenly">
        {/* product 1  */}
        <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-5">
          <figure>
            <img src="./src/assets/FirstShoe.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* product 2  */}
        <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-5">
          <figure>
            <img src="./src/assets/FirstShoe.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* product 3  */}
        <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-5">
          <figure>
            <img src="./src/assets/FirstShoe.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
