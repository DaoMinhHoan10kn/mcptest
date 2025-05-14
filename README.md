# Model Context Protocol (MCP)

## What is MCP?
Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs). Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect devices to various peripherals, MCP provides a standardized way to connect AI models to different data sources and tools.

## Why MCP?
MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:

- A growing list of pre-built integrations that your LLM can directly plug into.
- The flexibility to switch between LLM providers and vendors.
- Best practices for securing your data within your infrastructure.

## General Architecture
At its core, MCP follows a client-server architecture where a host application can connect to multiple servers:

- **MCP Hosts**: Programs like Claude Desktop, IDEs, or AI tools that want to access data through MCP.
- **MCP Clients**: Protocol clients that maintain 1:1 connections with servers.
- **MCP Servers**: Lightweight programs that each expose specific capabilities through the standardized Model Context Protocol.
- **Local Data Sources**: Your computer’s files, databases, and services that MCP servers can securely access.
- **Remote Services**: External systems available over the internet (e.g., through APIs) that MCP servers can connect to.

## Getting Started
Choose the path that best fits your needs:

- **For Server Developers**: [Get started building your own server](https://modelcontextprotocol.io/quickstart/server).
- **For Client Developers**: [Get started building your own client](https://modelcontextprotocol.io/quickstart/client).
- **For Claude Desktop Users**: [Get started using pre-built servers](https://modelcontextprotocol.io/quickstart/user).

## Tutorials and Examples
- [Building MCP with LLMs](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms): Learn how to use LLMs like Claude to speed up your MCP development.
- [Debugging Guide](https://modelcontextprotocol.io/docs/tools/debugging): Learn how to effectively debug MCP servers and integrations.
- [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector): Test and inspect your MCP servers with our interactive debugging tool.
- [Example Servers](https://modelcontextprotocol.io/examples): Check out our gallery of official MCP servers and implementations.
- [Example Clients](https://modelcontextprotocol.io/clients): View the list of clients that support MCP integrations.

## Explore MCP
Dive deeper into MCP’s core concepts and capabilities:

- [Core Architecture](https://modelcontextprotocol.io/docs/concepts/architecture): Understand how MCP connects clients, servers, and LLMs.
- [Resources](https://modelcontextprotocol.io/docs/concepts/resources): Expose data and content from your servers to LLMs.
- [Prompts](https://modelcontextprotocol.io/docs/concepts/prompts): Create reusable prompt templates and workflows.
- [Tools](https://modelcontextprotocol.io/docs/concepts/tools): Enable LLMs to perform actions through your server.
- [Sampling](https://modelcontextprotocol.io/docs/concepts/sampling): Let your servers request completions from LLMs.
- [Transports](https://modelcontextprotocol.io/docs/concepts/transports): Learn about MCP’s communication mechanism.

## Contributing
We welcome contributions to MCP! Check out our [Contributing Guide](https://modelcontextprotocol.io/development/contributing) to learn how you can help improve MCP.

## Support and Feedback
Here’s how to get help or provide feedback:

- For bug reports and feature requests related to the MCP specification, SDKs, or documentation, please [create a GitHub issue](https://github.com/modelcontextprotocol).
- For discussions or Q&A about the MCP specification, use the [specification discussions](https://github.com/modelcontextprotocol/specification/discussions).
- For discussions or Q&A about other MCP open source components, use the [organization discussions](https://github.com/orgs/modelcontextprotocol/discussions).

## License
This project is licensed under the MIT License.
àhgjasgfhjasgfhjasgfhjasgfhjasgfhjasgfhjasgfhjasfghjsafghjasfgahjsygfhjasfghjasgfhjasgfhjsagfhjsagfhjagsjfhasf