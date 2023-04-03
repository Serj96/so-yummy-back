const { asyncWrapper, responseData } = require("../helpers/apiHelpers");
const { popularRecipes: service } = require("../services");

const popularRecipes = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  limit = +limit > 50 ? 50 : +limit;
  const recipes = await service.get(page, limit);
  res.json(
    responseData(
      {
        ...recipes,
      },
      200
    )
  );
};

module.exports = {
  getRecipes: asyncWrapper(popularRecipes),
};