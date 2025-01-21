"use client";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const breadcrumbNameMap: Record<string, string> = {
  "/": "Home",
  "/list": "List",
  "/list/detail": "Detail",
};

const AppBreadcrumb = () => {
  const pathname = usePathname(); // Получаем текущий путь, например: "/list/detail"

  // Разбиваем путь на части
  const pathSnippets = pathname.split("/").filter((segment) => segment);

  // Генерируем хлебные крошки
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join("  ")}`;
    return {
      title: breadcrumbNameMap[url] || url, // Название из карты или сам путь
    };
  });

  const aaa = breadcrumbItems.map((item) => ({
    title:
      item.title.split(" ").length > 1
        ? item.title.split(" ").slice(1).join("")
        : item.title,
  }));

  // Добавляем корневой элемент
  breadcrumbItems.unshift({ title: breadcrumbNameMap["/"] });

  return (
    <Breadcrumb
      items={aaa} // Передаём массив элементов в Breadcrumb
      style={{ fontSize: 17, padding: "14px 14px 0 14px" }}
    />
  );
};

export default AppBreadcrumb;
