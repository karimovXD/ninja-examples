import React from "react";
import { Layout } from "antd";
import MenuAside from "./MenuAside";

const MainAside: React.FC<{ colorBgContainer: string }> = ({
  colorBgContainer,
}) => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={false}
      theme="dark"
      style={{
        background: colorBgContainer,
        overflow: "auto",
        minHeight: "100%",
        width: "auto",
        scrollbarWidth: "thin", 
        scrollbarGutter: "stable",
        userSelect: "none",
        border: "none",
        borderRight: "1px dashed #d4d4d8",
      }}
      width={"auto"}
    >
      <MenuAside />
    </Layout.Sider>
  );
};

export default MainAside;
