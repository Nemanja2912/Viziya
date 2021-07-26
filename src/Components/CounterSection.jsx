import React from "react";

const CounterSection = () => {
  return (
    <div className="home-counter">
      <div className="container">
        <div className="box1">
          <h5>Design inspired by you</h5>
        </div>
        <div className="box2">
          <p>
            This is the studio philosophy reflected in its motto and its name.
            Viziya.
          </p>
        </div>
        <div className="box3">
          <div>
            <p className="num">400+</p>
            <p>
              projects realized <br /> internationally
            </p>
          </div>
        </div>
        <div className="box4">
          <div>
            <p className="num">20+</p>
            <p>years of experience</p>
          </div>
        </div>
        <div className="box5">
          <div>
            <p className="num">99k+</p>
            <p>sq meters realized</p>
          </div>
        </div>

        <div className="empty"></div>
      </div>
    </div>
  );
};

export default CounterSection;
