
.PHONY: shell
shell: 
	docker run -p 3333:3333 -it -v $(pwd):/app node:12.16.3 bash

.PHONY: down
down:
	# @docker-compose down

.PHONY: up
up:
	# @docker-compose up servico

.PHONY: up-silent
up-silent:
	# @docker-compose up -d servico