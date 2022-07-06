import { ObjectId } from 'mongodb';
import { DBMeetup, IMeetup } from '../types';

export function formatMeetup(meetup: DBMeetup): IMeetup {
  return {
    id: meetup._id.toString(),
    title: meetup.title,
    description: meetup.description,
    image: meetup.image,
    address: meetup.description
  };
}
