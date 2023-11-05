import unittest
import boto3
from moto import mock_s3
from lambda_function.lambda_function import lamda_handle_s3_event  # Import your Lambda function here

class TestLambdaIntegration(unittest.TestCase):
    @mock_s3
    def setUp(self):
        # Initialize the mock S3 resource
        self.s3 = boto3.client('s3', region_name='us-east-1')
        self.s3.create_bucket(Bucket='my-test-bucket')

    @mock_s3
    def test_lambda_with_s3_integration(self):
        # Create a sample event that your Lambda function expects
        event = {
            "Records": [
                {
                    "s3": {
                        "bucket": {
                            "name": "my-test-bucket"
                        },
                        "object": {
                            "key": "example-file.txt"
                        }
                    }
                }
            ]
        }

        # Call your Lambda function
        response = lamda_handle_s3_event(event, None)

        # Assertions based on the expected behavior of your Lambda function
        self.assertEqual(response['statusCode'], 200)
        self.assertEqual(response['body'], '"File processed successfully."')

    # @mock_s3
    # def tearDown(self):
    #     # Clean up any resources (e.g., S3 buckets) after the tests
    #     self.s3.delete_bucket(Bucket='my-test-bucket')

if __name__ == '__main__':
    unittest.main()
