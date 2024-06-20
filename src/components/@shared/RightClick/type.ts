export interface IMenuLocation {
  mouseX: number;
  mouseY: number;
}

export interface IRightClickProps {
  selectedId: string | null;
  menuLocation: IMenuLocation | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  setMenuLocation: React.Dispatch<React.SetStateAction<IMenuLocation | null>>;
}
