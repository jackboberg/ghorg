# ghorg

[![Greenkeeper badge](https://badges.greenkeeper.io/jackboberg/ghorg.svg)](https://greenkeeper.io/)

> CLI tools for managing a github organization

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm install ghorg --global
```

## Usage

```
> ghorg -h
Commands:
  keys [team]  Get public keys

Options:
  -o, --organization  Organization name                               [required]
  -t, --token         Authentication token
  -h                  Show help
```

### Configuration Files

Create [an rc file][rc] to set defaults, so you don't have to pass an 
`organization` and `token` flag to every command.

```
# ~/.ghorgrc
organization = MyOrgName
token = xxx
```

`ghorg` will walk the directory tree looking for rc files, so you can create 
one in the root of your organization's project directory to make the CLI 
context aware.

### Commands

#### Keys

Get the public keys for all organization members, optionally limited to a 
single team. They are combined and written to `stdout`.

```
> ghorg keys -h
ghorg keys [team]

Options:
  -o, --organization  Organization name                               [required]
  -t, --token         Authentication token
  -h                  Show help                                        [boolean]
```

## Contribute

PRs welcome! Please read the [contributing guidelines](CONTRIBUTING.md) and 
the [code of conduct](CODE_OF_CONDUCT.md).

## License

[MIT © Jack Boberg.](LICENSE)  

[rc]: https://www.npmjs.com/package/rc