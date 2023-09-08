import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerConnection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user1?: string | null;
  readonly user2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConnection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user1?: string | null;
  readonly user2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Connection = LazyLoading extends LazyLoadingDisabled ? EagerConnection : LazyConnection

export declare const Connection: (new (init: ModelInit<Connection>) => Connection) & {
  copyOf(source: Connection, mutator: (draft: MutableModel<Connection>) => MutableModel<Connection> | void): Connection;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liker?: string | null;
  readonly likee?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly liker?: string | null;
  readonly likee?: (string | null)[] | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}