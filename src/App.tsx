// import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { AppRouter } from "./routes/AppRouter";
import { darkTheme } from "./theme";
import "animate.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: darkTheme,
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            headerBg: "bgPrimary",
          },
          Input: {
            colorBgContainer: "#1e1f31",
            borderRadius: 8,
          },
          DatePicker: {
            // colorBgBase: "black",
            colorBorder: "#1e1f31",
            colorBgContainer: "#1e1f31",
            colorBgElevated: "#1e1f31",
          },
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
