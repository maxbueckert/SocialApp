/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConnections = /* GraphQL */ `
  query GetConnections($id: ID!) {
    getConnections(id: $id) {
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
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncConnections = /* GraphQL */ `
  query SyncConnections(
    $filter: ModelConnectionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUsersConnections = /* GraphQL */ `
  query GetUsersConnections($id: ID!) {
    getUsersConnections(id: $id) {
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
export const listUsersConnections = /* GraphQL */ `
  query ListUsersConnections(
    $filter: ModelUsersConnectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        connectionsId
        usersId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsersConnections = /* GraphQL */ `
  query SyncUsersConnections(
    $filter: ModelUsersConnectionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        connectionsId
        usersId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersConnectionsByConnectionsId = /* GraphQL */ `
  query UsersConnectionsByConnectionsId(
    $connectionsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersConnectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersConnectionsByConnectionsId(
      connectionsId: $connectionsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        connectionsId
        usersId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersConnectionsByUsersId = /* GraphQL */ `
  query UsersConnectionsByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersConnectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersConnectionsByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        connectionsId
        usersId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
