import React, { Component } from 'react'
import Header4 from '../../Components/Header4';
import Footer from '../../Components/Footer'
import {Card, Typography} from '@mui/material'
import './home.css'

class Home extends Component{
    render(){
        return(
            <div id="site-wrapper">
                <Header4 />
                    <div id="page-content">
                        <div className='Home-banner'>
                            <Typography>
                                Everything you need to manage your HR processes
                            </Typography>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}


export default Home