# Valkey GLIDE - Public preview

Valkey GLIDE Go Wrapper is currently in public preview. Please refer to this page for available commands.

Valkey General Language Independent Driver for the Enterprise (GLIDE), is an open-source Valkey client library. Valkey GLIDE is one of the official client libraries for Valkey, and it supports all Valkey commands (limited command support for public preview). Valkey GLIDE supports Valkey 7.2 and above, and Redis open-source 6.2, 7.0 and 7.2. Application programmers use Valkey GLIDE to safely and reliably connect their applications to Valkey- and Redis OSS- compatible services. Valkey GLIDE is designed for reliability, optimized performance, and high-availability, for Valkey and Redis OSS based applications. It is sponsored and supported by AWS, and is pre-configured with best practices learned from over a decade of operating Redis OSS-compatible services used by hundreds of thousands of customers. To help ensure consistency in application development and operations, Valkey GLIDE is implemented using a core driver framework, written in Rust, with language specific extensions. This design ensures consistency in features across languages and reduces overall complexity.

## Supported Engine Versions

Refer to the [Supported Engine Versions table](https://github.com/valkey-io/valkey-glide/blob/main/README.md#supported-engine-versions) for details.

# Getting Started - GO Wrapper

## System Requirements

The release of Valkey GLIDE was tested on the following platforms:

Linux:

- Ubuntu 24.04.1 (x86_64 and aarch64)

macOS:

- macOS 14.7 (Apple silicon/aarch_64)

## GO supported version

Valkey GLIDE Go Wrapper support Go 1.20 and 1.22.

## Installation and Setup

Use either the `go get` command or edit `go.mod` file manually to install and use Valkey GLIDE in your Go project.

### `go get` command

Execute below command to install:

```bash
$ go get github.com/valkey-io/valkey-glide/go
```

### Edit `go.mod` manually
1. Add below to your `go.mod` file and save:

    ```
    require (
        github.com/valkey-io/valkey-glide/go v1.3.0
    )
    ```

2. Execute below command:
    ```bash
    $ go mod tidy
    ```


## Basic Example

## Building & Testing

Development instructions for local building & testing the package are in the [DEVELOPER.md](DEVELOPER.md) file.
