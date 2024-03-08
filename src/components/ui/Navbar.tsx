import { Avatar, Button, Flex, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <Flex
      style={{ width: "100%", height: "100%" }}
      align="center"
      justify="space-between"
    >
      <Avatar size={42} src={<img src={logo} />} />
      <Space.Compact direction="vertical">
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder="Buscar" style={{ border: "0px" }} />
          <Button
            type="primary"
            style={{ boxShadow: "0 0 0 0", border: "0px" }}
            icon={<SearchOutlined />}
          />
        </Space.Compact>
      </Space.Compact>
    </Flex>
  );
};
