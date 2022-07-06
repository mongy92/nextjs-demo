import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
interface Props {
  id: string;
  title: string;
  address: string;
  image: string;
}
function MeetupItem(props: Props) {
  const { push } = useRouter();

  function onPressDetails() {
    push(`/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={onPressDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
