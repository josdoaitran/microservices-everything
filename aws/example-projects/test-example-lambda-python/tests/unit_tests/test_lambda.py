import unittest
from lambda_function.lambda_function import lambda_handler

class TestLambdaFunction(unittest.TestCase):
    def test_lambda_handler(self):
        event = {}
        context = {}
        response = lambda_handler(event, context)
        self.assertEqual(response['statusCode'], 200)
        self.assertEqual(response['body'], '"Hello from Lambda!"')
        print(response['statusCode'])
        print(response['body'])

if __name__ == '__main__':
    unittest.main()
