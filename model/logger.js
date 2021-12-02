function Logger(id, macId, dateCreated, content) {
    this.id = id;
    this.macId = macId;
    this.dateCreated = dateCreated;
    this.content = content;
}

module.exports = Logger;