// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  path: (where?: pathWhereInput) => Promise<boolean>;
  users: (where?: usersWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  path: (where: pathWhereUniqueInput) => pathNullablePromise;
  paths: (args?: {
    where?: pathWhereInput;
    orderBy?: pathOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<path>;
  pathsConnection: (args?: {
    where?: pathWhereInput;
    orderBy?: pathOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => pathConnectionPromise;
  users: (where: usersWhereUniqueInput) => usersNullablePromise;
  userses: (args?: {
    where?: usersWhereInput;
    orderBy?: usersOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<users>;
  usersesConnection: (args?: {
    where?: usersWhereInput;
    orderBy?: usersOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => usersConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createpath: (data: pathCreateInput) => pathPromise;
  updatepath: (args: {
    data: pathUpdateInput;
    where: pathWhereUniqueInput;
  }) => pathPromise;
  updateManypaths: (args: {
    data: pathUpdateManyMutationInput;
    where?: pathWhereInput;
  }) => BatchPayloadPromise;
  upsertpath: (args: {
    where: pathWhereUniqueInput;
    create: pathCreateInput;
    update: pathUpdateInput;
  }) => pathPromise;
  deletepath: (where: pathWhereUniqueInput) => pathPromise;
  deleteManypaths: (where?: pathWhereInput) => BatchPayloadPromise;
  createusers: (data: usersCreateInput) => usersPromise;
  updateusers: (args: {
    data: usersUpdateInput;
    where: usersWhereUniqueInput;
  }) => usersPromise;
  updateManyuserses: (args: {
    data: usersUpdateManyMutationInput;
    where?: usersWhereInput;
  }) => BatchPayloadPromise;
  upsertusers: (args: {
    where: usersWhereUniqueInput;
    create: usersCreateInput;
    update: usersUpdateInput;
  }) => usersPromise;
  deleteusers: (where: usersWhereUniqueInput) => usersPromise;
  deleteManyuserses: (where?: usersWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  path: (
    where?: pathSubscriptionWhereInput
  ) => pathSubscriptionPayloadSubscription;
  users: (
    where?: usersSubscriptionWhereInput
  ) => usersSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type pathOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "source_ASC"
  | "source_DESC"
  | "destination_ASC"
  | "destination_DESC"
  | "scheduledat_ASC"
  | "scheduledat_DESC"
  | "recurring_ASC"
  | "recurring_DESC";

export type usersOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "vehicalnumber_ASC"
  | "vehicalnumber_DESC"
  | "createdon_ASC"
  | "createdon_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type pathWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface pathWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  source?: Maybe<String>;
  source_not?: Maybe<String>;
  source_in?: Maybe<String[] | String>;
  source_not_in?: Maybe<String[] | String>;
  source_lt?: Maybe<String>;
  source_lte?: Maybe<String>;
  source_gt?: Maybe<String>;
  source_gte?: Maybe<String>;
  source_contains?: Maybe<String>;
  source_not_contains?: Maybe<String>;
  source_starts_with?: Maybe<String>;
  source_not_starts_with?: Maybe<String>;
  source_ends_with?: Maybe<String>;
  source_not_ends_with?: Maybe<String>;
  destination?: Maybe<String>;
  destination_not?: Maybe<String>;
  destination_in?: Maybe<String[] | String>;
  destination_not_in?: Maybe<String[] | String>;
  destination_lt?: Maybe<String>;
  destination_lte?: Maybe<String>;
  destination_gt?: Maybe<String>;
  destination_gte?: Maybe<String>;
  destination_contains?: Maybe<String>;
  destination_not_contains?: Maybe<String>;
  destination_starts_with?: Maybe<String>;
  destination_not_starts_with?: Maybe<String>;
  destination_ends_with?: Maybe<String>;
  destination_not_ends_with?: Maybe<String>;
  scheduledat?: Maybe<DateTimeInput>;
  scheduledat_not?: Maybe<DateTimeInput>;
  scheduledat_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  scheduledat_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  scheduledat_lt?: Maybe<DateTimeInput>;
  scheduledat_lte?: Maybe<DateTimeInput>;
  scheduledat_gt?: Maybe<DateTimeInput>;
  scheduledat_gte?: Maybe<DateTimeInput>;
  recurring?: Maybe<Boolean>;
  recurring_not?: Maybe<Boolean>;
  userid?: Maybe<usersWhereInput>;
  AND?: Maybe<pathWhereInput[] | pathWhereInput>;
  OR?: Maybe<pathWhereInput[] | pathWhereInput>;
  NOT?: Maybe<pathWhereInput[] | pathWhereInput>;
}

export interface usersWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  phone?: Maybe<String>;
  phone_not?: Maybe<String>;
  phone_in?: Maybe<String[] | String>;
  phone_not_in?: Maybe<String[] | String>;
  phone_lt?: Maybe<String>;
  phone_lte?: Maybe<String>;
  phone_gt?: Maybe<String>;
  phone_gte?: Maybe<String>;
  phone_contains?: Maybe<String>;
  phone_not_contains?: Maybe<String>;
  phone_starts_with?: Maybe<String>;
  phone_not_starts_with?: Maybe<String>;
  phone_ends_with?: Maybe<String>;
  phone_not_ends_with?: Maybe<String>;
  vehicalnumber?: Maybe<String>;
  vehicalnumber_not?: Maybe<String>;
  vehicalnumber_in?: Maybe<String[] | String>;
  vehicalnumber_not_in?: Maybe<String[] | String>;
  vehicalnumber_lt?: Maybe<String>;
  vehicalnumber_lte?: Maybe<String>;
  vehicalnumber_gt?: Maybe<String>;
  vehicalnumber_gte?: Maybe<String>;
  vehicalnumber_contains?: Maybe<String>;
  vehicalnumber_not_contains?: Maybe<String>;
  vehicalnumber_starts_with?: Maybe<String>;
  vehicalnumber_not_starts_with?: Maybe<String>;
  vehicalnumber_ends_with?: Maybe<String>;
  vehicalnumber_not_ends_with?: Maybe<String>;
  createdon?: Maybe<DateTimeInput>;
  createdon_not?: Maybe<DateTimeInput>;
  createdon_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdon_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdon_lt?: Maybe<DateTimeInput>;
  createdon_lte?: Maybe<DateTimeInput>;
  createdon_gt?: Maybe<DateTimeInput>;
  createdon_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<usersWhereInput[] | usersWhereInput>;
  OR?: Maybe<usersWhereInput[] | usersWhereInput>;
  NOT?: Maybe<usersWhereInput[] | usersWhereInput>;
}

export type usersWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
  phone?: Maybe<String>;
  vehicalnumber?: Maybe<String>;
}>;

export interface pathCreateInput {
  id?: Maybe<ID_Input>;
  source: String;
  destination: String;
  scheduledat: DateTimeInput;
  recurring?: Maybe<Boolean>;
  userid: usersCreateOneInput;
}

export interface usersCreateOneInput {
  create?: Maybe<usersCreateInput>;
  connect?: Maybe<usersWhereUniqueInput>;
}

export interface usersCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  phone: String;
  vehicalnumber?: Maybe<String>;
}

export interface pathUpdateInput {
  source?: Maybe<String>;
  destination?: Maybe<String>;
  scheduledat?: Maybe<DateTimeInput>;
  recurring?: Maybe<Boolean>;
  userid?: Maybe<usersUpdateOneRequiredInput>;
}

export interface usersUpdateOneRequiredInput {
  create?: Maybe<usersCreateInput>;
  update?: Maybe<usersUpdateDataInput>;
  upsert?: Maybe<usersUpsertNestedInput>;
  connect?: Maybe<usersWhereUniqueInput>;
}

export interface usersUpdateDataInput {
  email?: Maybe<String>;
  phone?: Maybe<String>;
  vehicalnumber?: Maybe<String>;
}

export interface usersUpsertNestedInput {
  update: usersUpdateDataInput;
  create: usersCreateInput;
}

export interface pathUpdateManyMutationInput {
  source?: Maybe<String>;
  destination?: Maybe<String>;
  scheduledat?: Maybe<DateTimeInput>;
  recurring?: Maybe<Boolean>;
}

export interface usersUpdateInput {
  email?: Maybe<String>;
  phone?: Maybe<String>;
  vehicalnumber?: Maybe<String>;
}

export interface usersUpdateManyMutationInput {
  email?: Maybe<String>;
  phone?: Maybe<String>;
  vehicalnumber?: Maybe<String>;
}

export interface pathSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<pathWhereInput>;
  AND?: Maybe<pathSubscriptionWhereInput[] | pathSubscriptionWhereInput>;
  OR?: Maybe<pathSubscriptionWhereInput[] | pathSubscriptionWhereInput>;
  NOT?: Maybe<pathSubscriptionWhereInput[] | pathSubscriptionWhereInput>;
}

export interface usersSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<usersWhereInput>;
  AND?: Maybe<usersSubscriptionWhereInput[] | usersSubscriptionWhereInput>;
  OR?: Maybe<usersSubscriptionWhereInput[] | usersSubscriptionWhereInput>;
  NOT?: Maybe<usersSubscriptionWhereInput[] | usersSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface path {
  id: ID_Output;
  source: String;
  destination: String;
  scheduledat: DateTimeOutput;
  recurring?: Boolean;
}

export interface pathPromise extends Promise<path>, Fragmentable {
  id: () => Promise<ID_Output>;
  source: () => Promise<String>;
  destination: () => Promise<String>;
  scheduledat: () => Promise<DateTimeOutput>;
  recurring: () => Promise<Boolean>;
  userid: <T = usersPromise>() => T;
}

export interface pathSubscription
  extends Promise<AsyncIterator<path>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  source: () => Promise<AsyncIterator<String>>;
  destination: () => Promise<AsyncIterator<String>>;
  scheduledat: () => Promise<AsyncIterator<DateTimeOutput>>;
  recurring: () => Promise<AsyncIterator<Boolean>>;
  userid: <T = usersSubscription>() => T;
}

export interface pathNullablePromise
  extends Promise<path | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  source: () => Promise<String>;
  destination: () => Promise<String>;
  scheduledat: () => Promise<DateTimeOutput>;
  recurring: () => Promise<Boolean>;
  userid: <T = usersPromise>() => T;
}

export interface users {
  id: ID_Output;
  email: String;
  phone: String;
  vehicalnumber?: String;
  createdon: DateTimeOutput;
}

export interface usersPromise extends Promise<users>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  vehicalnumber: () => Promise<String>;
  createdon: () => Promise<DateTimeOutput>;
}

export interface usersSubscription
  extends Promise<AsyncIterator<users>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  vehicalnumber: () => Promise<AsyncIterator<String>>;
  createdon: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface usersNullablePromise
  extends Promise<users | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  vehicalnumber: () => Promise<String>;
  createdon: () => Promise<DateTimeOutput>;
}

export interface pathConnection {
  pageInfo: PageInfo;
  edges: pathEdge[];
}

export interface pathConnectionPromise
  extends Promise<pathConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<pathEdge>>() => T;
  aggregate: <T = AggregatepathPromise>() => T;
}

