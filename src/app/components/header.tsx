import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="header">
            <h1 className="logo">S. Jewellers</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/jewellery">Jewellery</Link>
                <Link href="/contact">Contact</Link>
                <FaCartShopping  style={{fontSize:"20px"}}/>
            </nav>
        </header>
    )
}