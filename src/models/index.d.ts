import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerConnections = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connections, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User1: string;
  readonly User2: string;
  readonly userss?: (UsersConnections | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConnections = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connections, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User1: string;
  readonly User2: string;
  readonly userss: AsyncCollection<UsersConnections>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Connections = LazyLoading extends LazyLoadingDisabled ? EagerConnections : LazyConnections

export declare const Connections: (new (init: ModelInit<Connections>) => Connections) & {
  copyOf(source: Connections, mutator: (draft: MutableModel<Connections>) => MutableModel<Connections> | void): Connections;
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
  readonly Connections?: (UsersConnections | null)[] | null;
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
  readonly Connections: AsyncCollection<UsersConnections>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerUsersConnections = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersConnections, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly connectionsId?: string | null;
  readonly usersId?: string | null;
  readonly connections: Connections;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersConnections = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersConnections, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly connectionsId?: string | null;
  readonly usersId?: string | null;
  readonly connections: AsyncItem<Connections>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersConnections = LazyLoading extends LazyLoadingDisabled ? EagerUsersConnections : LazyUsersConnections

export declare const UsersConnections: (new (init: ModelInit<UsersConnections>) => UsersConnections) & {
  copyOf(source: UsersConnections, mutator: (draft: MutableModel<UsersConnections>) => MutableModel<UsersConnections> | void): UsersConnections;
}