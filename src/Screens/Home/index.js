import React, { Component } from 'react'
import Header4 from '../../Components/Header4';
import Footer from '../../Components/Footer'
import {Button} from '@mui/material'
import './home.css'

class Home extends Component{
    render(){
        return(
            <div id="site-wrapper">
                <Header4 className="home-header"/>
                    <div id="page-content">
                        <div className='Home-banner'>
                            <div className='home-banner-texts'>
                                <p className="home-banner-text">
                                    Everything you need to manage
                                </p>
                                <p className="home-banner-text">
                                    your <span style={{color:'#ff355e'}}>Admin processes</span>
                                </p>
                                <p className="home-banner-subtext">
                                    Spend less time doing administrative Admin tasks.
                                </p>
                                <Button className="getstart-btn" variant="contained" style={{backgroundColor:"#ff355e"}}>Get Started</Button>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}


export default Home