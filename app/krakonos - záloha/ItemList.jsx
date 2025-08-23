export default function ItemList({mealList}) {

  return (
    <div className="item-list">
      {mealList?.map((item, index) => (
        <div key={index} className="item">
          <img src={item.img} alt={item.title} className="item-img" />
          <div className="item-title">{item.title}</div>
          <div className="item-price">{item.price}</div>
        </div>
      ))}
    </div>
  );
}
