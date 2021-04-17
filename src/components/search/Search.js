import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/all';







export default function Search() {

    const [searchValue, setSearchValue] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
    const formRef = useRef(null);
    const inputRef = useRef(null);

    const toggleSearch = (e) => {
        if(e.target === inputRef.current || e.target === formRef.current){
            setOpenSearch(true)
            document.addEventListener('click', toggleSearch, false)
        }else{
            document.removeEventListener('click', toggleSearch)
            setOpenSearch(false)
        }
    }
    
    const Search = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <>
            <Clearfix/>
        <Wrapper openSearch={openSearch}>
            <Form onClick={toggleSearch} openSearch={openSearch} ref={formRef} onSubmit={(e)=>{e.preventDefault();}}>
                <span><BiSearch size={24} /></span>
                <input type="text" value={searchValue} placeholder="Search yoursocial" onChange={Search} ref={inputRef}/>
            </Form>
            {openSearch ? <SearchReSult></SearchReSult> : null}
        </Wrapper>
        </>

    )
};

const Wrapper = styled.div`
    width:228px;
    height:56px;
    display:flex;
    align-items:center;
    background-color:#fff;
    margin-left:4px;
    transition:all 0.3s;
    @media (max-width:1170px){
        width:${({openSearch}) => !openSearch ? '40px':'228px'};
        position:absolute;
        left:72px;

    }
`;
const Clearfix = styled.div`
    width:228px;
    height:auto;
    margin-left:4px;
    transition:all 0.3s;
    @media (max-width:1170px){
        width:40px;

    }
`;
const Form = styled.form`
    transition:all 0.3s;
    width:100%;
    height:40px;
    border-radius:100px;
    overflow:hidden;
    display:flex;
    position:relative;
    z-index:7;
    background-color:${({openSearch}) => !openSearch ? '#dfdfdf31':'#fff'};
    box-shadow:${({openSearch}) => !openSearch ? '':'0 1px 12px -4px #00000133'};
    input{
        width:220px;
        height:40px;
        border:none;
        background:none;
        padding:8px;
        padding-left:40px;
        font-size:15px;
        position:static;
        z-index:10;
        @media (max-width:1170px){
            cursor: pointer;
        }
    }
    span{
        width:40px;
        height:40px;
        background:none;
        border:none;
        cursor: pointer;
        color:#666;
        padding:8px;
        position:absolute;
        z-index:9;
    }
`;
const SearchReSult = styled.div`
    width:300px;
    min-height:80px;
    position:absolute;
    background-color:#fff;
    left:4px;
    top:58px;
    padding:10px;
    border-radius:10px;
    box-shadow:0 2px 12px -2px #00000133;
    @media (max-width:1170px){
        left:-70px;
    }
`;