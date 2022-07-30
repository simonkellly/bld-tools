interface CardProps {
  children: any;
  hide?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}


export const TrainerCard = (props: CardProps) => {
  if (props.hide) return <></>;
  return (
    <div 
      className={`card w-96 bg-base-100 shadow-xl py-3 ${props.className}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
};