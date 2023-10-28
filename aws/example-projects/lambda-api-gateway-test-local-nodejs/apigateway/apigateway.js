exports.exampleLambdaHandler = async (event, context) => {
    return "API Gateway Lambda Handler Done";
};

// exports.lambdaHandler = async (event, context) => {
//     return event.queryStringParameters.foo;
// };


exports.lambdaHandler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "My custom header value" },
        body: "Process Event and return"
    });
}
