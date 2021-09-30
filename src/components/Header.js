/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="tesla logo" />

            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />

                
            </RightMenu>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
top:0;
left:0;
right:0;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
}
@media(max-width: 768px){
    display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`