import { Image, Row, Space, Typography } from "antd";
import { SearchResultCardProps } from "../interfaces/searchResultCard";
import noImage from "../../../assets/no-image.jpg";

export const SearchResultCard = ({
  title,
  year,
  poster,
  onClick,
}: SearchResultCardProps) => {
  const { Text } = Typography;
  return (
    <Row className="animate__animated animate__fadeInRight">
      <Space
        direction="horizontal"
        onClick={onClick}
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
        <Image width={"50px"} src={poster || noImage} />
        <Space.Compact direction="vertical">
          <Space direction="horizontal">
            <Text> Title </Text>
            <Text> {title} </Text>
          </Space>
          <Space direction="horizontal">
            <Text> Year </Text>
            <Text> {year} </Text>
          </Space>
        </Space.Compact>
      </Space>
    </Row>
  );
};
