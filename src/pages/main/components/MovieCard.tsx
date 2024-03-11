import { Image, Space, Typography } from "antd";
import { MovieCardProps } from "../interfaces";
import noImage from "../../../assets/no-image.jpg";

export const MovieCard = ({ imgSrc, title, year }: MovieCardProps) => {
  const { Text } = Typography;
  return (
    <Space
      direction="vertical"
      style={{
        width: "130px",
        borderRadius: "0.7rem",
        overflow: "hidden",
        backgroundColor: "#151739",
        cursor: "pointer",
      }}
    >
      <Image src={imgSrc || noImage} />
      <Space.Compact direction="vertical" style={{ marginBottom: "0.6em" }}>
        <Space style={{ paddingLeft: "10px", paddingRight: "5px" }}>
          {/* <Text
            style={{
              fontSize: "small",
              fontWeight: "bold",
              color: "gray",
              whiteSpace: "nowrap",
            }}
          >
            Título:
          </Text> */}
          <Text
            style={{
              fontSize: "smaller",
              fontWeight: "bold",
              color: "gray",
              whiteSpace: "nowrap",
              // overflow: "hidden",
            }}
          >
            {title}
          </Text>
        </Space>
        <Space style={{ paddingLeft: "10px", paddingRight: "5px" }}>
          <Text
            style={{ fontSize: "small", fontWeight: "bold", color: "gray" }}
          >
            Año:
          </Text>
          <Text
            style={{ fontSize: "small", fontWeight: "bold", color: "gray" }}
          >
            {year}
          </Text>
        </Space>
      </Space.Compact>
    </Space>
  );
};
