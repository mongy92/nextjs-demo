import React from 'react';
import { Meetup } from './MeetupList';
import styles from './MeetupDetail.module.css';
interface Props {
  meetup: Meetup;
}
function MeetupDetail(props: Props) {
  return (
    <section className={styles.detail}>
      <img src={props.meetup.image} alt={props.meetup.title} />
      <h1>{props.meetup.title}</h1>
      <p>{props.meetup.address}</p>
      <p>{props.meetup.description}</p>
    </section>
  );
}

export default MeetupDetail;
