
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <div>
            <Navbar className="navbar bg-light">
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav lead">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link px-3 active" aria-current="true">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="index.html" className="nav-link px-3 active" aria-current="true">Search</a>
                        </li>
                        <li className="nav-item">
                            <a href="index.html" className="nav-link px-3 active" aria-current="true">Design</a>
                        </li>
                        <li className="nav-item">
                            <a href="index.html" className="nav-link px-3 active" aria-current="true">Contact</a>
                        </li>
                    </ul>
                </div>

            </Navbar>
        </div>
    );
}
{/* <Router>
            <h2>{title}</h2>
            <nav>
                <Link to = "/" style={{textDecoration:'none',paddingLeft:100}} onClick={()=>changeTitle("Home")}>Home</Link>
                <Link to = {"/products/"+user} style={{textDecoration:'none',paddingLeft:100}} onClick={()=>changeTitle("Products")}>Products</Link>
                <Link to = "/cart" style={{textDecoration:'none',paddingLeft:100}} onClick={()=>changeTitle("Shopping Cart")}>Shopping Cart</Link>
                <Link to = "/login" style={{textDecoration:'none',paddingLeft:100}} onClick={()=>changeTitle("Login")}>Login</Link>
                <Link to = "/user" style={{textDecoration:'none',paddingLeft:100}}>{user}</Link>
            </nav>
            <Routes>
                <Route path = "/"/>
                <Route path = "/products/*" element = {<Products/>}/>
                <Route path = "/cart" element = {<Cart/>}></Route>
                <Route path = "/login" element = {<Login changeUser = {changeUser}/>}/>
            </Routes>
        </Router> */}