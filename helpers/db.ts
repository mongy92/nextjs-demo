import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@demo.t3ds6uq.mongodb.net/meetups?retryWrites=true&w=majority`;

export const client = new MongoClient(uri);
