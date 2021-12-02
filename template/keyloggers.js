const keyloggers_template = (model) => {

    return `
        <!DOCTYPE html>
        <html>
            <head>
        
            </head>
            <body style={align: center}>
                <table>
                    <tr>
                        <td>Id<td>
                        <td>MAC<td>
                        <td>Date created<td>
                        <td>Conted</td>
                    </tr>
                    <tr>
                        ${
                            model.logs.map(i => `
                                    <td>${i.id}</td>
                                    <td>${i.macId}</id>
                                    <td>${i.dateCreated}</id>
                                    <td>${i.content}</id>
                                `)
                        }
                    </tr>
                </table>
            </body>
        </html>
    `;
};

module.exports = {keyloggers_template};
