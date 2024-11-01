set dotenv-load

dev:
    pnpm dev

build:
    pnpm build

deploy:
    pnpm build
    scp -r doc_build/* ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PAHT}