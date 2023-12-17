import logo from "../assets/logo.jpg";

function Header({ cart, onShowCart }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>reactfood</h1>
      </div>
      <button className="text-button" onClick={onShowCart}>
        Cart ({cart.length})
      </button>
    </div>
  );
}

export default Header;
