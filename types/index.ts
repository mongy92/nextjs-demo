import { ObjectId } from 'mongodb';
export interface DBMeetup {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  address: string;
}

export interface IMeetup {
  id: string;
  title: string;
  description: string;
  image: string;
  address: string;
}
