const fs = require("fs");
const { TEMPLATE_URI } = require("../constant/contant");
const mvc = (model, templateName, callback) => {
    fs.readFile(TEMPLATE_URI + "/" + templateName, "utf8", (err, template) => {
        callback(eval('`' + template + '`'));
    })
}

module.exports = { mvc };