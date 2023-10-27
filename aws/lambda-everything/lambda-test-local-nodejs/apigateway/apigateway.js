exports.exampleLambdaHandler = async (event, context) => {
    return "API Gateway Lambda Handler Done";
};

exports.lambdaHandler = async (event, context) => {
    return event.queryStringParameters.foo;
};