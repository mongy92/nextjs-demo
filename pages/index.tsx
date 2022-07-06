import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult
} from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { client } from '../helpers/db';
import { formatMeetup } from '../helpers/format';
import Head from 'next/head';
import { DBMeetup, IMeetup } from '../types';

interface Props {
  meetups: IMeetup[];
}

function HomePage(props: Props) {
  return (
    <>
      <Head>
        <title>Next Js Meetups</title>
        <meta
          title='description'
          content='Explore meetups around all the world ;)'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const collection = await client.db().collection<DBMeetup>('meetups');
  const data = await collection.find().toArray();
  return {
    revalidate: 1,
    props: {
      meetups: data.map(formatMeetup)
    }
  };
};

export default HomePage;
