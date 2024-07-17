import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Event 서버로부터 이미지 받아와서 해당 컨텐츠 보여주기
export default class PauseOnHover extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <EventLayout>
        {/* <div>Promotion</div> */}
        <Slider {...settings}>
          <ImgBanner>
            <h3>promotion slide 1</h3>
          </ImgBanner>
          <ImgBanner>
            <h3>promotion slide 2</h3>
          </ImgBanner>
          <ImgBanner>
            <h3>promotion slide 3</h3>
          </ImgBanner>
          <ImgBanner>
            <h3>promotion slide 4</h3>
          </ImgBanner>
          <ImgBanner>
            <h3>promotion slide 5</h3>
          </ImgBanner>
          <ImgBanner>
            <h3>promotion slide 6</h3>
          </ImgBanner>
        </Slider>
      </EventLayout>
    );
  }
}

const EventLayout = styled.div`
  color: #000;
  padding: 2rem;
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
`;
const ImgBanner = styled.div`
  height: 14rem;
`;
