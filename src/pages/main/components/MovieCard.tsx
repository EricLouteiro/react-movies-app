import { Image, Space, Typography } from "antd";
import { MovieCardProps } from "../interfaces";
import noImage from "../../../assets/no-image.jpg";

export const MovieCard = ({ imgSrc, title, year, onClick }: MovieCardProps) => {
  const { Text } = Typography;
  return (
    <Space
      direction="vertical"
      onClick={onClick}
      className="animate__animated animate__fadeIn"
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
          <Text
            style={{
              fontSize: "smaller",
              fontWeight: "bold",
              color: "gray",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Text>
        </Space>
        <Space style={{ paddingLeft: "10px", paddingRight: "5px" }}>
          <Text
            style={{ fontSize: "small", fontWeight: "bold", color: "gray" }}
          >
            Year:
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
