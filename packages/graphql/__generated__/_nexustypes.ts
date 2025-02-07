/* @generated */
// deno-lint-ignore-file
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../graphqlContext.ts"
import type { GraphqlBfNode, GraphqlNode } from "./../types/graphqlBfNode.ts"
import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> & { count?: connectionPluginCore.ConnectionFieldResolver<TypeName, FieldName, "count"> }
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  JSON: any
  JSONString: any
}

export interface NexusGenObjects {
  BfBlog: { // root type
    id: string; // ID!
    name?: string | null; // String
  }
  BfBlogPost: { // root type
    author?: string | null; // String
    content?: string | null; // String
    cta?: string | null; // String
    id: string; // ID!
    slug?: string | null; // String
    summary?: string | null; // String
    title?: string | null; // String
  }
  BfBlogPostConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfBlogPostEdge'] | null> | null; // [BfBlogPostEdge]
    nodes?: Array<NexusGenRootTypes['BfBlogPost'] | null> | null; // [BfBlogPost]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfBlogPostEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfBlogPost'] | null; // BfBlogPost
  }
  BfCurrentViewerLoggedIn: { // root type
    id: string; // ID!
  }
  BfCurrentViewerLoggedOut: { // root type
    id: string; // ID!
  }
  BfPerson: { // root type
    id: string; // ID!
    name?: string | null; // String
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  RecommendationItem: { // root type
    confidence?: number | null; // Float
    explanation?: string | null; // String
    recommendedText?: string | null; // String
    sourceText?: string | null; // String
  }
  Recommendations: { // root type
    recommendations?: Array<NexusGenRootTypes['RecommendationItem'] | null> | null; // [RecommendationItem]
  }
}

export interface NexusGenInterfaces {
  BfCurrentViewer: core.Discriminate<'BfCurrentViewerLoggedIn', 'required'> | core.Discriminate<'BfCurrentViewerLoggedOut', 'required'>;
  BfNode: GraphqlBfNode;
  Node: GraphqlNode;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  BfBlog: { // field return type
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['BfBlogPostConnection'] | null; // BfBlogPostConnection
  }
  BfBlogPost: { // field return type
    author: string | null; // String
    content: string | null; // String
    cta: string | null; // String
    id: string; // ID!
    slug: string | null; // String
    summary: string | null; // String
    title: string | null; // String
  }
  BfBlogPostConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfBlogPostEdge'] | null> | null; // [BfBlogPostEdge]
    nodes: Array<NexusGenRootTypes['BfBlogPost'] | null> | null; // [BfBlogPost]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfBlogPostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfBlogPost'] | null; // BfBlogPost
  }
  BfCurrentViewerLoggedIn: { // field return type
    id: string; // ID!
  }
  BfCurrentViewerLoggedOut: { // field return type
    id: string; // ID!
  }
  BfPerson: { // field return type
    id: string; // ID!
    name: string | null; // String
  }
  Mutation: { // field return type
    checkEmail: boolean | null; // Boolean
    getLoginOptions: NexusGenScalars['JSONString'] | null; // JSONString
    login: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    qualityCheckTweet: NexusGenRootTypes['Recommendations'] | null; // Recommendations
    register: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    registrationOptions: NexusGenScalars['JSONString'] | null; // JSONString
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    bfNode: NexusGenRootTypes['BfNode'] | null; // BfNode
    blog: NexusGenRootTypes['BfBlog'] | null; // BfBlog
    me: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
  }
  RecommendationItem: { // field return type
    confidence: number | null; // Float
    explanation: string | null; // String
    recommendedText: string | null; // String
    sourceText: string | null; // String
  }
  Recommendations: { // field return type
    recommendations: Array<NexusGenRootTypes['RecommendationItem'] | null> | null; // [RecommendationItem]
  }
  BfCurrentViewer: { // field return type
    id: string; // ID!
  }
  BfNode: { // field return type
    id: string; // ID!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenFieldTypeNames {
  BfBlog: { // field return type name
    id: 'ID'
    name: 'String'
    posts: 'BfBlogPostConnection'
  }
  BfBlogPost: { // field return type name
    author: 'String'
    content: 'String'
    cta: 'String'
    id: 'ID'
    slug: 'String'
    summary: 'String'
    title: 'String'
  }
  BfBlogPostConnection: { // field return type name
    count: 'Int'
    edges: 'BfBlogPostEdge'
    nodes: 'BfBlogPost'
    pageInfo: 'PageInfo'
  }
  BfBlogPostEdge: { // field return type name
    cursor: 'String'
    node: 'BfBlogPost'
  }
  BfCurrentViewerLoggedIn: { // field return type name
    id: 'ID'
  }
  BfCurrentViewerLoggedOut: { // field return type name
    id: 'ID'
  }
  BfPerson: { // field return type name
    id: 'ID'
    name: 'String'
  }
  Mutation: { // field return type name
    checkEmail: 'Boolean'
    getLoginOptions: 'JSONString'
    login: 'BfCurrentViewer'
    qualityCheckTweet: 'Recommendations'
    register: 'BfCurrentViewer'
    registrationOptions: 'JSONString'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    bfNode: 'BfNode'
    blog: 'BfBlog'
    me: 'BfCurrentViewer'
  }
  RecommendationItem: { // field return type name
    confidence: 'Float'
    explanation: 'String'
    recommendedText: 'String'
    sourceText: 'String'
  }
  Recommendations: { // field return type name
    recommendations: 'RecommendationItem'
  }
  BfCurrentViewer: { // field return type name
    id: 'ID'
  }
  BfNode: { // field return type name
    id: 'ID'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  BfBlog: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    checkEmail: { // args
      email: string; // String!
    }
    getLoginOptions: { // args
      email: string; // String!
    }
    login: { // args
      options: NexusGenScalars['JSONString']; // JSONString!
    }
    qualityCheckTweet: { // args
      systemPrompt?: string | null; // String
      taskPrompt?: string | null; // String
      tweet?: string | null; // String
    }
    register: { // args
      attResp: NexusGenScalars['JSONString']; // JSONString!
      email: string; // String!
    }
    registrationOptions: { // args
      email: string; // String!
    }
  }
  Query: {
    bfNode: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BfCurrentViewer: "BfCurrentViewerLoggedIn" | "BfCurrentViewerLoggedOut"
  BfNode: "BfBlog" | "BfBlogPost" | "BfPerson"
  Node: "BfBlog" | "BfBlogPost" | "BfCurrentViewerLoggedIn" | "BfCurrentViewerLoggedOut" | "BfPerson"
}

export interface NexusGenTypeInterfaces {
  BfBlog: "BfNode" | "Node"
  BfBlogPost: "BfNode" | "Node"
  BfCurrentViewerLoggedIn: "BfCurrentViewer" | "Node"
  BfCurrentViewerLoggedOut: "BfCurrentViewer" | "Node"
  BfPerson: "BfNode" | "Node"
  BfCurrentViewer: "Node"
  BfNode: "Node"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    __typename: true
    isTypeOf: false
    resolveType: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}