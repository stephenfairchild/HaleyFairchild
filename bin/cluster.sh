#!/bin/sh
CLUSTER=production
AWS_ACCOUNT=046470573167.dkr.ecr.us-east-2.amazonaws.com
REGION=us-east-2
KEYPAIR=production
SIZE=t2.micro
COUNT=1

echo "**********Logging in to ECR*************"
aws ecr get-login-password \
    --region us-east-2 \
    | docker login --username AWS --password-stdin \
    $AWS_ACCOUNT

echo "**********Creating cluster configuration*************"
ecs-cli configure \
    --cluster $CLUSTER \
    --region $REGION \
    --config-name $CLUSTER \
    --cfn-stack-name $CLUSTER \
    --default-launch-type EC2

echo "**********Creating cluster based off of configuration*************"
ecs-cli up \
    --force \
    --keypair $KEYPAIR \
    --capability-iam \
    --size $COUNT \
    --instance-type $SIZE \
    --cluster-config $CLUSTER
