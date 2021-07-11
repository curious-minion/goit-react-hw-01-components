import React from 'react';
import Layout from './components/Layout/Layout';
import Container from './components/Container/Container';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import user from './data/userData.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

const App = () => {
  return (
    <Layout>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
      </Container>
    </Layout>
  );
};

export default App;
