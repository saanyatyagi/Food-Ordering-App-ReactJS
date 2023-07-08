import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Baked Goods, Deliverd To Your Doorstep!</h2>
      <p>
        Choose your favourite items from our broad selection of available items
        and enjoy a delicious sweet dish at home!
      </p>
      <p>
        All items are baked fresh, using high-quality ingredients, by the best
        bakers in town!
      </p>
    </section>
  );
};

export default MealsSummary;
