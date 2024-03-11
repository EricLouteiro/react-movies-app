import { Space, Image, Rate, Typography } from "antd";
import { MovieSlideProps } from "../interfaces";
import noImage from "../../../assets/no-image.jpg";

export const MovieSlide = ({
  imgSrc,
  actors,
  description,
  year,
}: MovieSlideProps) => {
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
          width={"197px"}
          style={{ borderRadius: "1rem" }}
          src={imgSrc || noImage}
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
          <Paragraph ellipsis={{ rows: 4 }}>{description}</Paragraph>
        </Space.Compact>

        <Space.Compact direction="vertical">
          <Title style={{ marginTop: "0px" }} level={5}>
            Reparto
          </Title>
          {actors.map((actor) => (
            <Text>{actor}</Text>
          ))}
        </Space.Compact>

        <Space direction="horizontal">
          <Text
            style={{ marginTop: "0px", fontWeight: "bold", fontSize: "small" }}
          >
            Año de lanzamiento:
          </Text>
          <Text style={{ fontSize: "small" }}> {year} </Text>
        </Space>
      </Space>
    </Space.Compact>
  );
};
