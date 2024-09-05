'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface Profile {
  username: string | null;
  avatarUrl: string | null;
  profileUrl: string | null;
  name: string | null;
}

const ProfileContext = createContext<Profile | null>(null);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile>({
    username: null,
    avatarUrl: null,
    profileUrl: null,
    name: null,
  });

  useEffect(() => {
    //const githubAccessToken = localStorage.getItem('githubAccessToken'); //production
    const githubAccessToken = ''; //testing

    if (githubAccessToken) {
      fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${githubAccessToken}`,
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
