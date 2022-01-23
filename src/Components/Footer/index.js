import { Toolbar, Typography } from '@mui/material';
import React,{Component} from 'react'
import './footer.css'


class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                <p className='copyright-text'> @copyright reserved By Venkatesh</p>
            </div>
        );
    }
}

export default Footer