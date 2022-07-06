import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { IMeetup } from '../../types';

function NewMeetupPage() {
  const { push } = useRouter();
  async function onAddMetup(data: IMeetup) {
    try {
      const res = await fetch('/api/new-meetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      console.log(json);
      push('/');
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta title='description' content='Add new Meetup' />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMetup} />
    </>
  );
}

export default NewMeetupPage;
