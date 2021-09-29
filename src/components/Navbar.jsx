import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';

const Navbar = ({comments}) => {
    const[sidebar,setSidebar]=useState(false)
    const[isMobile,setIsMobile]=useState(false)
    useEffect(()=>{
        window.addEventListener("resize",handleResize())
    })
    const handleResize =()=>{
        if(window.innerWidth < 700){
            
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }
    const showSideBar =()=>{
        sidebar? setSidebar(false):setSidebar(true)
        console.log(sidebar);
    }
    return (
        <div>
            {isMobile ? 
            <div>
                <p onClick={showSideBar} className={!sidebar? "arrowRight":"arrowRightClicked"}><FontAwesomeIcon icon="arrow-circle-right" /></p>
                <ul className={!sidebar ? "sidbarhidden" : "sidbarShow"}>
                    <li id="home"><a href=""><FontAwesomeIcon icon="home" /></a></li>
                    <li><a href="" id="message"><FontAwesomeIcon icon="comment" /><span>{comments.length}</span></a></li>
                    <li id="profile"><a href=""><FontAwesomeIcon icon="user-alt" /></a></li>
                    <li id="exit"><a href=""><FontAwesomeIcon icon="sign-in-alt" /></a></li>
                </ul>
            </div>
            :
                
            <div>
                <ul className="navbar">
                    <li id="home"><a href=""><FontAwesomeIcon icon="home" /></a></li>
                    <li><a href="" id="message"><FontAwesomeIcon icon="comment" /><span>{comments.length}</span></a></li>
                    <li id="profile"><a href=""><FontAwesomeIcon icon="user-alt" /></a></li>
                    <li id="exit"><a href=""><FontAwesomeIcon icon="sign-in-alt" /></a></li>
                </ul>
            </div>
        } 
            
            
        </div>
     );
}
 
export default Navbar;