'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '../components/ProfileContext';

const AuthRequirement = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const userProfile = useProfile();
    const router = useRouter();

    useEffect(() => {
      if (!userProfile || !userProfile.name || userProfile.name === '') {
        router.push('/');
      }
    }, [userProfile, router]);

    return <WrappedComponent {...props} />;
  };
};

export default AuthRequirement;