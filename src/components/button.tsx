import Link from 'next/link'

interface ButtonProps {
  text?: string
  url: string
  classname?: string
  children?: Any
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.url}
      className={`hover:text-${props.color}-600 transition`}
    >
      <button className="flex gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md">
        {props.children}
        {props.text ? <span>{props.text}</span> : null}
      </button>
    </Link>
  )
}
