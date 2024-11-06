import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

export default function AppointmentForm({onSuccess}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();

    toast.success("Form successfully submitted !");

    if (onSuccess) {
      onSuccess();  // Call the onSuccess function passed from Layout
    }
  }

  return (
    <form action="#" className="row" onSubmit={handleSubmit}>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Name</label>
        <input type="text" className="cs_form_field" placeholder="Enter Your Name" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="986 289 8628"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Age</label>
        <input type="number" className="cs_form_field" placeholder="30" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Appointment Date
        </label>
        <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          />
          <i>
            <Icon icon="fa6-solid:calendar-days" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Department</label>
        <div className="cs_select_wrap">
          <select className="cs_form_field">
            <option value="homeodialysis">Homeodialysis</option>
            <option value="in-centre-dialysis">In-centre Dialysis</option>
            <option value="nephrology">Nephrology</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="obstetricsGynecology">
              Obstetrics and Gynecology
            </option>
          </select>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" type='submit'>
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>

      {/* Text for Missed Call Option */}
      <div className="col-lg-12" style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#EE2327' }}>Or give a missed call on</p>

        {/* Phone Number and Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#2c2f76"
              d="m7.057 2.418l1.167-.351a2.75 2.75 0 0 1 3.302 1.505l.902 2.006a2.75 2.75 0 0 1-.633 3.139L10.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245c.45.781.859 1.33 1.206 1.637c.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.587.889c-2.754-.769-5.223-3.093-7.435-6.924C4.57 11.147 3.792 7.843 4.51 5.07a3.75 3.75 0 0 1 2.548-2.652m.433 1.437a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788c2.034 3.522 4.223 5.583 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568c-.77-1.33-1.128-2.36-1.038-3.161c.046-.416.24-.8.545-1.086l1.495-1.393a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684z"
            />
          </svg>
          <a
            href="tel:+919262892628"
            style={{ marginLeft: '10px', fontSize: '18px', fontWeight: 'bold', color: '#2c2f76', textDecoration: 'none' }}
          >
            92628 92628
          </a>
        </div>
      </div>
    </form>
  );
}
