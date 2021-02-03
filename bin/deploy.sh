#!/bin/sh
CLUSTER=production
SERVICE=haleyfairchild
TASK_DEFINITION=haleyfairchild
AWS_ACCOUNT=046470573167.dkr.ecr.us-east-2.amazonaws.com
REPOSITORY=haleyfairchild.com

echo "**********Logging in to ECR*************"
aws ecr get-login-password \
    --region us-east-2 \
    | docker login --username AWS --password-stdin \
    $AWS_ACCOUNT

echo "**********Building docker image*************"
docker build . -t $REPOSITORY:latest

echo "**********Tagging docker image*************"
docker tag $REPOSITORY:latest $AWS_ACCOUNT/$REPOSITORY:latest && \

echo "**********Pushing docker image to ECR*************"
docker push $AWS_ACCOUNT/$REPOSITORY:latest

echo "**********Registering Task in ECS*************"
REVISION=$(aws ecs register-task-definition \
    --cli-input-json file://.github/workflows/ecs-task-definition-production.json | jq -r '.taskDefinition.revision')

echo "**********Updating ECS service to user task*************"
aws ecs update-service --cluster "$CLUSTER" --service "$SERVICE" --task-definition "$TASK_DEFINITION":"$REVISION"
