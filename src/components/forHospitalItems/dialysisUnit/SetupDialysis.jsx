import React, { useState } from 'react';
import Section from '../../Section';
import { Icon } from '@iconify/react';
import DepartmentSectionStyle6 from '../../Section/DepartmentSection/DepartmentSectionStyle6';
import FeaturesSectionStyle3 from '../../Section/FeaturesSection/FeaturesSectionStyle3';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import AboutSectionStyle5 from '../../Section/AboutSection/AboutSectionStyle5'

const SetupDialysis = () => {

    const [open, setOpen] = useState("0");

    const accordionData = [
        {
            header: "CAPEX & OPEX",
            body: "Starting and managing a dialysis unit requires a significant investment.",
        },
        {
            header: "OPERATIONAL COMPLEXITY",
            body: "Managing a dialysis unit involves significant operational challenges, including inventory management, employee/technician management, and equipment maintenance.",
        },
        {
            header: "COST MANAGEMENT",
            body: "Cost towards operations and consumables become effective only beyond a certain scale.",
        },
        {
            header: "PATIENT AWARENESS",
            body: "Acquiring dialysis patients requires a focused approach vs a multi-specialty way of marketing.",
        },
        {
            header: "NEPHROLOGIST TIE-UP / TECHNICIAN TRAINING & UPSKILLING",
            body: "On boarding a nephrologist for regular OPD consultation & positioning as a leading renal service provider in the area. Specialist dialysis players better equipped in hiring skilled technicians, continuous training, daily management & retention.",
        },
    ];
    // Sample data for the WorkingProcess component
    const workingProcessData = [
        {
            title: 'CAPEX INVESTMENT',
            subTitle: `Upto 1 crore depending on scale of operations and potential to invest further with growth.`,
            iconUrl: '/images/home_2/wording_process_icon_1.svg',
            number: '01',
        },
        {
            title: 'COMPLETE SOURCING',
            subTitle: `Equipment & consumables (25+ unique consumables required for every session) Hence, several treatment combinations are required while administering the therapy.
`,
            iconUrl: '/images/home_2/wording_process_icon_2.svg',
            number: '02',
        },
        {
            title: 'INVENTORY CONTROL',
            subTitle: `No single supplier of all consumables, requires managing 25 different vendors each with a different MOQ, payment terms and delivery timelines
`,
            iconUrl: '/images/home_2/wording_process_icon_3.svg',
            number: '03',
        },
        {
            title: 'HUMAN RESOURCE',
            subTitle: `Onboarding, skilling and regular refresher training of technicians and nurses, apart from interventions by Clinical & Biomedical specialists (high attrition roles managed efficiently by our hub & spoke approach)
`,
            iconUrl: '/images/home_2/wording_process_icon_4.svg',
            number: '04',
        },
        {
            title: 'CLINICAL & BEHAVIORAL TRAINING',
            subTitle:
                `Continuous clinical and behavioral training by leading industry experts to enable high quality patient care and retention
`,
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '05',
        },
        {
            title: 'MARKETING',
            subTitle:
                'Co-branded marketing initiatives across multiple channels to onboard patients',
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '06',
        },
        {
            title: 'EQUIPMENT MAINTENANCE',
            subTitle:
                'Rigorous preventive maintenance schedule and dedicated teams for reactive maintenance to ensure longevity and quality of equipment',
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '07',
        },
        {
            title: 'HOLISTIC SOLUTION',
            subTitle:
                'Billing support and management + Nephrologist tie-up',
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '08',
        },
    ];

    // Feature data with random icons
    const featureData = [
        {
            icon: 'mdi:clipboard-text-outline', // Represents making a record
            title: '45L',
            description: 'ESRD* Cases recorded',
            color: 'text-primary',
        },
        {
            icon: 'mdi:checkbox-marked-circle-outline', // Represents choosing something
            title: '4%',
            description: 'ESRD* cases opt for dialysis',
            color: 'text-success',
        },
        {
            icon: 'mdi:chart-line', // Represents an increasing graph
            title: '2.2L',
            description: 'New ESRD* cases every year',
            color: 'text-danger',
        },
        {
            icon: 'healthicons:kidneys-outline', // Represents a kidney
            title: '~11k',
            description: 'Kidney transplants per year',
            color: 'text-warning',
        },
        {
            icon: 'mdi:heart-pulse', // Represents a life line
            title: '~3%',
            description: 'of deaths in India due to CKD*',
            color: 'text-info',
        },
        {
            icon: 'fa:globe', // Represents global
            title: '2-3 yrs',
            description: 'Life expectancy with dialysis',
            color: 'text-secondary',
        },
    ];

    const smallDivData = [
        {
            icon: 'material-symbols:check-circle-outline', // Valid
            content: 'India has only ~ 6,000 dialysis centres, with 90% located in Tier 1 & 2 cities. lack of access leads to low frequency of treatment.',
        },
        {
            icon: 'mdi:stethoscope', // Valid
            content: 'Currently ~1.8L patients undergo dialysis and every year ~2.2L patients are added doubling of capacity is required.',
        },
        {
            icon: 'mdi:shield-check-outline', // Valid
            content: 'Shortage of skilled and trained technicians.',
        },
        {
            icon: 'mdi:heart-outline', // Valid
            content: 'Patient infection rates are the high in poorly run centers; thereby affecting life expectancy even after dialysis.',
        },
    ];

    const carouselItems = [
        { text: "DIALYSIS REVENUE SHARE" },
        { text: "WORD OF MOUTH" },
        { text: "OPD REVENUES" },
        { text: "ICU/IPD REVENUES" },
        { text: "PHARMACY REVENUES" },
        { text: "LAB REVENUES" },
        { text: "PROCEDURES" },
    ];

    const toggle = (id) => {
        if (open === id) {
            setOpen(""); // Close the currently open accordion item
        } else {
            setOpen(id); // Open the clicked accordion item
        }
    };

    const imageBoxData = [
        {
            imgSrc: "/images/capex.png",
            title: "Advanced Dialysis Solutions",
            subtitle: "Cutting-edge technology to ensure the best care for patients.",
        },
        {
            imgSrc: "/images/opex.png",
            title: "Comprehensive Revenue Model",
            subtitle: "Unlock multiple revenue streams with our tailored approach.",
        },
        {
            imgSrc: "/images/operational-involvement.png",
            title: "Expert Guidance",
            subtitle: "Experienced professionals to assist you every step of the way.",
        },
    ];

    const imageBoxData2 = [
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Best-in-Class Clinical Protocols",
            subtitle: "Dedicated central team with experience from top institutions Medanta, Fortis, Tata Memorial, Max ensuring protocol compliance. Real-time checks withh periodic and surprises audits",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Win-Win Partnership",
            subtitle: "Tailored commercial propositions for hospital, nephrologist and VitusCare. Transparent paperwork, streamlined billing, and comprehensive reviews Patient-focused partnership: VitusCare manages all operations and challenges",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Market Expertise",
            subtitle: "Deep understanding of marketing assessment and pricing strategies. Rapid 'go to market' and launch approach driving utilization proven track record in patient acquisition and retention",
        },
    ];

    const sirfQuality = [
        {
            title: 'Vaccinations Department',
            subTitle:
                'India has only ~ 6,000 dialysis centres, with 90% located in Tier 1 & 2 cities. lack of access leads to low frequency of treatment.',
            iconUrl: '/images/departments/icon_9.svg',
        },
        {
            title: 'Management of acute illnesses',
            subTitle:
                'Currently ~1.8L patients undergo dialysis and every year ~2.2L patients are added doubling of capacity is required.',
            iconUrl: '/images/departments/icon_10.svg',
        },
        {
            title: 'Treatment of chronic conditions',
            subTitle:
                'Shortage of skilled and trained technicians.',
            iconUrl: '/images/departments/icon_11.svg',
        },
        {
            title: 'Developmental screenings',
            subTitle:
                'Patient infection rates are the high in poorly run centers; thereby affecting life expectancy even after dialysis.',
            iconUrl: '/images/departments/icon_12.svg',
        },
    ];

    return (
        <>
            {/* <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <CustomBanner
                    bgUrl="/images/web-banner.png"
                    title="New Banner"
                    subTitle="Test banner"
                />
            </Section> */}

            {/* Section for Title, Subtitle, and Icon Boxes */}
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <div className="container my-5">
                    {/* Title and Subtitle */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold blue_color">Need For Dialysis in India?</h1>
                    </div>

                    {/* Icon Boxes */}
                    <div className="row gy-4">
                        {featureData.map((feature, index) => (
                            <div className="col-md-4 text-center" key={index}>
                                <div className="p-4 border rounded">
                                    <Icon
                                        icon={feature.icon}
                                        className={`fs-1 ${feature.color}`}
                                        style={{ fontSize: '48px' }}
                                    />
                                    <h5 className="mt-3 red_color" style={{ fontSize: '48px' }}>{feature.title}</h5>
                                    <p className="text-muted" style={{ fontSize: '28px' }}>
                                        {feature.description.split('*').map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span style={{ color: 'red' }}>*</span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Full Form Section */}
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="p-3 border rounded">
                                    <strong style={{ color: 'red' }}>ERSD</strong>: End-Stage Renal Disease
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 border rounded">
                                    <strong style={{ color: 'red' }}>CKD</strong>: Chronic Kidney Disease
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section topMd={170} topLg={145} topXl={90}>
                <FeaturesSectionStyle3
                    sectionTitle="ACCESS & QUALITY"
                    sectionTitleUp="A CHALLENGE OF"
                    data={sirfQuality}
                />
            </Section>


            {/* accordian */}

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold blue_color">Why Choose Us?</h1>
                    </div>
                    <div className="row align-items-center">
                        {/* Content Side */}
                        <div className="col-md-6">
                            <div style={{ fontSize: "44px", fontWeight: "bold", lineHeight: "1.5" }}>
                                <p className='blue_color'><span className='red_color'>STARTING</span> AND <span className='red_color'>MANAGING</span>  A DIALYSIS CENTER REMAINS CHALLENGING FOR <span className='red_color'> &gt 73%</span> OF PRIVATE HOSPITALS OF <span className='red_color'>INDIA</span></p>
                            </div>
                        </div>

                        {/* Accordion Side */}
                        <div className="col-md-6">
                            <Accordion open={open} toggle={toggle}>
                                {accordionData.map((item, index) => (
                                    <AccordionItem key={index}>
                                        <AccordionHeader
                                            className="blue_color"
                                            style={{ fontSize: "30px" }} // Set the font size
                                            targetId={`${index}`}
                                        >
                                            {item.header}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={`${index}`}>
                                            {item.body}
                                        </AccordionBody>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                    </div>
                </div>
            </Section>

            {/* why  choose us */}

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <Container>
                    {/* Section Title */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ fontSize: "46px", color: "#002060" }}>
                            Why Choose VitusCare?
                        </h2>
                        <p className="text-muted blue_color" style={{ fontSize: "28px" }}>
                            YOUR PLUG AND PLAY QUALITY DIALYSIS
                            PARTNER WITH <span className="red_color">3X BENEFITS</span>
                        </p>
                    </div>

                    {/* Image Boxes */}
                    <Row>
                        {imageBoxData.map((item, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <div
                                    className="image-box-wrapper"
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {/* Image */}
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="image-box-image"
                                        style={{
                                            width: "450px",
                                            height: "350px",
                                            borderRadius: "10%", // Initial rounded corners
                                            objectFit: "cover",
                                            transition: "transform 0.6s ease-in-out", // Smooth scaling
                                        }}
                                    />
                                    {/* Title and Subtitle */}
                                    <div
                                        className="image-box-overlay"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.7)", // Overlay background
                                            color: "#fff",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            opacity: 0, // Hidden by default
                                            transform: "scale(0.9) rotateX(-10deg)", // Shrink and tilt initially
                                            transition: "opacity 0.6s ease, transform 0.6s ease", // Smooth appearance
                                        }}
                                    >
                                        <h5
                                            className="fw-bold"
                                            style={{
                                                fontSize: "20px",
                                                marginBottom: "10px",
                                                transform: "translateY(20px)",
                                                opacity: 0,
                                                transition: "all 0.5s ease-in-out 0.2s", // Delay for the title
                                            }}
                                        >
                                            {item.title}
                                        </h5>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                textAlign: "center",
                                                transform: "translateY(20px)",
                                                opacity: 0,
                                                transition: "all 0.5s ease-in-out 0.4s", // Delay for the description
                                            }}
                                        >
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>


            {/* mid section */}
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110} style={{ backgroundColor: "#f9f9f9" }}>
                <Container>
                    <Row className="align-items-center">
                        {/* Left Column: Text Section */}
                        <Col md={6} className="text-start">
                            <h1
                                className="fw-bold"
                                style={{ color: "#002060", fontSize: "56px", lineHeight: "1.5" }}
                            >
                                BOOST YOUR BOTTOM LINE WITH{" "}
                                <span style={{ color: "#ff0000" }}>VitusCare</span>!
                            </h1>

                            <p
                                className="mt-2"
                                style={{
                                    color: "#002060",
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    borderTop: "2px solid red",
                                    paddingTop: "10px",
                                }}
                            >
                                
                            </p>
                            
                            <p
                                className="fw-medium mt-4"
                                style={{ color: "#002060", fontSize: "20px", fontWeight: "500" }}
                            >
                                Unlock <span style={{color:'red'}}>MULTIPLE</span> Revenue streams 
                            </p>
                            
                        </Col>

                        {/* Right Column: Carousel Section */}
                        <Col md={6} className="text-center">
                            <Carousel
                                indicators={false}
                                controls={true}
                                className="carousel-circle"
                                interval={3000}
                            >
                                {carouselItems.map((item, index) => (
                                    <Carousel.Item key={index} className="text-center">
                                        <div
                                            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "320px",
                                                height: "320px",
                                                backgroundColor: "#002060", // Set the background to red
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                color: "white", // Text color set to white
                                            }}
                                        >
                                            {item.text}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                    </Row>
                </Container>
            </Section>



            {/* Working Process Section */}
            <Section topMd={105} bottomMd={105}>
                <DepartmentSectionStyle6
                    sectionTitle="Hassle Free END-TO-END"
                    sectionTitleUp="How Do We Do It?"
                    sectionTitleDown="SPENDS & MANAGEMENT OF THE CENTER"
                    sectionSubTitle="How VitusCare ensures a seamless dialysis unit setup"
                    data={workingProcessData}
                />
            </Section>

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <Container>
                    {/* Section Title */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ fontSize: "46px", color: "#002060" }}>
                            What Do We Offer?
                        </h2>

                    </div>

                    {/* Image Boxes */}
                    <Row>
                        {imageBoxData2.map((item, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <div
                                    className="image-box"
                                    style={{
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    {/* Image */}
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    {/* Title and Subtitle */}
                                    <div className="p-3 text-center">
                                        <h5
                                            className="fw-bold"
                                            style={{ fontSize: "30px", color: "#002060" }}
                                        >
                                            {item.title}
                                        </h5>
                                        <p className="text-muted" style={{ fontSize: "14px" }}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
            <Section topMd={170} topLg={120} topXl={100}>
                <AboutSectionStyle5
                    imgUrl="/images/dialysis-banner.png"
                    titleUp=""
                    title=""
                    subTitle=""
                    supportTitle="#SirfQualityDialysis"
                    supportSubTitle=""
                />
            </Section>

        </>
    );
};

export default SetupDialysis;
