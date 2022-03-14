import React from "react";
import MinemationText from "./MinemationText/Minemationtext";

const CounterSection = ({ content }) => {
  return (
    <div className="home-counter">
      <div className="container">
        <div className="box1">
          <h5 className="text-box">
            <MinemationText
              text={content.counterTitle}
              animationName="fadeInUp"
              delay={200}
              duration={1000}
              overflowHidden
              scroll={true}
              windowHeight={90}
              scrollRepeat={false}
            />
          </h5>
        </div>
        <div className="box2">
          <p className="text-box">
            <MinemationText
              text={content.counterDesc}
              animationName="fadeInUp"
              delay={200}
              duration={1000}
              overflowHidden
              scroll={true}
              windowHeight={90}
              scrollRepeat={false}
            />
          </p>
        </div>
        <div className="box3">
          <div>
            <div className="num">
              <p className="text-box">
                <MinemationText
                  text={content.counterBox1Value + "+"}
                  animationName="fadeInUp"
                  delay={200}
                  duration={1000}
                  overflowHidden
                  scroll={true}
                  windowHeight={90}
                  scrollRepeat={false}
                />
              </p>
            </div>
            <p className="box-label text-box">
              <MinemationText
                text={content.counterBox1Label}
                animationName="fadeInUp"
                delay={200}
                duration={1000}
                overflowHidden
                scroll={true}
                windowHeight={90}
                scrollRepeat={false}
              />
            </p>
          </div>
        </div>
        <div className="box4">
          <div>
            <div className="num">
              <p className="text-box">
                <MinemationText
                  text={content.counterBox2Value + "+"}
                  animationName="fadeInUp"
                  delay={200}
                  duration={1000}
                  overflowHidden
                  scroll={true}
                  windowHeight={90}
                  scrollRepeat={false}
                />
              </p>
            </div>
            <p className="text-box">
              <MinemationText
                text={content.counterBox2Label}
                animationName="fadeInUp"
                delay={200}
                duration={1000}
                overflowHidden
                scroll={true}
                windowHeight={90}
                scrollRepeat={false}
              />
            </p>
          </div>
        </div>
        <div className="box5">
          <div>
            <div className="num">
              <p className="text-box">
                <MinemationText
                  text={
                    content.counterBox3Value + content.counterBoxLetter + "+"
                  }
                  animationName="fadeInUp"
                  delay={200}
                  duration={1000}
                  overflowHidden
                  scroll={true}
                  windowHeight={90}
                  scrollRepeat={false}
                />
              </p>
            </div>
            <p className="text-box">
              <MinemationText
                text={content.counterBox3Label}
                animationName="fadeInUp"
                delay={200}
                duration={1000}
                overflowHidden
                scroll={true}
                windowHeight={90}
                scrollRepeat={false}
              />
            </p>
          </div>
        </div>

        <div className="empty"></div>
      </div>
    </div>
  );
};

export default CounterSection;
