import { Image, Row, Space, Typography } from "antd";

export const SearchResultCard = () => {
  const { Text } = Typography;
  return (
    <Row>
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          height: "75px",
          marginTop: "0.5em",
          borderRadius: "0.7rem",
          overflow: "hidden",
          backgroundColor: "#151739",
          cursor: "pointer",
        }}
      >
        <Image
          width={"50px"}
          src="https://resizing.flixster.com/JK6oR_ocrhYq1fFi1fTmVhdDtR4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg3NGEwM2NkLTI2N2QtNDk4ZS05OGY5LWU0MmQ5NzAyZGJmMC53ZWJw"
        />
        <Space.Compact direction="vertical">
          <Space direction="horizontal">
            <Text> Título: </Text>
            <Text> Deadpool </Text>
          </Space>
          <Space direction="horizontal">
            <Text> Año </Text>
            <Text> 2024 </Text>
          </Space>
        </Space.Compact>
      </Space>
    </Row>
  );
};
