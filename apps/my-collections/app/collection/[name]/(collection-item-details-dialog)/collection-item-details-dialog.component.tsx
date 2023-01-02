"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Dialog, Typography } from "ui";
import { ICollectionItem } from "../(collection-item)/collection-item.type";
import { dummyCollection } from "../collection.dummy";

export const CollectionItemDetailsDialog = () => {
  const searchParams = useSearchParams();

  const findCollectionItem = useCallback(() => {
    const itemId = searchParams.get("item");
    const collectionItem = itemId
      ? dummyCollection.items.find((i) => i.id === itemId)
      : undefined;

    return collectionItem;
  }, [searchParams]);

  const [item, setItem] = useState<ICollectionItem | undefined>(
    findCollectionItem()
  );

  const handleSearchParamChange = useCallback(() => {
    setItem(findCollectionItem());
  }, [findCollectionItem]);

  useCallback(handleSearchParamChange, [handleSearchParamChange]);

  return (
    <Dialog open={!!item} onClose={() => setItem(undefined)}>
      {item && (
        <>
          <Typography>{item.name}</Typography>
        </>
      )}
    </Dialog>
  );
};
