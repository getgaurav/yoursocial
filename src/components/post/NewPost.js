import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FcVideoCall, FcStackOfPhotos, RiEmotionFill } from 'react-icons/all';
import { Button } from '@material-ui/core';

export default function NewPost() {

    const userName = "Guest";


    return (
        <Wrapper>
            <AddPost>
                <AddPostBtn>
                    <NavLink to="profile"><UserPic><img src="https://source.unsplash.com/random/100x100" alt={userName}/></UserPic></NavLink>
                    <span>What's on your mind, {userName}? </span>
                </AddPostBtn>
                <Line/>
                <MoreOptions>
                    <UploadBtn><FcVideoCall size={28}/><div>Live Video</div></UploadBtn>
                    <UploadBtn><FcStackOfPhotos size={28}/><div>Photos/Video</div></UploadBtn>
                    <File type="file" multiple accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"/>
                    <UploadBtn><RiEmotionFill size={28} color="#45bd62"/><div>Feeling/Activity</div></UploadBtn>
                </MoreOptions>
            </AddPost>
        </Wrapper>

    )
};

const Wrapper = styled.div`
    width:500px;
    height:auto;
    margin:0 auto;
`;
const Line = styled.div`
    width:97%;
    height:1px;
    background-color:#dfdfdf;
    margin:auto;
`;
const AddPost = styled.div`
    width:500px;
    height:120px;
    background-color:#fff;
    border-radius:10px;
    padding:8px;
    box-shadow:0 1px 2px #00000033;
    display:flex;
    flex-direction:column;
`;
const AddPostBtn = styled.div`
    width:100%;
    height:50px;
    display:flex;
    padding:0 4px;
    align-items:center;
    justify-content:space-between;
    span{
        width:calc(100% - 56px);
        height:42px;
        border-radius:50px;
        background-color:#f0f2f5;
        padding:12px 20px;
        color:#777;
        cursor: pointer;
        transition:all 0.2s;
    }
    span:hover{
        background-color:rgba(0, 0, 0, 0.1);
    }
`;
const MoreOptions = styled.div`
    width:100%;
    height:40px;
    padding:0 6px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const UserPic = styled.div`
    width:46px;
    height:46px;
    border-radius:100%;
    overflow:hidden;
    img{
        width:46px;
        height:46px;
    }
`;
const File = styled.input`
    display:none;
`;
const UploadBtn = styled(Button)`
    border-radius:6px;
    text-transform:capitalize;
    div{
        margin-left:6px;
    }
`;
