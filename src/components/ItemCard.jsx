import "../styles/itemCard.css";
function ItemCard({ title, subtitle, handleClick }) {
  return (
    <li className="item-card" onClick={handleClick}>
      <div className="item-title">{title}</div>
      {subtitle && <div className="item-subtitle">{subtitle}</div>}
    </li>
  );
}

export default ItemCard;
