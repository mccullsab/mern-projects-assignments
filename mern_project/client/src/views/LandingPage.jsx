import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

import HeaderNode from '../components/HeaderNode';


const LangingPage = () => {
    const nav = useNavigate();
    return (
        <div>
            <div className='p-2'>
            <HeaderNode />
            </div>
            <img src="https://usapickleball.org/wp-content/uploads/2020/07/pickleball-court-bg.jpg" alt="" className=''/>
        </div>
    )
}

export default LangingPage;