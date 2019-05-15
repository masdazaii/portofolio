import React,{Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'

import {Link} from "react-router-dom";


class MyAppBar extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <Segment inverted>
            <Menu inverted pointing secondary>
            <Link to='/home'>
            <Menu.Item 
                name='home' 
                active={activeItem === 'home'} 
                onClick={this.handleItemClick} />
            </Link>
            <Link to='/profile'>
            <Menu.Item
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
            />
             </Link>
             <Link to='/portofolio'>
            <Menu.Item
                name='portofolio'
                active={activeItem === 'portofolio'}
                onClick={this.handleItemClick}
            />
            </Link>
            <Link to='/contact'>
            <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
            />
            </Link>
            </Menu>
        </Segment>
        )
    }
}

export default MyAppBar;
