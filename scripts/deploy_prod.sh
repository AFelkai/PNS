apk add --no-cache curl jq python py-pip
pip install awscli
aws ecs update-service --cluster saps-prod-cluster --service app --force-new-deployment