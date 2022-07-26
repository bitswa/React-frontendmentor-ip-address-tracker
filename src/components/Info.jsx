export function Info(props) {
  return (
    <div className="bord pr-8 pl-2 md:pr-14 sm:text-start w-[100%]">
      <h4 className="text-xs uppercase pb-1">{props.title}</h4>
      <span className="font-medium">{props.subtitle}</span>
    </div>
  );
}
