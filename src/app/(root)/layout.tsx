"use client";
import "@/app/globals.scss";
import { Layout, theme, Button } from "antd";
import MainAside from "@/components/aside/MainAside";
import AppBreadcrumb from "@/components/breadcrumbs/AppBreadcrumbs";
const { Header, Content } = Layout;

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-full">
      <Header
        style={{
          padding: 10,
          height: "auto",
          width: "auto",
          gap: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          background: "#fff",
          borderBottom: "1px dashed #d4d4d8",
        }}
      >
        <Button>click</Button>
      </Header>
      <Layout>
        <MainAside colorBgContainer={colorBgContainer} />
        <Layout>
          <AppBreadcrumb />
          <Content
            style={{
              padding: 14,
              margin: 14,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
