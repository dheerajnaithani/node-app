#!/bin/bash
set -e
yum update -y
pm2 update
cd /opt/xeniuser/