import React from 'react'
import Menu from "./Menu"
import Logo from "./Logo"

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <Logo />
                Entete
                <Menu />
            </div>
        )
    }
}

export default Header;