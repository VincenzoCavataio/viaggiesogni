import React, { Component } from 'react'
/* import { BrowserRouter as Link } from 'react-router-dom'; */
/* import './style.css' */
import NavMenuS from './NavMenuS'

export class NavMenu extends Component {
    render() {
        return (
            <NavMenuS>
                <div className="logo">
                    <img src={this.props.logo} alt={this.props.imgName} />
                </div>
                <nav>
                    <ul className='link_list'>
                        {
                            this.props.links.map((element, index) => {
                               return <li key={index}><a href={`http://localhost:3000/${element}`} >{element}</a></li>
                            })
                        }
                    </ul>
                </nav>
            </NavMenuS>
        )
    }
}

export default NavMenu
