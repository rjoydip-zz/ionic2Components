#!/bin/bash

git config --global user.name "Rjoydip" && \
git config --global user.email "joydipand@gmail.com" && \
git status
git add . && \
git add -u && \
read -p "Commit description: " desc
git commit -m "$desc"
git push origin master
git config --global --unset-all user.name
git config --global --unset-all user.email
