<!-- https://cloud.redpanda.com/clusters/ct2kpi0e2nqs140vl0n0/overview -->

# Create and enter the project folder
mkdir redpanda-node; cd redpanda-node
# Generate package.json (the default values are fine)
npm init
# Install required dependencies
npm i -D typescript
npm i -D @types/node
npm i kafkajs
# Generate tsconfig.json
tsc --init