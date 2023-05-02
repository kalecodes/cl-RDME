

const generateInstallation = installation => {
    if (!installation) {
        return '';
    }

    return `
    ## Installation Instructions

    ${installation}
    `;
};

const generateUsage = usage => {
    if (!usage) {
        return '';
    }

    return `
    ## Usage Instructions

    ${usage}
    `;
};

const generateCredits = creditsArr => {
    if (!creditsArr) {
        return '';
    }

    return `
    ## Credits
    ${creditsArr
        .map(({ name, link }) => {
            return `
    * ${name} ${link}`;
        })
        .join('')}  
    `;
};

module.exports = fullProjectData => {
    const { title, description, installation, usage, credits } = fullProjectData;

    return `
    # ${title}


    ## Description

    ${description}
    
    ${generateInstallation(installation)} 
    ${generateUsage(usage)} 
    ${generateCredits(credits)}
    `;
};