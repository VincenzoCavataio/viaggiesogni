import React, { Component } from "react";
/* import "./style.css"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import CarouselS from "./CarouselS";
import SlideS from "./SlideS";

export class Carousel extends Component {  
    constructor(props) {
        super(props)
    
        this.state = {
            current: 0
        }

        this.HandlePrevious = this.HandlePrevious.bind(this);
        this.HandelBefore = this.HandelBefore.bind(this);
    }


    HandlePrevious(){
        this.state.current === (this.props.imgs.length - 1) ? this.setState({current: 0}) : this.setState({current: (this.state.current + 1)});
        console.log();
    }

    HandelBefore(){
        this.state.current === 0 ? this.setState({current: this.props.imgs.length - 1}) : this.setState({current: (this.state.current - 1)});
    }
    

  render() {
    return (
      <CarouselS >
        <div className="slideShow">
          <div className="arrow_container">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} onClick={this.HandelBefore}/>
          </div>
          {this.props.imgs.map((element, index) => {
            return (
              <SlideS className={index === this.state.current ? "active" : ""} key={index}>
                <img src={element.img} alt="" />
                <div className="img_info">
                  <h3 className="slide_title">{element.title}</h3>
                  <p className="slide_description">{element.description}</p>
                  <a>{this.props.link}</a>
                </div>
              </SlideS>
            );
          })}
          <div className="arrow_container">
            <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={this.HandlePrevious}/>
          </div>
        </div>
      </CarouselS>
    );
  }
}

export default Carousel;
