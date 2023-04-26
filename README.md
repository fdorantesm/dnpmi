# npmdi

[![npm version](https://badge.fury.io/js/npmdi.svg)](https://badge.fury.io/js/npmdi)
[![GitHub issues](https://img.shields.io/github/issues/fdorantesm/npmdi)](https://github.com/fdorantesm/npmdi/issues)
[![GitHub forks](https://img.shields.io/github/forks/fdorantesm/npmdi)](https://github.com/fdorantesm/npmdi/network/members)
[![GitHub stars](https://img.shields.io/github/stars/fdorantesm/npmdi)](https://github.com/fdorantesm/npmdi/stargazers)
[![GitHub License](https://img.shields.io/github/license/fdorantesm/npmdi)](https://github.com/fdorantesm/npmdi/blob/main/LICENSE)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>

A command-line interface (CLI) tool to install Node.js modules in multiple projects with a single command.

## Installation

<br>

You can install `npmdi` globally using `npm` or `yarn`:

```bash
npm i --global npmdi
```

```bash
yarn global add npmdi
```

<br>

---

<br>

## Usage

<br>

```bash
Usage: npmdi [options]

Options:
  -V, --version              output the version number
  -d, --directory <path>     path to the directory containing your Node.js projects (default: $(pwd))
  -p, --package-manager <pm> name of the package manager to use (npm, yarn, or pnpm) (default: npm)
  -h, --help                 output usage information

```

<br>
<br>

Example:

```bash
$ npmdi --directory ~/workspace --package-manager yarn
INSTALL /Users/nano/workspace/alexa-skill-api
INSTALL /Users/nano/workspace/dorantes-next-portfolio
SKIP /Users/nano/workspace/fdorantesm/package.json missing
INSTALL /Users/nano/workspace/healthy-admin
INSTALL /Users/nano/workspace/healthy-app
INSTALL /Users/nano/workspace/healthy-backend
INSTALL /Users/nano/workspace/inveragave
INSTALL /Users/nano/workspace/inveragave-api
INSTALL /Users/nano/workspace/inveragave-app
SKIP /Users/nano/workspace/mokalli/package.json missing
INSTALL /Users/nano/workspace/moppet
INSTALL /Users/nano/workspace/my-video-streaming-project
INSTALL /Users/nano/workspace/nest-pdf
INSTALL /Users/nano/workspace/nestjs-ddd-module-template
INSTALL /Users/nano/workspace/nestjs-wetransfer
INSTALL /Users/nano/workspace/prospec
INSTALL /Users/nano/workspace/raffle-webapp
INSTALL /Users/nano/workspace/raffles-backend-api
INSTALL /Users/nano/workspace/stream
INSTALL /Users/nano/workspace/stripe-token
FINISHED Installed node packages in 18 projects
```

<br>
<br>

## Contributing

<br>

<p>
    Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.
</p>

<br>

## License

<br>

<p>
    This project is licensed under the MIT License - see the LICENSE file for details.
</p>

<br>

## Buy me a coffee

<br>

<p>
    If you find this tool useful and want to support its development, you can buy me a coffee via PayPal.
</p>

<br>

[![Buy me a coffee via PayPal](https://img.shields.io/badge/Buy%20me%20a%20coffee-PayPal-blue?logo=paypal)](https://www.paypal.me/fdorantesm)

<br>

Your contributions will help me continue to improve this tool and develop new features. Thank you for your support!

<br>
<br>
<br>

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src=https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white alt=youtube style="margin-bottom: 5px;" />
    </a>
    <a href="https://stackoverflow.com/users/6484286" target="_blank">
        <img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
    </a>
    <a href="https://codepen.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white alt=codepen style="margin-bottom: 5px;" />
    </a>
</div>

<br/>