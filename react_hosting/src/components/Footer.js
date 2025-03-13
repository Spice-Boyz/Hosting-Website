import React from 'react'
class Footer extends React.Component{
    render(){
        return(
            <footer>
            <div class = "footer-container">
                <div class = "footer-contactus">
                    <h3>CONTACT US: </h3>
                    <p>
                        <a href = "mailto:spiceboyz0198@gmail.com">spiceboyz0198@gmail.com</a>
                    </p>
                </div>
    
                <div class = "footer-followus">
                    <h3>FOLLOW US:</h3>
                    <p><a href="https://www.instagram.com/spiceboyz._" target="_blank">
                        <i class="fab fa-instagram"></i></a></p>
                </div>
    
    
            </div>
        </footer>
        );
    }
}
export default Footer; 