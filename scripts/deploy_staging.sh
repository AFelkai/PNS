apk add --no-cache curl jq python py-pip
pip install awscli
aws ecs update-service --cluster saps-staging-cluster --service app --force-new-deployment