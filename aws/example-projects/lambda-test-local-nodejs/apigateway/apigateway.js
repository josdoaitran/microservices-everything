exports.exampleLambdaHandler = async (event, context) => {
    return "API Gateway Lambda Handler Done";
};

// exports.lambdaHandler = async (event, context) => {
//     return event.queryStringParameters.foo;
// };


exports.lambdaHandler = async (event, context) => {
    return {
        'statusCode': 200,
        'body': json.dumps("{\"message\": \"Example Event message with API gateway\"}")
    }
};

