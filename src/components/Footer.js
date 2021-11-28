import React from "react";

class Footer extends React.Component{
    render(){
        return (
            // -- Footer -
            <footer class="footerHeader">
            <br /><br />
            <div class="row text-center textColor">
                <p>Copyright &copy; tech villain</p>
            </div>
            <br />

            <div class="row text-center">
                <div class="col" >
                    <a class="m-3" target="_blank" 
                    href="http://mahmudjewel.herokuapp.com">
                    <i class="fas fa-user-circle fa-2x"></i>
                    </a>

                    <a class="m-3" target="_blank" 
                    href="https://www.facebook.com/TechVillain.007">
                    <i class="fab fa-facebook fa-2x"></i>
                    </a>

                    <a class="m-3" target="_blank" 
                    href="https://www.youtube.com/channel/UCJCdq7lWqB7M5b16UatoTEw">
                    <i class="fab fa-youtube fa-2x"></i>
                    </a>

                    <a class="m-3" target="_blank" 
                    href="https://www.linkedin.com/in/mahmudjewel">
                    <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
               
              </div>
            <br /><br /><br /><br /><br /><br />
  </footer>
        );
    }
}
export default Footer;