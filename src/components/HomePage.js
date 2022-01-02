/* eslint-disable jsx-a11y/anchor-is-valid */
import { routes } from '../routes';


export const HomePage = (props) => {

    return (<div className='page-container'>
        <li className='candidatesLink' onClick={(e) => props.handlePageChange(routes.candidates.path)}><a href='#'>Candidates</a></li>
        <li className='aboutUsLink' onClick={(e) => props.handlePageChange(routes.aboutUs.path)}><a  href='#'>About Us</a></li>

    </div>)
}