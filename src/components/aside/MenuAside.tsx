import { Menu, MenuProps } from "antd";
import React from "react";
import { DollarOutlined, GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { usePathname } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <DollarOutlined />,
    label: "Finance",
    children: [
      {
        key: DASHBOARD_PAGES.FINANCE.BITCOIN,
        label: <Link href={DASHBOARD_PAGES.FINANCE.BITCOIN}>bitcoin</Link>,
      },
      {
        key: DASHBOARD_PAGES.FINANCE.COMMODITY_PRICE,
        label: (
          <Link href={DASHBOARD_PAGES.FINANCE.COMMODITY_PRICE}>
            commodity-price
          </Link>
        ),
      },
      {
        key: DASHBOARD_PAGES.FINANCE.INFLATION,
        label: <Link href={DASHBOARD_PAGES.FINANCE.INFLATION}>inflation</Link>,
      },
      {
        key: DASHBOARD_PAGES.FINANCE.SWIFT_CODE,
        label: <Link href={DASHBOARD_PAGES.FINANCE.SWIFT_CODE}>inflation</Link>,
      },
    ],
  },
  {
    key: "2",
    icon: <GlobalOutlined />,
    label: "Internet",
    children: [
      {
        key: DASHBOARD_PAGES.INTERNET.IP_LOOKUP,
        label: <Link href={DASHBOARD_PAGES.INTERNET.IP_LOOKUP}>ip-lookup</Link>,
      },
      {
        key: DASHBOARD_PAGES.INTERNET.PASSWORD_GENERATOR,
        label: (
          <Link href={DASHBOARD_PAGES.INTERNET.PASSWORD_GENERATOR}>
            password-generator
          </Link>
        ),
      },
      {
        key: DASHBOARD_PAGES.INTERNET.QR_CODE,
        label: <Link href={DASHBOARD_PAGES.INTERNET.QR_CODE}>qr-code</Link>,
      },
      {
        key: DASHBOARD_PAGES.INTERNET.VALIDATE_PHONE,
        label: (
          <Link href={DASHBOARD_PAGES.INTERNET.VALIDATE_PHONE}>
            validate-phone
          </Link>
        ),
      },
    ],
  },
];
const MenuAside = () => {
  const pathname = usePathname();

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={[pathname]}
      items={items}
      style={{ width: "250px", border: "none" }}
    />
  );
};

export default MenuAside;
