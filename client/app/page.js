'use client';
import { useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from './store/authService';
import { useEffect } from 'react';
import { setCredentials } from './store/authSlice';

import Carousel from '@/components/Carousel';

export default function Home() {
  const dispatch = useDispatch();

  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  // console.log(data); // user object

  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);

  return <Carousel />;
}
