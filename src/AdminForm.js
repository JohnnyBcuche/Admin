import React from 'react';
import { Responsive, SimpleList, Filter, List, Datagrid, TextField, UrlField, ReferenceField, EditButton, Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Create } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
// import Icon from '@material-ui/core/Icon';
// import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  button: {
    fontWeight: 'bold',
    color: 'orange'
  },
  link: {
    textDecoration: 'none',
    color: '#F50057'
  }
};

const MyUrlField = withStyles(styles)(({ classes, ...props }) => (
  <UrlField
    className={classes.link}
    {...props}
  />
));

const MyEditButton = withStyles(styles)(({ classes, ...props }) => (
  <EditButton
    className={classes.button}
    {...props}
  />
));

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      {/* <SvgIcon>
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
      </SvgIcon> */}
      <EmailIcon label="" source="email"/>{}
      <MyUrlField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField label="Company Name" source="company.name" />
    </Datagrid>
  </List>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => (
  <List filters={ <PostFilter /> } {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={ record => record.title }
          secondaryText={ record => `${record.views} views` }
          tertiaryText={ record => new Date(record.published_at).toLocaleDateString() }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <MyEditButton />
        </Datagrid>
      }
    />
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post { record ? `"${record.title}"` : '' }</span>;
};

export const PostEdit = (props) => (
  <Edit title={ <PostTitle /> } {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);
