import Banner from "./assets/Banner.jpg";
import "./Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import { InsertEmoticon } from "@mui/icons-material";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <div className="cart">
        <div className="cart_left">
          <div>
            <h2 className="cart_title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CartProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="cart_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
