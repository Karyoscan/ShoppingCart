import React from "react";
import { UseShoppinCartContent } from "../Content/ShoppingCartContent";
interface ShoppingCartİtems {
  name: string;
  fiyat: number;
  id: number;
  resim: string;
}

const ShoppingCartİtems = ({ name, fiyat, id, resim }: ShoppingCartİtems) => {


 const {getItemsQuantity ,RemoveCart}= UseShoppinCartContent()

const number = getItemsQuantity(id)
  
  return (<div className="">
    { number>0&&<div className="mx-10  my-4 flex justify-between items-center shadow-md pr-2 rounded-md">
      <div className="flex items-center gap-2">
        <img className="h-20 w-20 rounded-md" src={resim} alt={name} />

        <div>
          <div>
            {name}
            <span className="m-1 text-gray-600 text-sm">{number>1? 'x'+number:''}</span>
          </div>
          <div className="text-gray-600 ">${fiyat}</div>
        </div>
      </div>
      <div className="flex gap-2  justify-center items-center">
        <div >${(fiyat*number).toFixed(2)}</div>
        <button className="border  flex justify-center items-center  hover:bg-red-500 hover:text-white rounded-md h-6 w-6 shadow-md" onClick={()=>RemoveCart(id)}>X</button>
      </div>
    </div>}
    </div>
  );
};

export default ShoppingCartİtems;
