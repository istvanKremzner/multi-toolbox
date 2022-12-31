"use client";

import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { Card, CardContent, CardHeader, Typography } from "ui";
import { ICollection } from "../collection.type";
import { StyledCard } from "./collection-card.style";

interface ICollectionCardProps {
  collection: ICollection;
}

export const CollectionCard: FC<ICollectionCardProps> = ({ collection }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/collection/${collection.id}`);
  }, [collection.id, router]);

  return (
    <StyledCard onClick={handleClick}>
      <CardHeader
        title={collection.name}
        titleTypographyProps={{
          align: "center",
        }}
      />

      <CardContent>
        <Typography variant="body1" align="center">
          {collection.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
