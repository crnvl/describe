# describe. - AI alt text tool
describe. makes it easy to include alt text in your social media posts, blogs or articles.

As of right now, my hosted version is not public as it'd simply be too costly for me. 
You can however, self-host this project using Docker.

## Host it yourself
1. Have Docker installed on your machine
2. Run `docker pull ghcr.io/angelsflyinhell/describe:latest`
3. Run `docker run -dp <EXTERNAL PORT>:3000 -e OPENAI_KEY=<YOUR OPENAI API KEY> -e PASSWORD=<PASSWORD> ghcr.io/angelsflyinhell/describe:latest`
> Note: The `PASSWORD` environment variable can be left empty, in which case no password will be required to use the tool.