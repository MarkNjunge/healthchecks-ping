# Healthchecks Ping
Ping [healthchecks.io](https://healthchecks.io/) at a certain schedule.

## Usage
```
docker run -e URL=https://hc-ping.com/uuid -e SCHEDULE="* * * * *" marknjunge/healthchecks-ping
```
```yml
version: "3"
services:
  healthchecksping:
    container_name: healthchecks-ping
    image: marknjunge/healthchecks-ping
    environment:
      - URL=https://hc-ping.com/uuid
      - SCHEDULE=* * * * *
```