export interface pathConnectionSubscription
  extends Promise<AsyncIterator<pathConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<pathEdgeSubscription>>>() => T;
  aggregate: <T = AggregatepathSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface pathEdge {
  node: path;
  cursor: String;
}

export interface pathEdgePromise extends Promise<pathEdge>, Fragmentable {
  node: <T = pathPromise>() => T;
  cursor: () => Promise<String>;
}

export interface pathEdgeSubscription
  extends Promise<AsyncIterator<pathEdge>>,
    Fragmentable {
  node: <T = pathSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Aggregatepath {
  count: Int;
}

export interface AggregatepathPromise
  extends Promise<Aggregatepath>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatepathSubscription
  extends Promise<AsyncIterator<Aggregatepath>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface usersConnection {
  pageInfo: PageInfo;
  edges: usersEdge[];
}

export interface usersConnectionPromise
  extends Promise<usersConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<usersEdge>>() => T;
  aggregate: <T = AggregateusersPromise>() => T;
}

export interface usersConnectionSubscription
  extends Promise<AsyncIterator<usersConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<usersEdgeSubscription>>>() => T;
  aggregate: <T = AggregateusersSubscription>() => T;
}

export interface usersEdge {
  node: users;
  cursor: String;
}

export interface usersEdgePromise extends Promise<usersEdge>, Fragmentable {
  node: <T = usersPromise>() => T;
  cursor: () => Promise<String>;
}

