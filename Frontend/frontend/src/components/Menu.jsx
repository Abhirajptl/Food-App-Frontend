import  { useState, useEffect } from "react";
import API from "../services/api";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await API.get("/menu");
      setMenuItems(response.data);
    };
    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;