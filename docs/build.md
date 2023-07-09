# Build with OpenAPI Generator

## Requirements
- Docker

## Build

```shell
docker run --rm -v "${PWD}:/local" --network=host openapitools/openapi-generator-cli generate \
-i https://api-stream-network.live4.tv/api-json \
-g javascript \
-o /local \
--package-name=StreamNetworkApi \
--api-package=StreamNetworkApi \
--additional-properties=projectVersion=1.0.0,licenseName=Apache-2.0,projectName=live4tv_stream_networks_api_javascript \
--git-host=github.com \
--git-repo-id=stream-network-api-client-javascript-sdk \
--git-user-id=Live4TV \
--artifact-version=1.0.0 \
--invoker-package=StreamNetworkApi 
```
