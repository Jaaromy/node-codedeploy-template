#!/bin/bash
yum update -y
yum -y install ruby
yum -y install wget
yum -y install libcurl-devel
yum -y install zlib-devel
yum -y install git
yum group install -y "Development Tools"
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
