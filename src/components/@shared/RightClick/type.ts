export interface MenuLocationType {
  mouseX: number;
  mouseY: number;
}

export interface RightClickProps {
  selectedId: string | null;
  menuLocation: MenuLocationType | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  setMenuLocation: React.Dispatch<
    React.SetStateAction<MenuLocationType | null>
  >;
}
