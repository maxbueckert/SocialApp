/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConnection = /* GraphQL */ `
  subscription OnCreateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onCreateConnection(filter: $filter) {
      id
      user1 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user1ID
      user2 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user2ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateConnection = /* GraphQL */ `
  subscription OnUpdateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onUpdateConnection(filter: $filter) {
      id
      user1 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user1ID
      user2 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user2ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteConnection = /* GraphQL */ `
  subscription OnDeleteConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onDeleteConnection(filter: $filter) {
      id
      user1 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user1ID
      user2 {
        id
        name
        email
        age
        gender
        displayPhoto
        job
        school
        interests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user2ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      likerID
      likee
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      likerID
      likee
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      likerID
      likee
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
        likee
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
        likee
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
        likee
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
