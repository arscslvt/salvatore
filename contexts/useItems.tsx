import { NowPlayingProps } from "@/components/now-playing";
import { client } from "@/sanity/lib/client";
import Item from "@/types/item";
import React, { useCallback } from "react";

const defaultContext: {
  items: Item[];
  now_playing?: NowPlayingProps;
} = {
  items: [],
};

const ItemsContext = React.createContext(defaultContext);

export default function ItemsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = React.useState<Item[]>([]);
  const [now_playing, setNowPlaying] = React.useState<
    NowPlayingProps | undefined
  >(undefined);

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
        setItems(items);
      });
  }, []);

  const getNowPlaying = useCallback(async () => {
    client
      .fetch(
        `*[_type == "playlist"]{
        title,
        description,
        "cover": cover.asset->url,
        spotify,
        appleMusic,
    }`,
        { limit: 1 }
      )
      .then((now_playing) => {
        console.log(now_playing);
        setNowPlaying(now_playing[0] ?? undefined);
      });
  }, []);

  React.useEffect(() => {
    getItems();
    getNowPlaying();
  }, [getItems, getNowPlaying]);

  return (
    <ItemsContext.Provider value={{ items, now_playing }}>
      {children}
    </ItemsContext.Provider>
  );
}

export const useItems = () => React.useContext(ItemsContext);
