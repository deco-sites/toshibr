interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ FAMILÍA = "Capy" }: Props) {
  return <div>SALVE QVG {name}</div>
}
