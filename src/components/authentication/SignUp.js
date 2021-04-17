import React, { useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export default function SignUp({ onClose }) {
    // Geting input values using UseState

    const today = new Date();

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [newpass, setNewPass] = useState("");
    // Date of Birth 
    const [day, setDay] = useState(today.getDate("") - 1);
    const [month, setMonth] = useState(today.getMonth("") + 1);
    const [year, setYear] = useState(today.getFullYear(""));
    // Gender
    const [gender, setGender] = useState("Gender");


    // function for validating and Submiting SignUp Form


    const SubmitSignup = (e) => {
        e.preventDefault();
        const userData = {
            fname:firstName,
            sname:surname,
            email:email,
            pass:newpass,
            dob:`${day},${month},${year}`,
            gender:gender
        }
        console.log(userData)

    }



    return (
        <SignUpPage>
            <SignUpForm>
                <Heading>
                    <h1>Sign Up</h1>
                    <span>It's quick and easy.</span>
                    <CloseForm onClick={onClose}>
                        <CgClose size={24} strokeWidth={1} />
                    </CloseForm>
                </Heading>
                <Form onSubmit={SubmitSignup} method="POST">
                    <Name>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </Name>
                    <Email>
                        <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Email>
                    <Password>
                        <input
                            type="password"
                            name="passowrd"
                            placeholder="New Password"
                            value={newpass}
                            autoComplete="on"
                            onChange={(e) => setNewPass(e.target.value)}
                            required
                        />
                    </Password>
                    <DOB>
                        <Label>Date of birth</Label>
                        <Option>
                            <span>
                                <select
                                    aria-label="Day"
                                    name="birthday_day"
                                    title="Day"
                                    required
                                    value={day}
                                    onChange={e => setDay(e.target.value)}
                                >
                                    <option value="0">Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select
                                    aria-label="Month"
                                    name="birthday_month"
                                    title="Month"
                                    required
                                    value={month}
                                    onChange={e => setMonth(e.target.value)}

                                >
                                    <option value="0">Month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <select
                                    aria-label="Year"
                                    name="birthday_year"
                                    title="Year"
                                    required
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                >
                                    <option value="0">Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                    <option value="1919">1919</option>
                                    <option value="1918">1918</option>
                                    <option value="1917">1917</option>
                                    <option value="1916">1916</option>
                                    <option value="1915">1915</option>
                                    <option value="1914">1914</option>
                                    <option value="1913">1913</option>
                                    <option value="1912">1912</option>
                                    <option value="1911">1911</option>
                                    <option value="1910">1910</option>
                                    <option value="1909">1909</option>
                                    <option value="1908">1908</option>
                                    <option value="1907">1907</option>
                                    <option value="1906">1906</option>
                                    <option value="1905">1905</option>
                                </select>
                            </span>
                        </Option>
                    </DOB>
                    <Gender>
                        <Label>Gender</Label>
                        <Option>
                            <span>
                                <Radio ><span>Female</span><input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)} /></Radio>
                                <Radio ><span>Male</span><input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)} /></Radio>
                                <Radio ><span>Other</span><input type="radio" name="gender" value="other" onChange={e=>setGender(e.target.value)} /></Radio>
                            </span>
                        </Option>
                    </Gender>
                    <SubmitButton>
                        <Submit>Sign Up</Submit>
                    </SubmitButton>
                </Form>
            </SignUpForm>
        </SignUpPage>
    );
}


// Styled components

const SignUpPage = styled.div`
  width: 100%;
  min-height: 555px;
  height: 100vh;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpForm = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 432px;
  height: 495px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;
const Heading = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 14px;
  border-bottom: 1px solid #ccc;
  h1 {
    font-size: 34px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    color: #444;
  }
`;
const CloseForm = styled.div`
  color: #606771;
  float: right;
  position: relative;
  top: -40px;
  cursor: pointer;
`;
const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 14px;
`;
const Name = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  input {
    width: 48%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #f5f6f7;
    padding: 10px;
  }
`;
const Email = styled(Name)`
  input {
    width: 100%;
  }
`;
const Password = styled(Email)``;
const DOB = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;
const Label = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #606771;
  margin-bottom: 4px;
  margin-top:6px;
`;

const Option = styled.div`
    width: 100%;
    height: 40px;
    span{display:flex;justify-content:space-between;}
    select{
        width:30%;
        height:40px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color:#fff;
        padding: 10px;
        cursor: pointer;
        appearance:none;
        background-image:none;
        font-size:16px;
        font-weight:400;
    }
`;
const Gender = styled.div`
    width:100%;
    height:auto;
    margin-bottom:10px;
`;
const Radio = styled.label`
    width:30%;
    height:40px;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid #ccc;
    border-radius:4px;
    cursor:pointer;
    input{
        float:right;
    }
`;
const SubmitButton = styled.div`
    width:100%;
    height:40px;
    margin-top:30px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Submit = styled.button`
    background-color: #00a400;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 36px;
    width:50%;
    overflow: hidden;
    padding: 0 32px;
    text-shadow: none;
    cursor:pointer;
    &:hover{
        background-image:linear-gradient(#79bc64, #578843);
    }
`;