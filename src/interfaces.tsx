interface IBox {
  id: string,
  width: number,
  height: number,
  backgroundColor: string,
}

interface IBoxProps extends IBox {
  remove: (id: string) => void;
}

interface ICreateBoxProps {
  createBox: (newBox : IBox) => void;
}

export type { IBox, IBoxProps, ICreateBoxProps}