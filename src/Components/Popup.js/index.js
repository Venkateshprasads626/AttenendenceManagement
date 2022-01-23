import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';


export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    return(
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>
                    Add New User
                </div> 
            </DialogTitle>
            <DialogContent>
                <div>
                    Hello
                </div>
            </DialogContent>
        </Dialog>  
    )
}