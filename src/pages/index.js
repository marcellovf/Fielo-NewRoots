import { Api } from '../services/Api';

import { Container } from '@material-ui/core';

import { Content } from '../components/Content';
import { ContentBox } from '../components/ContentBox';
import { Header } from '../components/Header';
import { PageWrap } from '../components/PageWrap';
import { UserList } from '../components/User/List';
import { ListBox } from '../components/ListBox';


import { getUserList } from '../selectors/User/userSelector';

const Home = ({ users, globalProps }) => {
  return (
    <>
      <PageWrap>
        <Header />
        <Content backgroundImage={globalProps.background}>
          <Container>
            <ContentBox>
              <ListBox>
                <UserList users={users} />
              </ListBox>
            </ContentBox>
          </Container>
        </Content>
      </PageWrap>
    </>
  );
};

Home.getInitialProps = async ({ isServer }) => {
  try {
    // Auth
    const reqAuth = await Api.getAuth();
    const token = reqAuth.data.token;

    // Get Users
    const response = await Api.getUsers(token);
    const data = response.data ? response.data : [];
    const users = getUserList(data);

    return { isServer, users };
  } catch (error) {
    console.error(`Error: ${error}`);
  }

  return { isServer };
};

export default Home;
