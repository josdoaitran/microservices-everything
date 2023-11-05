import json

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

def lamda_handle_s3_event(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('File processed successfully.')
    }