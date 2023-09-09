/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
        newUser
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
        newUser
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
        newUser
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
      newUser
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
      newUser
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
      newUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
