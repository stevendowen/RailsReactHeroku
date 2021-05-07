import React from 'react'
import { Container, Dropdown, Icon, Image, Input, Menu, Rail, Segment } from 'semantic-ui-react';
import logo from '../cashfreightlogo.png';

function Header() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{flexDirection: 'column'}}>
                    <Image src={logo} alt='CashfreightLogo' style={{marginRight: '10px', width: '200px', marginBottom: '5px   '}} />
                    Cashfreight.com
                </Menu.Item>
                <Menu.Item name='Home' />
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' style={{width: '600px'}} />
                </Menu.Item>
            </Container>
            <Icon inverted size='big' name='mail' style={{marginTop: '10px'}} />
            <Icon inverted size='big' name='bell' style={{marginTop: '10px'}} />
            <Dropdown icon={<Icon inverted name='bars' size='big'/>} pointing='top right' style={{height: '20px', marginTop: '10px'}}>
                <Dropdown.Menu>
                    <Dropdown.Item>Electronics</Dropdown.Item>
                    <Dropdown.Item>Automotive</Dropdown.Item>
                    <Dropdown.Item>Home</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    )
}

export default Header;