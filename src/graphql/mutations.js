/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConnections = /* GraphQL */ `
  mutation CreateConnections(
    $input: CreateConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    createConnections(input: $input, condition: $condition) {
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
export const updateConnections = /* GraphQL */ `
  mutation UpdateConnections(
    $input: UpdateConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    updateConnections(input: $input, condition: $condition) {
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
export const deleteConnections = /* GraphQL */ `
  mutation DeleteConnections(
    $input: DeleteConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    deleteConnections(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createUsersConnections = /* GraphQL */ `
  mutation CreateUsersConnections(
    $input: CreateUsersConnectionsInput!
    $condition: ModelUsersConnectionsConditionInput
  ) {
    createUsersConnections(input: $input, condition: $condition) {
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
export const updateUsersConnections = /* GraphQL */ `
  mutation UpdateUsersConnections(
    $input: UpdateUsersConnectionsInput!
    $condition: ModelUsersConnectionsConditionInput
  ) {
    updateUsersConnections(input: $input, condition: $condition) {
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
export const deleteUsersConnections = /* GraphQL */ `
  mutation DeleteUsersConnections(
    $input: DeleteUsersConnectionsInput!
    $condition: ModelUsersConnectionsConditionInput
  ) {
    deleteUsersConnections(input: $input, condition: $condition) {
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
