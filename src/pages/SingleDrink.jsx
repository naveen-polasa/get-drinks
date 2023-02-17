import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState(null);

  const fetchSingleDrink = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${id}`);
      const { drinks } = await response.json();
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newDrink = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setDrink(newDrink);
      } else {
        setDrink(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleDrink();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!drink) {
    return <h2 className="text-3xl m-12">Oops! No drink found</h2>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    drink;

  return (
    <section className="w-[80%] lg:w-[66%] mx-auto text-center">
      <h2 className="text-3xl my-5">{name} </h2>
      <div className="lg:flex items-center">
        <div className="w-96 mx-auto my-6 ">
          <img src={image} alt={name} className="" />
        </div>
        <div className="text-xl m-2 text-start flex flex-col gap-6 mx-12 w-[50%]">
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Name:
            </span>
            {name}
          </p>
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Category:
            </span>
            {category}
          </p>
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Info:
            </span>
            {info}
          </p>
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Glass:
            </span>
            {glass}
          </p>
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Instructions:
            </span>
            {instructions}
          </p>
          <p>
            <span className="bg-lime-200 rounded-md px-1 font-semibold mr-3">
              Ingredients:
            </span>
            {ingredients.map((item, index) => {
              return item && <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
      <Link to="/">
        <p className="mx-auto m-1 p-2 border text-center w-fit  rounded-lg bg-gray-600  hover:bg-orange-400 hover:scale-110 duration-300 text-white my-4">
          Back To Home
        </p>
      </Link>
    </section>
  );
};

export default SingleCocktail;
