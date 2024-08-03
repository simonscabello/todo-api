class Transformer {
  transform(item) {
    return item;
  }

  transformCollection(items) {
    return items.map(this.transform);
  }
}

module.exports = Transformer;