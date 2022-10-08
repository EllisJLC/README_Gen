module.exports = function writing (data) {
  let {title, introduction, installation, usage, test, image, wireframe, credits, license} = data;
  let i = 1;
  let written = `# ${title}
\n## Introduction
\n${introduction}
\n## Table of Contents 
${i, i++}. [Installation](#installation)
${i, i++}. [Usage](#usage)
${i, i++}. [Test](#test)\n`;
  if (image === "yes") {
    written += `${i, i++}. [Images](#images)\n`;
  }
  written += `${i, i++}. [Credits](#credits)
${i, i++}. [Licenses](#licenses)
\n## Installation 
\n${installation}
\n## Usage
\n${usage}
\n## Test
\n${test}\n`
if (wireframe === "yes" || image === "yes") {
  written += "\n## Images"
  if (wireframe === "yes") {
    written += `\n### Image of wireframe plan: \n
![Wireframe](./assets/images/wireframe.png)\n`
  }
  if (image === "yes") {
`\n### Image of working site:\n
![Program sample](./assets/images/preview.png)\n`;
  }
}
written += `\n## Credits
\n${credits}
\n## Licenses \n`;
switch (license) {
  case "apache":
    written += `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)\n
Apache 2.0 License https://opensource.org/licenses/Apache-2.0`;
    break;
  case "boost":
    written += `[License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)\n
Boost Software License 1.0: https://www.boost.org/LICENSE_1_0.txt`;
    break;
  case "eclipse":
      written += `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)\n
Eclipse Public License 1.0: https://opensource.org/licenses/EPL-1.0`;
    break;
  case "ibm":
      written += `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)\n
IBM Public License Version 1.0: https://opensource.org/licenses/IPL-1.0`;
  break;
  case "isc":
    written += `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)\n
ISC License (ISC): https://opensource.org/licenses/ISC`;
  break;
  case "mit":
    written += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)\n
The MIT License: https://opensource.org/licenses/MIT`;
  break;
  case "mozilla":
    written += `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)\n
Mozilla Public License 2.0: https://opensource.org/licenses/MPL-2.0`;
  break;
  case "wtfpl":
    written += `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)\n
The Do What the F*ck You Want to Public License: http://www.wtfpl.net/about/`;
  break;
  case "zlib":
    written += `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)\n
The zlib/libpng License: https://opensource.org/licenses/Zlib`;
  break;
  default:
    written += `No valid license.`
}
return written;
}