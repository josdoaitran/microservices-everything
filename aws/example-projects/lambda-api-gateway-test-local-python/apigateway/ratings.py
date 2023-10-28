def handler(event, context):
    response = {
        "statusCode": 200,
        "headers": {"x-custom-header": "my custom header value"},
        "body": "hello world"
    }
    return response