import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonData from 'ra-data-json-server';
import { UserList, PostList, PostEdit, PostCreate } from './AdminForm';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const dataProvider = jsonData('http://jsonplaceholder.typicode.com');
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function App() {
  return (
    <Admin theme={ theme } dashboard={ Dashboard } authProvider={ AuthProvider } dataProvider={ dataProvider }>
      <Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } icon={ PostIcon } />
      <Resource name="users" list={ UserList } icon={ UserIcon } />
    </Admin>
  );
}

export default App;
