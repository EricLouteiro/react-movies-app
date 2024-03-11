import { Col, Flex, Rate, Row, Space, Typography } from "antd";
import { BodyLayout } from "../../layouts";

export const DetailsPage = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <BodyLayout>
      <Row style={{ maxWidth: "99%" }}>
        <Col span={10} style={{ display: "grid" }}>
          <img
            width={"90%"}
            style={{
              borderRadius: "1em",
              overflow: "hidden",
              marginTop: "1em",
              justifySelf: "center",
            }}
            src="https://resizing.flixster.com/JK6oR_ocrhYq1fFi1fTmVhdDtR4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg3NGEwM2NkLTI2N2QtNDk4ZS05OGY5LWU0MmQ5NzAyZGJmMC53ZWJw"
          />
        </Col>
        <Col span={14}>
          <Space style={{ width: "50%" }}>
            <Title level={4}> Título: </Title>
            <Title level={5}> Deadpool </Title>
          </Space>
          <Space
            direction="vertical"
            style={{ maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Descripción </Text>
            <Paragraph>
              Adipisicing commodo sunt et aliqua qui aute exercitation nostrud
              fugiat eiusmod cill um ad nulla. Dolore ut cillum est est ea
              reprehenderit et sunt qui cupidatat laborum. Adipisicing commodo
              sunt et aliqua qui aute exercitation nostrud fugiat eiusmod cill
              um ad nulla. Dolore ut cillum est est ea reprehenderit et sunt qui
              cupidatat laborum. Adipisicing commodo sunt et aliqua qui aute
              exercitation nostrud fugiat eiusmod cill um ad nulla. Dolore ut
              cillum est est ea reprehenderit et sunt qui cupidatat laborum.
              Adipisicing commodo sunt et aliqua qui aute exercitation nostrud
              fugiat eiusmod cill um ad nulla. Dolore ut cillum est est ea
              reprehenderit et sunt qui cupidatat laborum.
            </Paragraph>
          </Space>

          <Space
            direction="vertical"
            style={{ width: "100%", maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Reparto </Text>
            <Space>
              <Paragraph>Adipisicing commodo</Paragraph>
              <Paragraph>Adipisicing commodo</Paragraph>
              <Paragraph>Adipisicing commodo</Paragraph>
            </Space>
          </Space>

          <Space
            direction="vertical"
            style={{ maxWidth: "100%", marginTop: "1em" }}
          >
            <Text style={{ fontWeight: "bold" }}> Calificación </Text>
            <Space>
              <Rate defaultValue={5} style={{ alignSelf: "start" }} />
            </Space>
          </Space>
        </Col>
      </Row>
    </BodyLayout>
  );
};
