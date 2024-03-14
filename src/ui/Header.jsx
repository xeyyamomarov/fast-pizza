import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

const Header = () => {
  return (
    <header>
        <Link to="/" >Fast Pizza Co.</Link>
        <SearchOrder/>
        <p>Khayyam</p>
    </header>
  )
}

export default Header