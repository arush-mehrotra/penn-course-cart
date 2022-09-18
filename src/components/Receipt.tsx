import { useParams } from "react-router-dom";
import UPenn from "../upenn.png";
import '../App.css';

// Receiving the URL parameters

const Receipt = () => {
    const {course1, course2, course3, course4, course5, course6, course7} = useParams();

    return (
        <div>
            <div className = "penn">
                <img src = {UPenn} width = "500"></img>
            </div>
            <div className = "receipt-list">
                <h4>RECEIPT</h4>
                <ul className = "no-bullets">
                    <li>{course1}</li>
                    <li>{course2}</li>
                    <li>{course3}</li>
                    <li>{course4}</li>
                    <li>{course5}</li>
                    <li>{course6}</li>
                    <li>{course7}</li>
                </ul>
            </div>
        </div>
    );
}
  
export default Receipt;