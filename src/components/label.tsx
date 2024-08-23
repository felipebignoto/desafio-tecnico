interface LabelProps {
  text: string
}

export default function Label(props: LabelProps) {
  return <label className="">{props.text}</label>
}
