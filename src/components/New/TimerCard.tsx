interface CardProps {
  children: any;
  hide?: boolean;
  className?: string;
}


export const TimerCard = (props: CardProps) => {
  if (props.hide) return <></>;
  return (
    <div className={`card w-96 bg-base-100 shadow-xl py-3 ${props.className}`}>
      {props.children}
    </div>
  );
};