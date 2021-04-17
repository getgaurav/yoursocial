import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/sidebar/LeftSidebar';
import RightSidebar from '../components/sidebar/RightSidebar';
import Stories from '../components/stories/Stories';
import NewPost from '../components/post/NewPost';
import Feed from '../components/feed/Feed';

export default function Home() {

    const [lsidebar, setLsidebar] = useState(()=>{if(window.innerWidth <= 1170){return true}else{ return false}});
    const [rsidebar, setRsidebar] = useState(()=>{if(window.innerWidth <= 900){return true}else{ return false}});

    const toggleLsidebar = () =>{
        if(window.innerWidth <= 1170){
            setLsidebar(true);
        }else {
            setLsidebar(false);
        }
       
    }

    const toggleRsidebar = () =>{
        if(window.innerWidth <= 900){
            setRsidebar(true);
        }else {
            setRsidebar(false);
        }
       
    }

    useEffect(()=>{
        window.addEventListener('resize', toggleLsidebar);
        return ()=>window.removeEventListener('resize', toggleLsidebar);
    },[])

    useEffect(()=>{
        window.addEventListener('resize', toggleRsidebar);
        return ()=>window.removeEventListener('resize', toggleRsidebar);
    },[])

    

    return (
        <Wrapper>
            {!lsidebar? <LeftSidebar />: ''}
            <Main>
                <Stories />
                <NewPost />
                <Feed src="https://source.unsplash.com/random?mountant" />
                <Feed src="https://source.unsplash.com/random?water" />
                <Feed src="https://source.unsplash.com/random?road" />
                <Feed src="https://source.unsplash.com/random?bike" />
                <Feed src="https://source.unsplash.com/random?car" />
                <Feed src="https://source.unsplash.com/random?river" />
                <Feed src="https://source.unsplash.com/random?tree" />
                <Feed src="https://source.unsplash.com/random?clouds" />
                <Feed src="https://source.unsplash.com/random" />
                <Feed src="https://source.unsplash.com/random?night" />

            </Main>
            {!rsidebar? <RightSidebar />: ''}
         

        </Wrapper>
    )
};


// styled components

const Wrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:space-between;
`;

const Main = styled.div`
    width:calc(100% - 604px);
    min-width:540px;
    height:auto;
    padding:14px 20px 0px 20px;
    display:flex;
    flex-direction:column;
    @media (max-width:1170px){
        width:calc(100% - 302px); 
    }
    @media (max-width:900px){
        width:100%;
    }
`;


