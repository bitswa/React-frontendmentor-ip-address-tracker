export function Info(props) {
  return (
    <div className="bord pr-10 sm:text-start">
      <h4 className="text-xs uppercase">{props.title}</h4>
      <span className="font-medium">{props.subtitle}</span>
    </div>
  );
}
