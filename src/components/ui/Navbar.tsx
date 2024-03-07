import { Flex, Typography } from "antd";

export const Navbar = () => {
  const { Text } = Typography;
  return (
    <Flex
      style={{ width: "100%", height: "100%" }}
      align="center"
      justify="space-between"
    >
      <Text style={{ color: "red" }}>Header Navbar</Text>
      <Text style={{ color: "red" }}>Header Navbar</Text>
    </Flex>
  );
};
