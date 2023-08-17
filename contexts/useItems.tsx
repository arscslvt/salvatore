import { client } from "@/sanity/lib/client";
import Item from "@/types/item";
import React, { useCallback } from "react";

const defaulContext: {
  items: Item[];
} = {
  items: [],
};

const ItemsContext = React.createContext(defaulContext);

export default function ItemsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = React.useState<Item[]>([]);

  const getItems = useCallback(async () => {
    client
      .fetch(
        `*[_type == "item"]{
        _id,
        title,
        description,
        startingPrice,
        "slug": slug.current,
        "image": image.asset->url,
        fiverrLink,
        "categories": categories[]->title,
    }`
      )
      .then((items) => {
        console.log(items);

        setItems(items);
      });
  }, []);

  React.useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>
  );
}

export const useItems = () => React.useContext(ItemsContext);
