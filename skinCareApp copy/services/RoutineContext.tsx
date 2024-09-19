import React, { createContext, useState } from 'react';

type RoutineContextType = {
  productList: string[];
  addProduct: (product: string) => void;
  deleteProduct: (index: number) => void;
  photo: { uri: string } | null;
  setPhoto: (photo: { uri: string }) => void;
};

type RoutineProviderProps = {
    children: React.ReactNode;
};

export const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export const RoutineProvider: React.FC<RoutineProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<string[]>([]);
  const [photo, setPhoto] = useState<{ uri: string } | null>(null); // Добавляем состояние для фото

  const addProduct = (product: string) => {
      setProductList((prevList) => [...prevList, product]);
  };

  const deleteProduct = (index: number) => {
      setProductList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
      <RoutineContext.Provider value={{ productList, addProduct, deleteProduct, photo, setPhoto }}>
          {children}
      </RoutineContext.Provider>
  );
};