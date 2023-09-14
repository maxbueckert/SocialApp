import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liker?: Users | null;
  readonly likerID: string;
  readonly likes?: (string | null)[] | null;
  readonly matches?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liker: AsyncItem<Users | undefined>;
  readonly likerID: string;
  readonly likes?: (string | null)[] | null;
  readonly matches?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly displayPhoto?: string | null;
  readonly job?: string | null;
  readonly school?: string | null;
  readonly interests?: (string | null)[] | null;
  readonly myLikes?: Like | null;
  readonly myGroups?: (Group | null)[] | null;
  readonly groups?: (string | null)[] | null;
  readonly incomingGroupInvites?: (string | null)[] | null;
  readonly photos?: (string | null)[] | null;
  readonly friends?: (string | null)[] | null;
  readonly incomingFriendRequests?: (string | null)[] | null;
  readonly outgoingFriendRequests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly displayPhoto?: string | null;
  readonly job?: string | null;
  readonly school?: string | null;
  readonly interests?: (string | null)[] | null;
  readonly myLikes: AsyncItem<Like | undefined>;
  readonly myGroups: AsyncCollection<Group>;
  readonly groups?: (string | null)[] | null;
  readonly incomingGroupInvites?: (string | null)[] | null;
  readonly photos?: (string | null)[] | null;
  readonly friends?: (string | null)[] | null;
  readonly incomingFriendRequests?: (string | null)[] | null;
  readonly outgoingFriendRequests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator: string;
  readonly creatorUser?: Users | null;
  readonly outgoingInvites?: (string | null)[] | null;
  readonly members?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersMyGroupsId?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator: string;
  readonly creatorUser: AsyncItem<Users | undefined>;
  readonly outgoingInvites?: (string | null)[] | null;
  readonly members?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersMyGroupsId?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}