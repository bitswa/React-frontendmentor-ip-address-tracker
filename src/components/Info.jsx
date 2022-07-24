export function Info(props) {
  return (
    <div>
      <h4 className="text-xs uppercase">{props.title}</h4>
      <span className="font-medium">{props.subtitle}</span>
    </div>
  )
}