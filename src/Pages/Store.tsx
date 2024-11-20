import React from "react";
import StoreData from "../Data/StoreData";
import Storaİtems from "../Companenet/Storaİtems";

const Store = () => {
  const Items = StoreData.map((us) => {
    return (
      <Storaİtems
        key={us.id}
        name={us.name}
        fiyat={us.fiyat}
        resim={us.resim}
        id={us.id}
      />
    );
  });

  return (
    <div >
      <div className="font-bold text-3xl my-2">Store</div>
      <div className="grid-cols-3 grid  gap-16">{Items}</div>
    </div>
  );
};

export default Store;
