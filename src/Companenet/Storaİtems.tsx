import React from "react";
import { UseShoppinCartContent } from "../Content/ShoppingCartContent";

interface Storaİtems {
  name: string;
  fiyat: number;
  id: number;
  resim: string;
}

const Storaİtems = ({ name, fiyat, id, resim }: Storaİtems) => {
  const {
    increaseCartQuantity,
    RemoveCart,
    decreasecartQuantity,
    getItemsQuantity,
  } = UseShoppinCartContent();

  const number = getItemsQuantity(id);
  return (
    <div
      className={
        number > 0
          ? "shadow-lg pb-10 mb-10 h-[480px] bg-white  w-80 transition-all duration-300 "
          : "shadow-lg pb-10 mb-10 h-[450px] bg-white w-80 transition-all duration-300"
      }
    >
      <img className="h-80 w-80 rounded-md" src={resim} alt={name} />
      <div className="flex justify-between items-center mx-4">
        <div className="text-2xl mt-2">{name}</div>
        <div className="text-gray-400/80">{"$" + fiyat}</div>
      </div>
      {number > 0 ? (
        <div className="flex flex-col justify-center  items-center gap-4 ">
          <div className="flex gap-2  justify-center items-center">
            <button
              onClick={() => increaseCartQuantity(id)}
              className="h-10 w-10 text-white bg-blue-300 shadow-md rounded-md text-2xl hover:bg-blue-300/80"
              type="button"
            >
              +
            </button>
            <div>{number} in Cart</div>
            <button
              onClick={() => decreasecartQuantity(id)}
              className="h-10 w-10 text-2xl text-white bg-blue-300 hover:bg-blue-300/80 shadow-md rounded-md"
              type="button"
            >
              -
            </button>
          </div>
          <button
            onClick={() => RemoveCart(id)}
            className="bg-red-500 w-40 h-7 rounded-md text-white hover:bg-red-500/80"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <button
            onClick={() => increaseCartQuantity(id)}
            className="bg-blue-400 text-white w-72 h-8 mt-4 rounded-md hover:bg-blue-400/80 "
            type="button"
          >
            <span>+</span> Add Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Storaİtems;
