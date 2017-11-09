# aws-sam-alarm-lambda

## Description
AWS SAM Template for Lambda invoked on CloudWatch Alarm.

The template provided configures a Lambda Function invoked via SNS via a sample CloudWatch Alarm.  The alarm is configured to monitor the account spending.

To add additional alarms to this Lambda Function you can either add additional alarms to this SAM template or use the output AlarmTopicArn in other templates as an alarm action.

## Instruction
```bash
export S3_BUCKET=<bucket name>
npm install
```

### Build, Package & Deploy
```bash
npm run bpd # build package deploy
```

### Run locally for a sample event
```bash
npm run sample
```