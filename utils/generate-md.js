const fs = require('fs');

module.exports = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "README.md file created! Find it in the 'dist' folder."
            });
        });
    });
};

