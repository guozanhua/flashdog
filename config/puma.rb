#!/usr/bin/env puma
# put it to /shared

directory '/home/flashdog/flashdog_production/current'
rackup "/home/flashdog/flashdog_production/current/config.ru"
environment 'production'

pidfile "/home/flashdog/flashdog_production/shared/tmp/pids/puma.pid"
state_path "/home/flashdog/flashdog_production/shared/tmp/pids/puma.state"
stdout_redirect '/home/flashdog/flashdog_production/current/log/puma.error.log', '/home/flashdog/flashdog_production/current/log/puma.access.log', true


threads 4,16

bind 'unix:/home/flashdog/flashdog_production/shared/tmp/sockets/flashdog-puma.sock'
workers 0



preload_app!





