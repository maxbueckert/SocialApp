/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      liker {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        groups
        incomingGroupInvites
        photos
        friends
        incomingFriendRequests
        outgoingFriendRequests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      likerID
      likes
      matches
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likerID
        likes
        matches
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
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        likerID
        likes
        matches
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
      interests
      myLikes {
        id
        likerID
        likes
        matches
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      myGroups {
        nextToken
        startedAt
        __typename
      }
      groups
      incomingGroupInvites
      photos
      friends
      incomingFriendRequests
      outgoingFriendRequests
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
        interests
        groups
        incomingGroupInvites
        photos
        friends
        incomingFriendRequests
        outgoingFriendRequests
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
        interests
        groups
        incomingGroupInvites
        photos
        friends
        incomingFriendRequests
        outgoingFriendRequests
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
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      creator
      creatorUser {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        groups
        incomingGroupInvites
        photos
        friends
        incomingFriendRequests
        outgoingFriendRequests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      outgoingInvites
      members
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usersMyGroupsId
      __typename
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creator
        outgoingInvites
        members
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersMyGroupsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        creator
        outgoingInvites
        members
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersMyGroupsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
