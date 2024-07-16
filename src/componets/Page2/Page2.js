
import "./Page2.css";
import image1 from "../../Images/image1.png"
import image2 from "../../Images/image2.png"
import image3 from "../../Images/image3.png"
import image4 from "../../Images/image4.png"
const Page2 = () => {
  return(
        <div className="page2"> 
              <div>
                 <img src={image1} alt="image1" />
              </div>
              <div>
                 <img src={image2} alt="image2" />
              </div>
              <div>
                 <img src={image3} alt="image3" />
              </div>
              <div>
                 <img src={image4} alt="image4" />
              </div>
        </div>
      );
};

export default Page2;