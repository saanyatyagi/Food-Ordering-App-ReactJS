import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const dummy_meals = [
  {
    id: "m1",
    name: "Cupcakes",
    description: "Delightful, bight-sized cakes!",
    price: 99,
  },
  {
    id: "m2",
    name: "Brownies",
    description: "Fudgy, chocolatey brownies",
    price: 110,
  },
  {
    id: "m3",
    name: "Cookies",
    description: "Crispy and mouth-melting",
    price: 50,
  },
  {
    id: "m4",
    name: "Croissants",
    description: "As fresh as the ones in France!",
    price: 150,
  },
];

const AvailableMeals = () => {
  const mealsList = dummy_meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
