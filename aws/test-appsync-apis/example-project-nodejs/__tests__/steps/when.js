require('isomorphic-fetch')
const gql = require('graphql-tag')
const { AWSAppSyncClient, AUTH_TYPE } = require('aws-appsync')

const appSyncConfig = (user) => ({
  url: process.env.ApiUrl,
  region: process.env.AwsRegion,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: () => `Bearer ${user.idToken}`
  },
  disableOffline: true
})

const initAppSyncClient = (user) => {
  const config = appSyncConfig(user)
  return new AWSAppSyncClient(config)
}

const we_invoke_confirmUserSignup = async (username, name, email) => {
  const handler = require('../../functions/confirm-user-signup').handler

  const context = {}
  const event = {
    "version": "1",
    "region": process.env.AwsRegion,
    "userPoolId": process.env.CognitoUserPoolId,
    "userName": username,
    "triggerSource": "PostConfirmation_ConfirmSignUp",
    "request": {
      "userAttributes": {
        "sub": username,
        "cognito:email_alias": email,
        "cognito:user_status": "CONFIRMED",
        "email_verified": "false",
        "name": name,
        "email": email
      }
    },
    "response": {}
  }

  return await handler(event, context)
}

const we_invoke_tweet = async (username, text) => {
  const handler = require('../../functions/tweet').handler

  const context = {}
  const event = {
    identity: {
      username
    },
    arguments: {
      text
    }
  }

  return await handler(event, context)
}

const we_invoke_distributeTweets = async (event) => {
  const handler = require('../../functions/distribute-tweets').handler

  const context = {}
  return await handler(event, context)
}

const a_user_calls_getMyTimeline = async (user, limit, nextToken) => {
  const client = initAppSyncClient(user)
  const resp = await client.query({
    query: gql`query getMyTimeline($limit: Int!, $nextToken: String) {
      getMyTimeline(limit: $limit, nextToken: $nextToken) {
        nextToken
        tweets {
          id
          createdAt
          text
        }
      }
    }`,
    variables: {
      limit,
      nextToken
    }
  })

  const timeline = resp.data.getMyTimeline

  console.log(`[${user.username}] - fetched timeline`)

  return timeline
}

const a_user_calls_tweet = async (user, text) => {
  const client = initAppSyncClient(user)
  const resp = await client.mutate({
    mutation: gql`mutation tweet($text: String!) {
      tweet(text: $text) {
        id
        createdAt
        text
      }
    }`,
    variables: {
      text
    }
  })

  const newTweet = resp.data.tweet

  console.log(`[${user.username}] - posted new tweet`)

  return newTweet
}

const a_user_calls_follow = async (user, userId) => {
  const client = initAppSyncClient(user)
  await client.mutate({
    mutation: gql`mutation follow($userId: ID!) {
      follow(userId: $userId)
    }`,
    variables: {
      userId
    }
  })

  console.log(`[${user.username}] - followed [${userId}]`)
}

const a_user_calls_getFollowers = async (user, userId, limit, nextToken) => {
  const client = initAppSyncClient(user)
  const resp = await client.query({
    query: gql`query getFollowers($userId: ID!, $limit: Int!, $nextToken: String) {
      getFollowers(userId: $userId, limit: $limit, nextToken: $nextToken) {
        profiles {
          id
          name
          screenName
          createdAt
        }
      }
    }`,
    variables: {
      userId,
      limit,
      nextToken
    }
  })

  const result = resp.data.getFollowers

  console.log(`[${user.username}] - fetched followers`)

  return result
}

module.exports = {
  we_invoke_confirmUserSignup,
  we_invoke_tweet,
  we_invoke_distributeTweets,
  a_user_calls_getMyTimeline,
  a_user_calls_tweet,
  a_user_calls_follow,
  a_user_calls_getFollowers,
}