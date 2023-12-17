function MealItem({ meal, onAddToCart }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal && meal.name}</h3>
        <div>
          <span className="meal-item-price">${meal && meal.price}</span>
        </div>
        <p className="meal-item-description">{meal && meal.description}</p>
        <p>
          <button
            className="button meal-item-action"
            onClick={() => onAddToCart(meal.id)}
          >
            Add to Cart
          </button>
        </p>
      </article>
    </div>
  );
}

export default MealItem;
