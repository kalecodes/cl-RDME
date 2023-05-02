const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must provide a project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstructions',
            message: 'Would you like to include special instructions, for an "Installation" section?',
            default: true
        }, 
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
            when: ({ confirmInstructions }) => {
                if (confirmInstructions) {
                    return true
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include special instructions, for a "Usage" section?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions:',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }   
        },
        {
            type: 'confirm',
            name: 'creditConfirm',
            message: 'Would you like to add a credit to a collaborator, asset, tutorial, or other?',
            default: false
        }
    ]);
};

const promptCredit = projectData => {
    if (!projectData.credits) {
        projectData.credits =[];
    }

    console.log(`
=================
Add a New Credit
=================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the person or thing you would like to credit? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name/title to credit!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'linkConfirm',
            message: 'Would you like to include a link with this credit?',
            default: true
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please provide a link to the credit.',
            when: ({ linkConfirm }) => {
                if (linkConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddCredit',
            message: 'Would you like to add another credit?',
            default: false
        }
    ])
    .then(creditData => {
        projectData.credits.push(creditData);
        if (creditData.confirmAddCredit) {
            return promptCredit(projectData);
        } else {
            return projectData;
        }
    });
};

promptUser()
    .then(projectData => {
        if (projectData.creditConfirm) {
            return promptCredit(projectData);
        }
    })
    .then(projectData => {
        console.log(projectData, "inside third promise");
    });