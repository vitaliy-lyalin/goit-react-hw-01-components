import React from 'react';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { AppWrapper } from './App.styled';

import user from 'dataBase/user.json';
import data from 'dataBase/data.json';
import friends from 'dataBase/friends.json';
import transactions from 'dataBase/transactions.json';

export const App = () => {
  return (
    <AppWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppWrapper>
  );
};
