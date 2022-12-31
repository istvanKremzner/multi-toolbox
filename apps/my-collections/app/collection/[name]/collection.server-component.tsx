"use client";

import { FC } from "react";
import { Box, Grid } from "ui";
import { ICollectionItem } from "./(collection-item)/collection-item.type";
import { ICollection } from "../collection.type";

interface ICollectionProps {
  collection: ICollection;
  item: FC<{ item: ICollectionItem }>;
}

// export const Collection: FC<ICollectionProps> = ({
//   collection,
//   item: CollectionItem,
// }) => (
//   <Grid
//     container
//     gap={8}
//     padding={8}
//     justifyContent="center"
//     // alignItems="center"
//   >
//     {collection.items.map((item) => (
//       <Grid key={item.id} item xs={3}>
//         <CollectionItem item={item} />
//       </Grid>
//     ))}
//   </Grid>
// );

export const Collection: FC<ICollectionProps> = ({
  collection,
  item: CollectionItem,
}) => (
  <Box
    padding={4}
    display="flex"
    flexWrap="wrap"
    gap={8}
    justifyContent="center"
  >
    {collection.items.map((item) => (
      <CollectionItem key={item.id} item={item} />
    ))}
  </Box>
);
