import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Navbar } from "../components/ui/Navbar";

export const MainLayout = ({
  children,
}: {
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <Header style={{ borderRadius: "1.1em" }}>
        <Navbar />
      </Header>
      <Content> {children} </Content>
    </Layout>
  );
};
