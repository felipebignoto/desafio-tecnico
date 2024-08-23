interface TitleProps {
  text: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex items-center justify-center p-8 pb-4">
      <h2 className="text-2xl underline text-primary-dark">{props.text}</h2>
    </div>
  )
}
