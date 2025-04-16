import "../styles/itemCard.css";
function ItemCard({ title, subtitle }) {
  return (
    <li className="item-card">
      <div className="item-title">{title}</div>
      {subtitle && <div className="item-subtitle">{subtitle}</div>}
    </li>
  );
}

export default ItemCard;
