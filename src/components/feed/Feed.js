import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike, BiComment, RiShareForwardLine, FaUserCircle} from 'react-icons/all';

export default function Feed(props) {


    return (
        <Wrapper>
            <Feeds>
                <PostInfo>
                <Avatar><FaUserCircle size={48} color="#999"/></Avatar>
                <Title>
                        <h4>Guest</h4>
                        <p>1 Hr.</p>
                    </Title>
                </PostInfo>
                    <Text>
                        @getgaurav | GitHub
                    </Text>
                    <PostContent>
                        <img src={props.src} alt="content"/>
                    </PostContent>
                    <Intract>
                        <Button><AiOutlineLike size={24}/><div>Like</div></Button>
                        <Button><BiComment size={22}/><div>Comment</div></Button>
                        <Button><RiShareForwardLine size={24}/><div>Share</div></Button>
                    </Intract>
            </Feeds>
        </Wrapper>
    )
};

//  styled components 

const Wrapper = styled.div`
    width:500px;
    height:auto;
    min-height:100px;
    margin:0 auto;
    margin-top:10px;
    margin-bottom:18px;
`;
const Feeds = styled.div`
    width:100%;
    min-height:300px;
    height:auto;
    background-color:#fff;
    border-radius:10px;
    box-shadow:0 1px 2px #00000033;
    margin-top:10px;
    padding-bottom:10px;
`;
const PostInfo = styled.div`
    width:100%;
    height:66px;
    padding:10px;
    display:flex;
    align-items:center;
`;
const Avatar = styled.div`
    width:46px;
    height:46px;
    border-radius:100%;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:46px;
        height:46px;
    }
`;
const Title = styled.div`
    width:auto;
    height:auto;
    margin-left:6px;
    h4{
        font-weight:500;
    }
    p{
        font-size:14px;
        color:#666;
    }
`;
const Text = styled.div`
    width:100%;
    height:auto;
    max-height:60px;
    padding:0 18px;
    font-size:15px;
    padding-bottom:10px;
`;
const PostContent = styled.div`
    width:100%;
    height:auto;  
    overflow:hidden;
    object-fit:content;
    img{
        width:100%;
        height:calc(auto - 4px);
    }
`;
const Intract = styled.div`
    width:96%;
    height:44px;
    display:flex;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
    padding:4px 0;
    border-bottom:1px solid #ccc;
    button{
        width:38%;
        display:flex;
        align-items:center;
        padding:0;
        height:34px;
        text-transform:capitalize;
        color:#666;
    }
    div{
        margin-left:8px;
        font-size:16px;
    }
`;
