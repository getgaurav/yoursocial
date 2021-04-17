import { Button } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FriendsIcon from '../../assets/images/FriendsIcon.png';
import covid19 from '../../assets/images/covid19.png';
import films from '../../assets/images/films.png';
import weather from '../../assets/images/weather.png';
import watch from '../../assets/images/watch.png';
import game from '../../assets/images/game.png';
import groups from '../../assets/images/groups.png';
import marketplace from '../../assets/images/marketplace.png';
import gamingvideo from '../../assets/images/gaming-video.png';
import jobs from '../../assets/images/jobs.png';
import memories from '../../assets/images/memo.png';
import offers from '../../assets/images/offers.png';





export default function LeftSidebar() {

    return (
        <Wrapper>
            <User>
                <NavLinkStyle to="/profile">
                    <Button><UserPic></UserPic>Guest Mode</Button>
                </NavLinkStyle>
            </User>
            <List>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={covid19} alt="Friends"/><span style={{marginLeft:'10px'}}>COVID-19 Information Centre</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={FriendsIcon} alt="Friends"/><span style={{marginLeft:'10px'}}>Find Friends</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={weather} alt="Weather"/><span style={{marginLeft:'10px'}}>Weather</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={films} alt="Flims"/><span style={{marginLeft:'10px'}}>Films</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={watch} alt="Watch"/><span style={{marginLeft:'10px'}}>Watch</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={game} alt="Game"/><span style={{marginLeft:'10px'}}>Game</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/gaming-video">
                        <Button><img src={gamingvideo} alt="Gaming video"/><span style={{marginLeft:'10px'}}>Gaming video</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={groups} alt="Groups"/><span style={{marginLeft:'10px'}}>Groups</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={marketplace} alt="Marketplace"/><span style={{marginLeft:'10px'}}>Marketplace</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={jobs} alt="Jobs"/><span style={{marginLeft:'10px'}}>Jobs</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={memories} alt="Memories"/><span style={{marginLeft:'10px'}}>Memories</span></Button>
                    </NavLinkStyle>
                </ListItems>
                <ListItems>
                    <NavLinkStyle to="/">
                        <Button><img src={offers} alt="Offers"/><span style={{marginLeft:'10px'}}>Offers</span></Button>
                    </NavLinkStyle>
                </ListItems>
                
            </List>
        </Wrapper>
    )
};


// Styled components


const Wrapper = styled.div`
    width:302px;
    min-width:320px;
    height:calc(100vh - 56px);
    padding:10px;
    overflow-y:scroll;
    position:sticky;
    top:56px;
    left:0;
    display:flex;
    flex-direction:column;
    transition:all 0.3s;
    ::-webkit-scrollbar-thumb{
        background-color:transparent;
    }
    &:hover::-webkit-scrollbar-thumb{
        background-color:#ced0d4;
    }
`;

const User = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
`;
const NavLinkStyle = styled(NavLink)`
    height:auto;
    width:100%;
    button{
        border-radius:6px;
        width:100%;
        height:46px;
        display:flex;
        align-items:center;
        justify-content:start;
        padding:0 10px;
        text-transform:capitalize;
        font-size:.9375rem;
    }
    img{
        width:30px;
    }
`;

const UserPic = styled.div`
    width:34px;
    height:34px;
    border-radius:100%;
    margin-right:6px;
    background-image:url('https://source.unsplash.com/random/100x100');
    background-size:cover;
    background-repeat:no-repeat;
`;
const List = styled.ul`
    width:100%;
    height:auto;
    list-style-type:none;
    padding:0;
`;
const ListItems = styled.li`
    width:100%;
    height:46px;
    /* margin-top:8px; */
    overflow:hidden;
`;