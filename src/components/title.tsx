interface TitleProps {
  text: string
  description?: string
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-8 pb-8 text-center">
      <h2 className="text-xl md:text-2xl underline text-primary-dark ">
        {props.text}
      </h2>
      {props.description ?? ''}
    </div>
  )
}
