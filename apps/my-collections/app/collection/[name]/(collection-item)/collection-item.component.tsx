"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback } from "react";
import { CardContent, CardHeader, CardMedia, Typography } from "ui";
import placeholderImage from "./animal.jpeg";
import { StyledCard } from "./collection-item.style";
import { ICollectionItem } from "./collection-item.type";

interface ICollectionItemProps {
  item: ICollectionItem;
}

export const CollectionItem: FC<ICollectionItemProps> = ({ item }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`${pathName}?item=${item.id}`);
  }, [item.id, pathName, router]);

  return (
    <StyledCard onClick={handleClick}>
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
