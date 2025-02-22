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
  BfDocs: { // root type
    id: string; // ID!
    name?: string | null; // String
  }
  BfDocsPost: { // root type
    author?: string | null; // String
    content?: string | null; // String
    id: string; // ID!
    slug?: string | null; // String
    status?: string | null; // String
    summary?: string | null; // String
    title?: string | null; // String
  }
  BfDocsPostConnection: { // root type
    count?: number | null; // Int
    edges?: Array<NexusGenRootTypes['BfDocsPostEdge'] | null> | null; // [BfDocsPostEdge]
    nodes?: Array<NexusGenRootTypes['BfDocsPost'] | null> | null; // [BfDocsPost]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfDocsPostEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['BfDocsPost'] | null; // BfDocsPost
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
  YCRecommendationItem: { // root type
    confidence?: number | null; // Float
    explanation?: string | null; // String
    revision?: string | null; // String
  }
  YCRecommendations: { // root type
    companySummary?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    competitors?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    equityBreakdown?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    investmentsReceived?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    locationDecision?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    moneyMaking?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    otherIdeas?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    otherIncubators?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    previousApplicationChange?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    productSummary?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    progress?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    reasonForApplying?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    reasonForProductChoice?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    revenueSource?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    techStack?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    whoToldYou?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    workLengthHistory?: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
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
    post: NexusGenRootTypes['BfBlogPost'] | null; // BfBlogPost
    posts: NexusGenRootTypes['BfBlogPostConnection'] | null; // BfBlogPostConnection
  }
  BfBlogPost: { // field return type
    author: string | null; // String
    content: string | null; // String
    cta: string | null; // String
    href: string | null; // String
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
    blog: NexusGenRootTypes['BfBlog'] | null; // BfBlog
    docs: NexusGenRootTypes['BfDocs'] | null; // BfDocs
    id: string; // ID!
  }
  BfCurrentViewerLoggedOut: { // field return type
    blog: NexusGenRootTypes['BfBlog'] | null; // BfBlog
    docs: NexusGenRootTypes['BfDocs'] | null; // BfDocs
    id: string; // ID!
  }
  BfDocs: { // field return type
    id: string; // ID!
    name: string | null; // String
    post: NexusGenRootTypes['BfDocsPost'] | null; // BfDocsPost
    posts: NexusGenRootTypes['BfDocsPostConnection'] | null; // BfDocsPostConnection
  }
  BfDocsPost: { // field return type
    author: string | null; // String
    content: string | null; // String
    href: string | null; // String
    id: string; // ID!
    slug: string | null; // String
    status: string | null; // String
    summary: string | null; // String
    title: string | null; // String
  }
  BfDocsPostConnection: { // field return type
    count: number | null; // Int
    edges: Array<NexusGenRootTypes['BfDocsPostEdge'] | null> | null; // [BfDocsPostEdge]
    nodes: Array<NexusGenRootTypes['BfDocsPost'] | null> | null; // [BfDocsPost]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BfDocsPostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BfDocsPost'] | null; // BfDocsPost
  }
  BfPerson: { // field return type
    id: string; // ID!
    name: string | null; // String
  }
  Mutation: { // field return type
    checkEmail: boolean | null; // Boolean
    getLoginOptions: NexusGenScalars['JSONString'] | null; // JSONString
    login: NexusGenRootTypes['BfCurrentViewer'] | null; // BfCurrentViewer
    loginAsDemoPerson: NexusGenRootTypes['BfCurrentViewerLoggedIn'] | null; // BfCurrentViewerLoggedIn
    register: NexusGenRootTypes['BfCurrentViewerLoggedIn'] | null; // BfCurrentViewerLoggedIn
    registrationOptions: NexusGenScalars['JSONString'] | null; // JSONString
    submitYcForm: NexusGenRootTypes['YCRecommendations'] | null; // YCRecommendations
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    bfNode: NexusGenRootTypes['BfNode'] | null; // BfNode
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
  YCRecommendationItem: { // field return type
    confidence: number | null; // Float
    explanation: string | null; // String
    revision: string | null; // String
  }
  YCRecommendations: { // field return type
    companySummary: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    competitors: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    equityBreakdown: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    investmentsReceived: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    locationDecision: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    moneyMaking: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    otherIdeas: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    otherIncubators: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    previousApplicationChange: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    productSummary: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    progress: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    reasonForApplying: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    reasonForProductChoice: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    revenueSource: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    techStack: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    whoToldYou: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
    workLengthHistory: NexusGenRootTypes['YCRecommendationItem'] | null; // YCRecommendationItem
  }
  BfCurrentViewer: { // field return type
    blog: NexusGenRootTypes['BfBlog'] | null; // BfBlog
    docs: NexusGenRootTypes['BfDocs'] | null; // BfDocs
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
    post: 'BfBlogPost'
    posts: 'BfBlogPostConnection'
  }
  BfBlogPost: { // field return type name
    author: 'String'
    content: 'String'
    cta: 'String'
    href: 'String'
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
    blog: 'BfBlog'
    docs: 'BfDocs'
    id: 'ID'
  }
  BfCurrentViewerLoggedOut: { // field return type name
    blog: 'BfBlog'
    docs: 'BfDocs'
    id: 'ID'
  }
  BfDocs: { // field return type name
    id: 'ID'
    name: 'String'
    post: 'BfDocsPost'
    posts: 'BfDocsPostConnection'
  }
  BfDocsPost: { // field return type name
    author: 'String'
    content: 'String'
    href: 'String'
    id: 'ID'
    slug: 'String'
    status: 'String'
    summary: 'String'
    title: 'String'
  }
  BfDocsPostConnection: { // field return type name
    count: 'Int'
    edges: 'BfDocsPostEdge'
    nodes: 'BfDocsPost'
    pageInfo: 'PageInfo'
  }
  BfDocsPostEdge: { // field return type name
    cursor: 'String'
    node: 'BfDocsPost'
  }
  BfPerson: { // field return type name
    id: 'ID'
    name: 'String'
  }
  Mutation: { // field return type name
    checkEmail: 'Boolean'
    getLoginOptions: 'JSONString'
    login: 'BfCurrentViewer'
    loginAsDemoPerson: 'BfCurrentViewerLoggedIn'
    register: 'BfCurrentViewerLoggedIn'
    registrationOptions: 'JSONString'
    submitYcForm: 'YCRecommendations'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    bfNode: 'BfNode'
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
  YCRecommendationItem: { // field return type name
    confidence: 'Float'
    explanation: 'String'
    revision: 'String'
  }
  YCRecommendations: { // field return type name
    companySummary: 'YCRecommendationItem'
    competitors: 'YCRecommendationItem'
    equityBreakdown: 'YCRecommendationItem'
    investmentsReceived: 'YCRecommendationItem'
    locationDecision: 'YCRecommendationItem'
    moneyMaking: 'YCRecommendationItem'
    otherIdeas: 'YCRecommendationItem'
    otherIncubators: 'YCRecommendationItem'
    previousApplicationChange: 'YCRecommendationItem'
    productSummary: 'YCRecommendationItem'
    progress: 'YCRecommendationItem'
    reasonForApplying: 'YCRecommendationItem'
    reasonForProductChoice: 'YCRecommendationItem'
    revenueSource: 'YCRecommendationItem'
    techStack: 'YCRecommendationItem'
    whoToldYou: 'YCRecommendationItem'
    workLengthHistory: 'YCRecommendationItem'
  }
  BfCurrentViewer: { // field return type name
    blog: 'BfBlog'
    docs: 'BfDocs'
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
    post: { // args
      id?: string | null; // ID
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  BfDocs: {
    post: { // args
      slug?: string | null; // ID
    }
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
      authResp: NexusGenScalars['JSONString']; // JSONString!
      email: string; // String!
    }
    register: { // args
      attResp: NexusGenScalars['JSONString']; // JSONString!
      email: string; // String!
    }
    registrationOptions: { // args
      email: string; // String!
    }
    submitYcForm: { // args
      formData?: string | null; // String
      systemPrompt?: string | null; // String
      taskPrompt?: string | null; // String
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
  BfNode: "BfBlog" | "BfBlogPost" | "BfDocs" | "BfDocsPost" | "BfPerson"
  Node: "BfBlog" | "BfBlogPost" | "BfCurrentViewerLoggedIn" | "BfCurrentViewerLoggedOut" | "BfDocs" | "BfDocsPost" | "BfPerson"
}

export interface NexusGenTypeInterfaces {
  BfBlog: "BfNode" | "Node"
  BfBlogPost: "BfNode" | "Node"
  BfCurrentViewerLoggedIn: "BfCurrentViewer" | "Node"
  BfCurrentViewerLoggedOut: "BfCurrentViewer" | "Node"
  BfDocs: "BfNode" | "Node"
  BfDocsPost: "BfNode" | "Node"
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