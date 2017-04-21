#!/bin/bash
chown -R ec2-user:ec2-user /opt/app/
chown -R ec2-user:ec2-user /usr/local/bin/
yum update-minimal --security -y
