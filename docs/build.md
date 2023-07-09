# Build with OpenAPI Generator

## Requirements
- Docker

## Build

```shell
d run --rm -v "${PWD}:/local" --network=host openapitools/openapi-generator-cli generate \
-i /local/openapi.yaml \
-g javascript \
-o /local/javascript \
--package-name=StreamNetworkApi \
--api-package=StreamNetworkApi \
--git-host=github.com \
--git-repo-id=stream-network-api-client-javascript-sdk \
--git-user-id=Live4TV \
--artifact-version=1.0.0 \
--invoker-package=StreamNetworkApi \
--project-version=1.0.0
```
