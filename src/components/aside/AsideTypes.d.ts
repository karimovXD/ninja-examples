
type MenuItem = Required<MenuProps>["items"][number];

interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
}