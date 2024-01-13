import React, { useState } from "react";
import "./card.scss";
import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import Test from "../../Test";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [count,setCount] = useState(0)
  const getCount=(num)=>{
   setCount(num)
  }
  return (
    <div className="card">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <p>Modal text...</p>
            <Test onCount={getCount}/>
            </div>
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
          </div>
        </div>
      )}
      <div className="top">
        <div className="user">
          <img src={img1} alt="" />
          <h3>Clint Name</h3>
        </div>
        <div className="user">
          <img src={img1} alt="" />
          <h3>Sadik Istiak</h3>
        </div>
      </div>
      <div className="center">
        <div className="text">
          <i class="fas fa-bars"></i>
          <p>Lorem ipsum, dolor sit amet conse..</p>
        </div>
        <div className="coin">
          <i class="far fa-list-alt"></i>
          <span>1/2</span>
        </div>
      </div>
      <div className="bottom">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <span className="num">12+</span>
        <div>
          <i class="fas fa-comments-dollar"></i>
          <span>15</span>
        </div>
        <div>
          <button style={{border:"none",outline:"none",cursor:'pointer'}} onClick={() => setShowModal(!showModal)}>
            <i class="fas fa-paperclip" ></i>
          </button>

          <span>{count}</span>
        </div>
        <div>
          <i class="fas fa-calendar-alt"></i>
          <span>30-12-2022</span>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Card;
