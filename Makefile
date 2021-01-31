.DEFAULT_GOAL := build-all

.PHONY: ecr-login
ecr-login: #! Login to ECR
	aws ecr get-login-password \
		--region us-east-2 \
		| docker login --username AWS --password-stdin \
		046470573167.dkr.ecr.us-east-2.amazonaws.com

.PHONY: build-image
build-image: #! Build image for ECR
	docker build . -t haleyfairchild:latest

.PHONY: tag-image
tag-image: #! Tag image as latest for ECR
	docker tag haleyfairchild.com:latest \
		046470573167.dkr.ecr.us-east-2.amazonaws.com/haleyfairchild.com:latest

.PHONY: push-image
push-image: #! Push image to ECR
	docker push 046470573167.dkr.ecr.us-east-2.amazonaws.com/haleyfairchild.com:latest

.PHONY: create-ecs-config
create-ecs-config: #! Create an ECS configuration
	ecs-cli configure \
		--cluster haleyfairchild-ecs-cluster \
		--region us-east-2 \
		--config-name haleyfairchild-ecs-conf \
		--cfn-stack-name haleyfairchild-ecs-stack \
		--default-launch-type EC2

.PHONY: create-cluster
create-cluster: #! Create an ECS cluster
	ecs-cli up \
		--force \
		--capability-iam \
		--size 1 \
		--instance-type t2.micro \
		--cluster-config haleyfairchild-ecs-conf

.PHONY: register-task
register-task: #! Register task
	aws ecs register-task-definition \
    --cli-input-json file://build/ecs-task-definition-production.json

.PHONY: run-task
run-task: #! Run a task
	aws ecs run-task \
		--cluster haleyfairchild-ecs-cluster \
		--launch-type EC2 \
		--task-definition haleyfairchild

.PHONY:
dev: #! Start dev containers
	docker run -p 80:80 \
		-v ~/Apps/haleyfairchild:/var/www/html haleyfairchild
