'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '../components/ProfileContext';

const AuthRequirement = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const userProfile = useProfile();
    const router = useRouter();

    if(userProfile)
      console.log('userProfile:', 'exists');
    else
      console.log('userProfile:', 'does not exist');

    useEffect(() => {
      if (!userProfile) {
        router.push('/');
      }
    }, [userProfile, router]);

    return <WrappedComponent {...props} />;
  };
};

export default AuthRequirement;