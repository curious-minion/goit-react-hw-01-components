import React from 'react';
import Layout from './components/Layout/Layout';
import Container from './components/Container/Container';
import Profile from './components/profile/Profile';
import user from './data/userData.json';

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
      </Container>
    </Layout>
  );
};

export default App;
