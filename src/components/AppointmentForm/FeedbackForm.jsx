import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function FeedbackForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    state: '',
    city: '',
    center: '',
    ratings: {},
    yesNoAnswers: {},
    suggestions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleYesNoChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      yesNoAnswers: { ...prev.yesNoAnswers, [question]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Feedback submitted successfully!');
    if (onSuccess) onSuccess();
  };

  return (
    <form style={{ padding: '50px' }} action="#" className="row" onSubmit={handleSubmit}>
      {/* Name and Contact Number */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Contact Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
      </div>

      {/* State and City */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">State</label>
        <select
          className="cs_form_field"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        >
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
        </select>
      </div>
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">City</label>
        <select
          className="cs_form_field"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="">Select City</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </div>

      {/* Center */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Center</label>
        <select
          className="cs_form_field"
          name="center"
          value={formData.center}
          onChange={handleInputChange}
        >
          <option value="">Select Center</option>
          <option value="center1">Center 1</option>
          <option value="center2">Center 2</option>
        </select>
      </div>

      {/* Rating Questions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <h4 className="cs_heading_color">Rate Your Experience (1 to 5)</h4>
        {[
          'How would you rate your overall experience with the dialysis service?',
          'How satisfied are you with the cleanliness and hygiene of the dialysis facility?',
          'How would you rate the professionalism of the dialysis service operators?',
          'How comfortable did you feel during the dialysis treatment?',
        ].map((question, index) => (
          <div key={index} className="cs_rating_question" style={{ marginBottom: '15px' }}>
            <label className="cs_input_label">{question}</label>
            <select
              className="cs_form_field"
              value={formData.ratings[question] || ''}
              onChange={(e) => handleRatingChange(question, e.target.value)}
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Yes/No Questions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <h4 className="cs_heading_color">Yes/No Questions</h4>
        {[
          'Did the dialysis operator explain the procedure and process clearly before starting your session?',
          'Were your questions and concerns addressed in a timely and helpful manner?',
          'Were you provided with clear instructions for post-treatment care and follow-up?',
        ].map((question, index) => (
          <div key={index} className="cs_yes_no_question" style={{ marginBottom: '15px' }}>
            <label className="cs_input_label">{question}</label>
            <select
              className="cs_form_field"
              value={formData.yesNoAnswers[question] || ''}
              onChange={(e) => handleYesNoChange(question, e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">
          Suggestions for Improvement
        </label>
        <textarea
          className="cs_form_field"
          placeholder="Your suggestions..."
          name="suggestions"
          value={formData.suggestions}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit Button */}
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" type="submit">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}
