import React, { useState } from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import FunFactSection from '../Section/FunFactSection';
import Section from '../Section';
import toast from 'react-hot-toast';

const funFactData = [
  { number: '50+', title: 'Operational Cities' },
  { number: '25,000', title: 'Satisfied Patients' },
  { number: '51,00,000', title: 'Sessions Completed' },
];

export default function Hero({
  title = '',
  subTitle = '',
  imgUrl,
  videoBtnText,
  videoUrl,
  btnText,
  btnUrl,
}) {
  return (
    <>
      <section className="cs_hero cs_style_1">
        <div className="cs_hero_wrap cs_bg_filed">
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="blue_color cs_hero_title cs_fs_94">
                {typeof title === 'string' ? parse(title) : ''}
              </h1>
              <p className="text_color cs_hero_subtitle cs_fs_20 cs_heading_color">
                {typeof subTitle === 'string' ? parse(subTitle) : ''}
              </p>
              <div className="cs_hero_btn_wrap ">
                <VideoModal
                  videoUrl={videoUrl}
                  videoBtnText={videoBtnText}
                  variant="cs_heading_color red_blue"
                />
              </div>
            </div>
            <img src={imgUrl} alt="Hero" className="cs_hero_img" />
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
    </>
  );
}
