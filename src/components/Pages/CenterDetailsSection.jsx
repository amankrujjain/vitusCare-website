import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import List from '../List';
import ListStyle3 from '../List/ListStyle3';
import ListStyle2 from '../List/ListStyle2';
import Spacing from '../Spacing';

export default function CenterDetailsSection({
  bgUrl,
  imgUrl,
  name,
  location,
  contactInfo,
  contactInfoHeading,
  services,
  servicesHeading,
  operatingHours,
  operatingHoursHeading,
  awards,
  awardsHeading,
  social,
}) {
  return (
    <div className="cs_center_details">
      <div
        className="cs_center_details_bg cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <Spacing md="85" />
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="cs_single_center overflow-hidden cs_radius_20">
              <img src={imgUrl} alt="Center" className="w-100" />
              <h3 className="cs_white_color cs_accent_bg mb-0 text-center cs_semibold cs_fs_24">
                {location}
              </h3>
            </div>
            <Spacing md="94" lg="60" />
            {/* Contact Info */}
            <ListStyle2
              heading={contactInfoHeading}
              iconUrl="/images/icons/contact.svg"
              data={contactInfo}
            />
            <Spacing md="66" lg="60" />
            {/* Operating Hours */}
            <ListStyle3
              heading={operatingHoursHeading}
              iconUrl="/images/icons/clock.svg"
              data={operatingHours}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 offset-lg-1 position-relative">
            <Spacing md="55" />
            <h2 className="cs_fs_48 mb-0 cs_semibold">{name}</h2>
            <Spacing md="32" />
            {/* Social Links */}
            {social && (
              <div className="cs_social_links cs_accent_bg cs_radius_15">
                {social.map((item, index) => (
                  <Link to={item.href} key={index} className="cs_social_icon">
                    <Icon icon={item.icon} />
                  </Link>
                ))}
              </div>
            )}
            <Spacing md="35" lg="0" />
            {/* Services */}
            <List
              heading={servicesHeading}
              iconUrl="/images/icons/service.svg"
              data={services}
            />
            <Spacing md="70" lg="50" />
            {/* Awards */}
            <List
              heading={awardsHeading}
              iconUrl="/images/icons/award.svg"
              data={awards}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
