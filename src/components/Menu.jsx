import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AuthContext } from "../components/AuthContext";


export default function Menu() {
    const { token, login, logout } = React.useContext(AuthContext);
    
    return(
        <MenuContainer data-test="menu">
            <Footer>
                <Link to="/habitos" data-test="habit-link" >
                    Hábitos
                </Link>

                <Link to="/hoje" data-test="today-link">
                    <Container>
                        <CircularProgressbar
                                    value={token.progress}
                                    maxValue={100}
                                    text={"Hoje"}
                                    background
                                    backgroundPadding={6}
                                    styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#ffffff",
                                    pathColor: "#ffffff",
                                    trailColor: "transparent"
                                    })}
                        />
                    </Container>

                </Link>

                <Link to="/historico" data-test="history-link">
                    Histórico
                </Link>
            </Footer>
        </MenuContainer>
    )  
}

const MenuContainer = styled.div` 
    width: 100%;
    height: 70px;
    bottom: 0px;
    left: 0px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
`
const Footer = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-left: 36px;
    margin-right: 31px;

    a{
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;    
    }    
`

const Container = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 50%;
    margin-bottom: 15px;
    overflow: hidden;  
`;