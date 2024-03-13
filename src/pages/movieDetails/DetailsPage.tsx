import { Col, Rate, Row, Space, Typography } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/no-image.jpg";
import { BodyLayout } from "../../layouts";
import { movieStore } from "../../store";

export const DetailsPage = () => {
  const { Title, Text, Paragraph } = Typography;
  const { selectedMovie, clearSelected } = movieStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedMovie) {
      navigate("/", { replace: true });
    }
    return () => {
      clearSelected();
    };
  }, []);

  return (
    <BodyLayout>
      <Row style={{ maxWidth: "99%" }}>
        <Col
          className="animate__animated animate__fadeInLeft"
          span={10}
          style={{ display: "grid" }}
        >
          <img
            width={"90%"}
            style={{
              borderRadius: "1em",
              overflow: "hidden",
              marginTop: "1em",
              justifySelf: "center",
            }}
            src={selectedMovie?.poster || noImage}
          />
        </Col>
        <Col span={14} className="animate__animated animate__fadeIn">
          <Space style={{ width: "100%" }}>
            <Title level={4}> Title: </Title>
            <Title level={5}> {selectedMovie?.title} </Title>
          </Space>
          <Space
            direction="vertical"
            style={{ maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Description </Text>
            <Paragraph>{selectedMovie?.plot}</Paragraph>
          </Space>

          <Space
            direction="vertical"
            style={{ width: "100%", maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Actors </Text>
            <Space>
              {selectedMovie?.actors.map((actor) => (
                <Paragraph>{actor}</Paragraph>
              ))}
            </Space>
          </Space>

          <Space
            direction="vertical"
            style={{ maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Rate </Text>
            <Space>
              <Rate
                disabled
                defaultValue={selectedMovie?.imdbRating || 0}
                style={{ alignSelf: "start" }}
              />
            </Space>
          </Space>
        </Col>
      </Row>
    </BodyLayout>
  );
};
