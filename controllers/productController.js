




module.exports.getAllProducts = (req, res) => {
  // console.log(req.params);
  //console.log(req.query);
  return res.status(200).json(
    {

      "idMeal": "52771",
      "strMeal": "Spicy Arrabiata Penne",
      "strDrinkAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "Italian",
    }
  );
}