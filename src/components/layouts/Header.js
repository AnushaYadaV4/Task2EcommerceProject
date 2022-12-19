import "./Header.css";
import HeaderCartButton from "./HeaderButton";


const Header = (props) => {
  return (
    <div>
      <div className="flex shopping-card">
        <span>HOME</span>
        <span>STORE</span>
        <span>ABOUT</span>

        <HeaderCartButton onClick={props.onShowCart}/>
        <br />
      </div>

      <div className="generics generics-text">The Generics</div>
    </div>
  )
};

export default Header;
