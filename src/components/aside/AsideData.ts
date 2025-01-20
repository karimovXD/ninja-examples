import type { MenuProps } from "antd";
import { DollarOutlined, GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";

const items: MenuItem[] = [
    {
        key: "1",
        icon: <DollarOutlined />,
      label: "Finance",
        children: [
            {
                key: "/finance/bitcoin",
                label: <Link href="/finance/bitcoin"> bitcoin </Link>,
            },
            { key: "102", label: "Option 2" },
            { key: "103", label: "Option 3" },
            { key: "104", label: "Option 4" },
        ],
    },
    {
        key: "2",
        icon: <GlobalOutlined />,
      label: "Internet",
        children: [
            { key: "105", label: "Option 1" },
            { key: "106", label: "Option 2" },
            {
                key: "3",
                label: "Submenu",
                children: [
                    { key: "107", label: "Option 1" },
                    { key: "108", label: "Option 2" },
                    { key: "109", label: "Option 3" },
                    { key: "110", label: "Option 4" },
                ],
            },
            {
                key: "24",
                label: "Submenu 2",
                children: [
                    { key: "241", label: "Option 1" },
                    { key: "242", label: "Option 2" },
                    { key: "243", label: "Option 3" },
                ],
            },
        ],
    },
];