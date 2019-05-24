import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { setTimeout } from "timers";
import MyButton from "../utils/MyButton";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <spam>Purchase Tickets before 20th JUNE</spam>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur deleniti laborum perferendis dolore eius, sequi
                quaerat harum iure! Soluta temporibus officiis magnam accusamus
                perspiciatis doloremque reiciendis repudiandae alias facere a?
              </p>
              <MyButton
                text="Purchase Ticket"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
