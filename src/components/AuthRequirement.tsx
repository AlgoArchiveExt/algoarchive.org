'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useProfile } from '../components/ProfileContext';

const AuthRequirement = (WrappedComponent: React.ComponentType) => {
  const RequireAuthComponent = (props: any) => {
    const userProfile = useProfile() as any;
    const router = useRouter();

    useEffect(() => {
      if (
        userProfile.name === null ||
        userProfile.username === null ||
        userProfile.avatarUrl === null ||
        userProfile.profileUrl === null
      ) {
        router.push('/');
      }
    }, [userProfile, router]);

    return <WrappedComponent {...props} />;
  };

  RequireAuthComponent.displayName = `AuthRequirement(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return RequireAuthComponent;
};

export default AuthRequirement;
