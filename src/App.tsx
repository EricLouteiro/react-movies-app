// import { useState } from "react";
import { ConfigProvider } from "antd";
import { AppRouter } from "./routes/AppRouter";
import { darkTheme } from "./theme";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: darkTheme,
        components: {
          Layout: {
            headerBg: "bgPrimary",
          },
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
