/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConnections = /* GraphQL */ `
  subscription OnCreateConnections(
    $filter: ModelSubscriptionConnectionsFilterInput
  ) {
    onCreateConnections(filter: $filter) {
      id
      User1
      User2
      userss {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateConnections = /* GraphQL */ `
  subscription OnUpdateConnections(
    $filter: ModelSubscriptionConnectionsFilterInput
  ) {
    onUpdateConnections(filter: $filter) {
      id
      User1
      User2
      userss {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteConnections = /* GraphQL */ `
  subscription OnDeleteConnections(
    $filter: ModelSubscriptionConnectionsFilterInput
  ) {
    onDeleteConnections(filter: $filter) {
      id
      User1
      User2
      userss {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
      id
      name
      email
      age
      gender
      displayPhoto
      job
      school
      Connections {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
      id
      name
      email
      age
      gender
      displayPhoto
      job
      school
      Connections {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
      id
      name
      email
      age
      gender
      displayPhoto
      job
      school
      Connections {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUsersConnections = /* GraphQL */ `
  subscription OnCreateUsersConnections(
    $filter: ModelSubscriptionUsersConnectionsFilterInput
  ) {
    onCreateUsersConnections(filter: $filter) {
      id
      connectionsId
      usersId
      connections {
        id
        User1
        User2
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      users {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUsersConnections = /* GraphQL */ `
  subscription OnUpdateUsersConnections(
    $filter: ModelSubscriptionUsersConnectionsFilterInput
  ) {
    onUpdateUsersConnections(filter: $filter) {
      id
      connectionsId
      usersId
      connections {
        id
        User1
        User2
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      users {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUsersConnections = /* GraphQL */ `
  subscription OnDeleteUsersConnections(
    $filter: ModelSubscriptionUsersConnectionsFilterInput
  ) {
    onDeleteUsersConnections(filter: $filter) {
      id
      connectionsId
      usersId
      connections {
        id
        User1
        User2
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      users {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
