'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// import dummy from '@/public/dummy.json';

import { writeSignedInHeader } from '../actions/UserProfile';

interface Profile {
  username: string | null;
  avatarUrl: string | null;
  profileUrl: string | null;
  name: string | null;
}

const ProfileContext = createContext<Profile | null>(null);
const defaultProfile: Profile = {
  username: null,
  avatarUrl: null,
  profileUrl: null,
  name: null,
};

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  useEffect(() => {
    // const dummydata = JSON.stringify(dummy);
    // localStorage.setItem('algoArchive', dummydata);

    const userInfo = JSON.parse(localStorage.getItem('algoArchive') || '{}');
    const githubAccessToken = userInfo.githubAccessToken;

    writeSignedInHeader(githubAccessToken);

    if (githubAccessToken && !profile.name) {
      fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${githubAccessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          if (data.login && data.html_url && data.name) {
            const profileObject = {
              username: data.login,
              avatarUrl: data.avatar_url,
              profileUrl: data.html_url,
              name: data.name,
            };
            setProfile(profileObject);
          } else {
            console.error('Unexpected data format:', data);
          }
        })
        .catch((error) => console.error('Error fetching GitHub profile:', error));
    }
  }, []);

  return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => useContext(ProfileContext);
