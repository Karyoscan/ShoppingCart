import React from "react";
import StoreData from "../Data/StoreData";
import ShoppingCartİtems from "./ShoppingCartİtems";
import { UseShoppinCartContent } from "../Content/ShoppingCartContent";

const ShopingCart = () => {
  const İtems = StoreData.map((us) => {
    return (
      <ShoppingCartİtems
        key={us.id}
        id={us.id}
        name={us.name}
        resim={us.resim}
        fiyat={us.fiyat}
      />
    );
  });

  const { setCardOpen, CardOpen, cartQuantity } = UseShoppinCartContent();

  return (
    <div
      className={
        CardOpen
          ? "  absolute transition-all duration-500 top-0 right-0 shadow-lg  bg-gray-300/90  w-[30%] h-screen "
          : "  absolute transition-all duration-500 top-0 right-0 shadow-lg  bg-gray-300/90  w-0 h-screen "
      }
    >
      <div className="mx-10 my-6 flex justify-between  font-bold text-2xl ">
        <div>ShoppingCard :</div>{" "}
        <button
          onClick={() => setCardOpen(false)}
          className="border-black border w-8 h-8 rounded-lg hover:text-white hover:bg-black"
        >
          X
        </button>{" "}
      </div>

     { İtems}



      <div className=" m-10 font-bold  text-2xl text-right">
        Total Fiyat : $
        {cartQuantity
          .reduce((total, item) => {
            const items = StoreData.find((us) => us.id === item.id);

            return total + item.quantity * (items?.fiyat || 0);
          }, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default ShopingCart;
