/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
