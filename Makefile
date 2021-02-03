.DEFAULT_GOAL := build-all

.PHONY: build-all
build-all: #! Build the site for development
	docker run -p 8080:8080 \
		-v ~/Apps/haleyfairchild:/var/www/html $(REPOSITORY)

.PHONY: run-task
run-task: #! Run a task
	aws ecs run-task \
		--cluster production \
		--launch-type EC2 \
		--task-definition haleyfairchild

.PHONY:
test: #! Run the test scripts
	vendor/bin/phpunit
