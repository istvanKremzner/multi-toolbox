"use client";

import { useCallback } from "react";
import { Box } from "ui";
import { CollectionCard } from "./(collection-card)/collection-card.component";
import { dummyCollection } from "./[name]/collection.dummy";

const CollectionsPage = () => {
  //TODO: add pocket-base

  const collections = [dummyCollection];

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      gap={4}
      padding="10%"
    >
      {collections.map((collection) => (
        <CollectionCard collection={collection} />
      ))}
    </Box>
  );
};

export default CollectionsPage;
