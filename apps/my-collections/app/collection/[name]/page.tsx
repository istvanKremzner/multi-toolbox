import { GetServerSideProps } from "next";
import { FC } from "react";

interface ICollectionPageProps {
  params: Record<"name", string>;
}

const CollectionPage: FC<ICollectionPageProps> = ({ params }) => {
  // TODO: fetch collection from DB

  return (
    <div>
      {Object.keys(params).map((param) => (
        <p key={param}>param - {(params as any)[param]}</p>
      ))}
    </div>
  );
};

export default CollectionPage;
