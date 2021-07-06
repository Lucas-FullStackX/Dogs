class MoldelCrud {
  constructor(model) {
    this.model = model;
  }
  getById = (req, res, next) => {
    return this.model
      .findAll()
      .then((d) => res.send(d))
      .catch((err) => next(err));
    /* res.send("Muy bien, lo arreglaste 🥳"); */
  };
  addDog = (req, res, next) => {
    const body = req.body;
    return this.model
      .create({
        ...body,
      })
      .then((d) => res.send(d))
      .catch((err) => next(err));
  };
  found = (req, res, next) => {
    const { name } = req.query;
    this.model
      .findByPk(name)
      .then((name) => (name ? res.json(name) : res.sendStatus(404)))
      .catch((error) => next(error));
  };
}

module.exports = MoldelCrud;
