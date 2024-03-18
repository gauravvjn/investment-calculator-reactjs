import inv_img from "../assets/investment-calculator-logo.png";

export default function Header(){
    return (
    <header id="header">
        <img src={inv_img} alt="investment logo"/>
        <h1>Investment calculator</h1>
    </header>
    )
}
