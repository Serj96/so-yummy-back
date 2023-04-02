const { ingredients: service } = require("../services");
const { asyncWrapper, responseData } = require("../helpers/apiHelpers");

const getRecipeByIngredientController = async (req, res) => {
  const { value } = req.query;
  const ingredients = await service.getRecipeByIngredient(value);

  res.status(200).json(
    responseData(
      {
        ingredients,
      },
      200
    )
  );
};

module.exports = {
  getRecipeByIngredientController: asyncWrapper(
    getRecipeByIngredientController
  ),
};
