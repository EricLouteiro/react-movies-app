import { Space, Image, Rate, Typography } from "antd";

export const MovieSlider = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <Space.Compact
      direction="horizontal"
      style={{
        width: "30rem",
        height: "20rem",
        backgroundColor: "#151739",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 0 10px 1px #e28602",
        margin: "10px",
      }}
    >
      <Space.Compact
        direction="vertical"
        style={{
          width: "42%",
          height: "100%",
          alignContent: "end",
        }}
      >
        <Image
          width={"100%"}
          style={{ borderRadius: "1rem" }}
          src="https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/WCCOCPP7SVA5XBA4FUTYQWQPHU.jpg"
        />
        <Rate defaultValue={5} style={{ alignSelf: "end" }} />
      </Space.Compact>
      <Space
        direction="vertical"
        style={{
          height: "100%",
          width: "57%",
          paddingLeft: "10px",
          justifyContent: "center",
        }}
      >
        <Space.Compact direction="vertical">
          <Title level={5}> Descripción </Title>
          <Paragraph>
            Amet dolor id commodo consectetur voluptate sunt proident cillum ut
            nisi nisi quis ea incididunt.
          </Paragraph>
        </Space.Compact>

        <Space.Compact direction="vertical">
          <Title style={{ marginTop: "0px" }} level={5}>
            Actores:
          </Title>
          <Text> Juan </Text>
          <Text> pueblo </Text>
          <Text> pueblo2 </Text>
        </Space.Compact>

        <Space direction="horizontal">
          <Text
            style={{ marginTop: "0px", fontWeight: "bold", fontSize: "small" }}
          >
            Año de lanzamiento:
          </Text>
          <Text style={{ fontSize: "small" }}> Juan </Text>
        </Space>
      </Space>
    </Space.Compact>
  );
};
