import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderNode = (props) => {
        return (
            <div className=''>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <h1>Pickleball Finder</h1>
                    <div className=''>
                        <button className='btn btn-light rounded-pill'><Link to={`/courts`}>Explore</Link></button>
                    </div>
                </div>
            </div>
        )
}

export default HeaderNode;