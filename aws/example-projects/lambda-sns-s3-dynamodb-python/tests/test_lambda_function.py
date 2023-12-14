import unittest
from src import lambda_function
from moto import mock_s3, mock_sns

class MyTestCase(unittest.TestCase):
    @mock_s3
    @mock_sns
    def test_something(self):
        event = {
            "Records": [
                {
                    "eventVersion": "2.0",
                    "eventSource": "aws:s3",
                    "awsRegion": "us-east-1",
                    "eventTime": "1970-01-01T00:00:00.000Z",
                    "eventName": "ObjectCreated:Put",
                    "eventID": "ABC-1",
                    "userIdentity": {
                        "principalId": "EXAMPLE"
                    },
                    "requestParameters": {
                        "sourceIPAddress": "127.0.0.1"
                    },
                    "responseElements": {
                        "x-amz-request-id": "EXAMPLE123456789",
                        "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH"
                    },
                    "dynamodb":{
                        "Keys": {
                            "username": {
                                "S": "test-object-key"
                            }
                        }
                    },
                    "s3": {
                        "s3SchemaVersion": "1.0",
                        "configurationId": "testConfigRule",
                        "bucket": {
                            "name": "test-bucket-name",
                            "ownerIdentity": {
                                "principalId": "EXAMPLE"
                            },
                            "arn": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        },
                        "object": {
                            "key": "test-object-key",
                            "size": 1024,
                            "etag": "0123456789abcdef0123456789abcdef",
                            "security-class": "S3"
                        }
                    },
                    "glacierEventData": {
                        "restoreEventData": {
                            "lifecycleRestorationExpiryTime": "1970-01-01T00:00:00.000Z",
                            "lifecycleRestoreStorageClass": "GLACIER",
                            "intendedRestoreDate": "1970-01-01T00:00:00.000Z"
                        }
                    }
                }
            ]
        }
        response = lambda_function.lambda_handler(event, None)
        statusCode = response['statusCode']
        assert statusCode == 200


if __name__ == '__main__':
    unittest.main()
