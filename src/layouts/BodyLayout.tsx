import { Layout } from "antd";

export const BodyLayout = ({
  children,
}: {
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Layout style={{ width: "100vw", height: "100vh", padding: "0.7rem" }}>
      {children}
    </Layout>
  );
};
