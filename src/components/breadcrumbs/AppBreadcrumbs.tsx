"use client";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const breadcrumbNameMap: Record<string, string> = {
  "/": "home",
  "/list": "List",
  "/list/detail": "Detail",
};

const AppBreadcrumb = () => {
  const pathname = usePathname();

  const pathSnippets = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join("  ")}`;
    return {
      title: breadcrumbNameMap[url] || url, // Название из карты или сам путь
    };
  });

  const mainBreadcrumb = breadcrumbItems.map((item) => ({
    title:
      item.title.split(" ").length > 1
        ? item.title.split(" ").slice(1).join("")
        : item.title,
  }));
  mainBreadcrumb.unshift({ title: breadcrumbNameMap["/"] });

  return (
    <Breadcrumb
      items={mainBreadcrumb}
      style={{
        fontSize: 17,
        padding: "14px 14px 0 14px",
        textTransform: "capitalize",
      }}
    />
  );
};

export default AppBreadcrumb;
