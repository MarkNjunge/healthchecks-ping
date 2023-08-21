# Healthchecks Ping
Ping [healthchecks.io](https://healthchecks.io/) at a certain schedule.

## Usage
```
docker run -e URL=https://hc-ping.com/uuid -e SCHEDULE="* * * * *" marknjunge/healthchecks-ping
```
