import React, { createContext, ReactNode, useContext, useState } from "react";
import ShopingCart from "../Companenet/ShopingCart";




interface ShopppinCartContent {
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreasecartQuantity: (id: number) => void;
  RemoveCart: (id: number) => void;
  CardOpen : boolean,
  setCardOpen:React.Dispatch<React.SetStateAction<boolean>>,
  CardQuantityTotal : number,
  cartQuantity:cartQuantity[]
}

const ShoppinCartContent = createContext({} as ShopppinCartContent);

// hangi kommpannetin içerisinde kullanıcaksam orada kullanmam yeter
export const UseShoppinCartContent = () => {
  return useContext(ShoppinCartContent);
};

interface ShoppinCartContentChildren {
  children: ReactNode;
}

interface cartQuantity {
  id: number;
  quantity: number;
}

export const ShoppinCartContentProvides = ({
  children,
}: ShoppinCartContentChildren) => {
  const [cartQuantity, setCartQuantity] = useState<cartQuantity[]>([]);
  const [CardOpen,setCardOpen]=useState(false)
  const  CardQuantityTotal =  cartQuantity.reduce((pre,item)=>pre=pre+item.quantity,0)


 

  const getItemsQuantity = (id: number) => {
    return cartQuantity.find((us) => us.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartQuantity((us) => {
      if (us.find((items) => items.id === id) == null) {
        return [...us, { id, quantity: 1 }];
      } else {
        return us.map((items) =>
          items.id === id ? { ...items, quantity: items.quantity + 1 } : items
        );
      }
    });
  };

  const decreasecartQuantity = (id: number) => {
    setCartQuantity((us) => {
      if (us.find((items) => items.id === id)?.quantity === 1) {
        return us.filter((items) => items.id !== id);
      } else {
        return us.map((items) => {
          if (items.id === id) {
            return { ...items, quantity: items.quantity - 1 };
          } else {
            return items;
          }
        });
      }
    });
  };

  const RemoveCart = (id: number) => {
    return setCartQuantity((us) => us.filter((items) => items.id !== id));
  };

 




 

  return (
    <ShoppinCartContent.Provider
      value={{
        getItemsQuantity,
        increaseCartQuantity,
        decreasecartQuantity,
        RemoveCart,
        CardOpen,
        setCardOpen,
        CardQuantityTotal,
        cartQuantity,
        
       
      }}
    >
      {children}
       {CardOpen&& <ShopingCart/>}
    </ShoppinCartContent.Provider>
  );
};