export interface usersEdgeSubscription
  extends Promise<AsyncIterator<usersEdge>>,
    Fragmentable {
  node: <T = usersSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Aggregateusers {
  count: Int;
}

export interface AggregateusersPromise
  extends Promise<Aggregateusers>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateusersSubscription
  extends Promise<AsyncIterator<Aggregateusers>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface pathSubscriptionPayload {
  mutation: MutationType;
  node: path;
  updatedFields: String[];
  previousValues: pathPreviousValues;
}

export interface pathSubscriptionPayloadPromise
  extends Promise<pathSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = pathPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = pathPreviousValuesPromise>() => T;
}

export interface pathSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<pathSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = pathSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = pathPreviousValuesSubscription>() => T;
}

export interface pathPreviousValues {
  id: ID_Output;
  source: String;
  destination: String;
  scheduledat: DateTimeOutput;
  recurring?: Boolean;
}

export interface pathPreviousValuesPromise
  extends Promise<pathPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  source: () => Promise<String>;
  destination: () => Promise<String>;
  scheduledat: () => Promise<DateTimeOutput>;
  recurring: () => Promise<Boolean>;
}

export interface pathPreviousValuesSubscription
  extends Promise<AsyncIterator<pathPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  source: () => Promise<AsyncIterator<String>>;
  destination: () => Promise<AsyncIterator<String>>;
  scheduledat: () => Promise<AsyncIterator<DateTimeOutput>>;
  recurring: () => Promise<AsyncIterator<Boolean>>;
}

export interface usersSubscriptionPayload {
  mutation: MutationType;
  node: users;
  updatedFields: String[];
  previousValues: usersPreviousValues;
}

export interface usersSubscriptionPayloadPromise
  extends Promise<usersSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = usersPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = usersPreviousValuesPromise>() => T;
}

export interface usersSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<usersSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = usersSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = usersPreviousValuesSubscription>() => T;
}

export interface usersPreviousValues {
  id: ID_Output;
  email: String;
  phone: String;
  vehicalnumber?: String;
  createdon: DateTimeOutput;
}

export interface usersPreviousValuesPromise
  extends Promise<usersPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  phone: () => Promise<String>;
  vehicalnumber: () => Promise<String>;
  createdon: () => Promise<DateTimeOutput>;
}

export interface usersPreviousValuesSubscription
  extends Promise<AsyncIterator<usersPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  vehicalnumber: () => Promise<AsyncIterator<String>>;
  createdon: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "users",
    embedded: false
  },
  {
    name: "path",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
