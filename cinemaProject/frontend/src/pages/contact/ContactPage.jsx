import React from 'react';
import {
  ContactPageStyled,
  ContactUsStyle,
  ImageStyled,
  InfoStyle,
  MainTitleStyled,
} from './ContactPage.styled';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <MainTitleStyled>
        Contact Us
        <hr />
        <InfoStyle>
          <ContactUsStyle>
            <p>
              <FaLocationArrow /> Street: 1096 Broad Street
            </p>
            <p>
              <FaInstagram style={{ color: '#eb06d8', marginRight: '6px' }} />
              cinema_123
            </p>
            <p>
              <FaFacebook style={{ color: 'blue', marginRight: '6px' }} />
              Cinema123
            </p>
            <p>
              <FaPhone style={{ marginRight: '6px' }} />
              021 225 883
            </p>
            <p>
              <SiGmail style={{ color: '#fd0000c2', marginRight: '6px' }} />
              cinema.cinema@gmail.com
            </p>
          </ContactUsStyle>
        </InfoStyle>
      </MainTitleStyled>
      <ImageStyled>
        <img
          src={`${process.env.PUBLIC_URL}/cinema.png`}
          alt="cinema"
          loading="lazy"
        />
      </ImageStyled>
    </ContactPageStyled>
  );
};

export default ContactPage;
