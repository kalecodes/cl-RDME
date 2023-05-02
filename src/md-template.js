
const generateTableOfContents = fullProjectData => {
    const {installation, usage, license, contributing, tests, credits } = fullProjectData;

    return `
## Table of Contents
${generateInstallationLink(installation)} ${generateUsageLink(usage)} ${generateLicenseLink(license)} ${generateContributingLink(contributing)} ${generateTestsLink(tests)} ${generateCreditsLink(credits)}
* [Questions](#questions)
`;
};

// ------------------------------------------

const generateInstallationLink = installation => {
    if (!installation) {
        return ``;
    }

    return `
* [Installation](#installation)`;
};

const generateUsageLink = usage => {
    if (!usage) {
        return ``;
    } 

    return `
* [Usage](#usage)`;
};

const generateLicenseLink = license => {
    if (!license) {
        return ``;
    }

    return `
* [License](#license)`;
};

const generateContributingLink = contributing => {
    if (!contributing) {
        return ``;
    }

    return `
* [Contributions](#contributions)`;
};

const generateTestsLink = tests => {
    if (!tests) {
        return ``;
    }
    
    return `
* [Tests](#tests)`;
};

const generateCreditsLink = credits => {
    if (!credits) {
        return ``;
    }

    return `
* [Credits](#credits)`;
};

// -------------------------------------------

const generateInstallation = installation => {
    if (!installation) {
        return ``;
    }

    return `
## Installation

${installation}
`;
};

const generateUsage = usage => {
    if (!usage) {
        return ``;
    }

    return `
## Usage

${usage}
`;
};

const generateLicense = license => {
    if (!license) {
        return ``;
    }

    const gpl = `
## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
Please click the badge for more information about this license.
`;
    const apache = `
## License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
Please click the badge for more information about this license.
`;
    const mit = `
## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Please click the badge for more information about this license.
`;
    const none = `
## License

This project does not utilize any licenses.
`;

    if (license === 'GPLv3') {
        return gpl;
    } else if (license === 'Apache_2.0') {
        return apache;
    } else if (license === 'MIT') {
        return mit;
    } else {
        return none;
    }
};

const generateContributing = contributing => {
    if (!contributing) {
        return ``;
    }

    return `
## Contributions

${contributing}
`;
};

const generateTests = tests => {
    if (!tests) {
        return ``;
    }

    return `
## Tests

${tests}
`;
};

const generateCredits = creditsArr => {
    if (!creditsArr) {
        return ``;
    }

    return `
## Credits
${creditsArr
    .map(({ name, link }) => {
        return `
* ${name} (${link})`;
    })
    .join()}
`;
};

module.exports = fullProjectData => {
    const { title, description, installation, usage, license, contributing, tests, questions, email, username, credits } = fullProjectData;

    return `
# ${title}

[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)

## Description

${description}


${generateTableOfContents(fullProjectData)}

${generateInstallation(installation)} 
${generateUsage(usage)} 
${generateLicense(license)}
${generateContributing(contributing)}
${generateTests(tests)}
${generateCredits(credits)}

## Questions

${questions}
* GitHub: [${username}](https://github.com/${username})
* Email: ${email}
`;
};