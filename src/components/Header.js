/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false)
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
                <CustomMenu onClick={() => setBurgerOpen(true)}/>

                
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerOpen(false)}/>
                </CloseWrapper>
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">PowerWall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilties</a></li>
                <li><a href="#">Find us</a></li>
                <li><a href="#">Suport</a></li>
                <li><a href="#">Investor relations</a></li>
            </BurgerNav>
            
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
justify-content: space-between;
align-items: center;
padding: 0 20px;
z-index: 1;
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
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
padding: 30px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transfrom 0.3s ease-in-out;
li{
    list-style: none;
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
a{
    text-decoration: none;
    font-weight: 600;

}
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`