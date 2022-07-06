import React from 'react';
import { ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { client } from '../../helpers/db';
import { formatMeetup } from '../../helpers/format';
import Head from 'next/head';
import { DBMeetup, IMeetup } from '../../types';

interface Props {
  meetup: IMeetup;
}

type Params = {
  meetupId: string;
};
function MeetupDetailPage(props: Props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta title='description' content={props.meetup.description} />
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </>
  );
}

export default MeetupDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const collection = await client.db().collection<DBMeetup>('meetups');
  const data = await collection.find().toArray();

  return {
    fallback: false,
    paths: data.map((m) => ({ params: { meetupId: m._id.toHexString() } }))
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  ctx: GetStaticPropsContext<Params>
) => {
  const meetupId = ctx?.params?.meetupId;
  const collection = await client.db().collection('meetups');
  const data = (await collection.findOne({
    _id: new ObjectId(meetupId).toHexString()
  })) as DBMeetup;

  return {
    props: {
      meetup: formatMeetup(data)
    }
  };
};
