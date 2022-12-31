"use client";

import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "ui";
import Image from "next/image";
import { ICollectionItem } from "./collection-item.type";
import placeholderImage from "./animal.jpeg";

interface ICollectionItemProps {
  item: ICollectionItem;
}

const StyledCard = styled(Card)({
  width: "clamp(200px, 25%, 500px)",
  height: "fit-content",
});

export const CollectionItem: FC<ICollectionItemProps> = ({ item }) => {
  return (
    <StyledCard>
      <CardHeader
        title={item.name}
        titleTypographyProps={{ align: "center" }}
      />

      <CardContent>
        <Typography variant="body1" component="p">
          {item.description}
        </Typography>

        <CardMedia src={placeholderImage.src}>
          <Image
            src={placeholderImage.src}
            alt="placeholder"
            width={placeholderImage.width}
            height={placeholderImage.height}
            style={{
              marginTop: 16,
              width: "100%",
              height: "100%",
              aspectRatio: "initial",
            }}
          />
        </CardMedia>

        {item.images?.map((link) => (
          <CardMedia src={link} />
        ))}
      </CardContent>
    </StyledCard>
  );
};
