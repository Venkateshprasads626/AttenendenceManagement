import react,{ Component } from 'react'
import { render } from 'react-dom'
import AssignFaculty from '../../Components/AssignFaculty';


class Faculty extends Component{
    render(){
        return(
            <div>
                Hello
                <AssignFaculty />
            </div>
        );
    }
}

export default Faculty