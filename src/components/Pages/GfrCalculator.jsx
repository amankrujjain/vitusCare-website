import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import Feature from '../Section/FeaturesSection/Feature';



export default function GFRCalculator() {
    const [age, setAge] = useState('');
    const [creatinine, setCreatinine] = useState('');
    const [gender, setGender] = useState('');
    const [gfr, setGFR] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!age || !creatinine || !gender) {
            toast.error("Please fill all fields");
            return;
        }

        const gfrResult = calculateGFR(age, creatinine, gender);
        setGFR(gfrResult);

        toast.success("GFR Calculated!");
    };

    const calculateGFR = (age, creatinine, gender) => {
        const factor = gender === "female" ? 0.85 : 1;
        const gfrValue = ((140 - age) * factor) / creatinine;
        return gfrValue.toFixed(2); // Simplified formula for demonstration
    };

    pageTitle('GFR-Calculator');


    return (
        <>
            <Section topMd={200} topLg={150} topXl={110}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h2 className="cs_fs_40 cs_medium mb-0">GFR Calculator</h2>
                            <div className="cs_height_42 cs_height_xl_25" />

                            {/* GFR Calculator Form */}
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-lg-6">
                                    <label className="cs_input_label cs_heading_color">Age</label>
                                    <input
                                        type="number"
                                        className="cs_form_field"
                                        placeholder="Enter Your Age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                    <div className="cs_height_42 cs_height_xl_25" />
                                </div>

                                <div className="col-lg-6">
                                    <label className="cs_input_label cs_heading_color">Serum Creatinine (mg/dL)</label>
                                    <input
                                        type="number"
                                        className="cs_form_field"
                                        placeholder="Enter Creatinine Level"
                                        value={creatinine}
                                        onChange={(e) => setCreatinine(e.target.value)}
                                    />
                                    <div className="cs_height_42 cs_height_xl_25" />
                                </div>

                                <div className="col-lg-6">
                                    <label className="cs_input_label cs_heading_color">Gender</label>
                                    <div className="cs_select_wrap">
                                        <select
                                            className="cs_form_field"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="cs_height_42 cs_height_xl_25" />
                                </div>

                                <div className="col-lg-12">
                                    <button className="cs_btn cs_style_1" type="submit">
                                        <span>Calculate GFR</span>
                                    </button>
                                </div>

                                {gfr && (
                                    <div className="col-lg-12" style={{ marginTop: '20px', textAlign: 'center' }}>
                                        <p>Your GFR is: <strong>{gfr} mL/min/1.73m²</strong></p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <Feature
                    sectionTitle="What Is GFR Calculator"
                    imgUrl="images/about/why_choose_us.jpeg"
                    
                />
            </Section>
        </>
    );
}
