import React from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import { Link } from 'react-router-dom';

export default function Hero({
  title,
  subTitle,
  imgUrl,
  videoBtnText,
  videoUrl,
  btnText,
  btnUrl,
}) {
  return (
    <section className="cs_hero cs_style_1">
      <div className="cs_hero_wrap cs_bg_filed">
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="blue_color cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="text_color cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
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

          {/* New Form Section */}
          <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15 d-flex align-items-center justify-content-evenly">
            <h1 className="blue_color">Locate Us</h1>

            <div className="d-flex align-items-center w-full justify-content-center" style={{ flexGrow: 1 }}>
              <form className="d-flex" role="search" style={{width:'80%'}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn blue_color" style={{border:'2px solid '}} type="submit">Search</button>
              </form>
            </div>
          </div>

          {/* End Form Section */}

        </div>
      </div>
    </section>
  );
}
