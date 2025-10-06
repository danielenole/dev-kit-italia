#!/bin/bash

ls -l ./packages/dev-kit-italia/dist
chmod -R 777 ./packages
cd ./examples/svelte-app && npm ci && npm run build
cd ../..
cd ./examples/react-app && npm ci && npm run build
cd ../..
cd ./examples/angular-app && npm ci && npm run build-doc
cd ../..
cd ./examples/vue-app && npm ci && npm run build
cd ../..

cp -R ./examples/svelte-app/dist ./storybook-static/svelte-app/
cp -R ./examples/vue-app/dist ./storybook-static/vue-app/
cp -R ./examples/react-app/dist ./storybook-static/react-app/
cp -R ./examples/angular-app/dist/angular-app/browser ./storybook-static/angular-app/
ls -l ./packages/dev-kit-italia/dist
