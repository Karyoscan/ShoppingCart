import React from "react";
import NavbarData from "../Data/NavbarData";
import { FaShoppingCart } from "react-icons/fa";
import { UseShoppinCartContent } from "../Content/ShoppingCartContent";

const Navbar = () => {
  function selamver(p: { name: string; road: string }) {
  }

  const navbarDatas = NavbarData.map((us) => {




    return (
      <div className=" text-black w-14  " key={us.id} onClick={() => selamver(us)}>
        <a
          className={
            window.location.pathname === us.road
              ? "text-blue-400 text-2xl transition  "
              : " transition-all duration-300 hover:text-blue-300 w-20   hover:text-2xl  text-xl "
          }
          href={us.road}
        >
          {us.name}
        </a>
      </div>
    );
  });

const {setCardOpen}=UseShoppinCartContent()

const {CardQuantityTotal}= UseShoppinCartContent()

  const  Dogru  = CardQuantityTotal ; 
  return (
    <div className="  border bg-teal-200/50 border-b-gray-400 border-t-0  shadow-md flex justify-between items-center h-20   px-10 text-xl   ">
      <div className="flex  gap-5 ">{navbarDatas}</div>

      <div onClick={()=>setCardOpen(true)} className=" h-16 w-16 transition-all cursor-pointer duration-300 hover:border-2 hover:border-red-300  text-blue-400 hover:bg-blue-400  hover:text-white relative border-2 border-blue-400 rounded-full flex justify-center  items-center  "><FaShoppingCart size={25} /> {Dogru>0 && <span className="absolute  border border-blue-400 flex justify-center items-center bottom-0 right-0 h-8 w-8 bg-red-400 translate-y-2 translate-x-2  text-sm text-white rounded-full ">{Dogru>=10? Dogru+'+':Dogru }</span>}
      </div>
    </div>
  );
};

export default Navbar;
