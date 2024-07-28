import React, { useRef, useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formOptions } from '../constants';
import { Footer } from '../components';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [budgetName, setBudgetName] = useState("Website development")
  const [formData, setFormData] = useState({
    name: '',
    company : '',
    email: '',
    service: '',
    budget: '',
    eta: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleServiceChange = (e) => {
    const value = e.target.value;
    setBudgetName(value)
    setFormData({ ...formData, service: value });
  };  

  const resetForm = () => {
    setFormData({
      name: '',
      company : '',
      email: '',
      service: '',
      budget: '',
      eta: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    emailjs
      .sendForm('service_7gog0mn', 'template_e4699a3', form.current, {
        publicKey: 'iF8tA3_t5aKG9s5uw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Details Submitted.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('oops! something went wrong.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
        },
      );

  };
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="contact bg-[#161616]">

      <div className="c-headline-container">
        <span className="c-headline">{"Let's start your project together:"}</span>
      </div>


      <div className="form">
        <div className="contact-form-container">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="name">Your name *</label>{" "}
              <input
                onChange={handleChange}
                required="required"
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
              />
            </div>{" "}
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="company">Your company *</label>{" "}
              <input
                onChange={handleChange}
                required="required"
                type="text"
                id="company"
                name="company"
                placeholder="Your company.."
              />
            </div>{" "}
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="email">Your E-Mail *</label>{" "}
              <input
                required="required"
                type="email"
                id="email"
                onChange={handleChange}
                name="email"
                placeholder="Your email.."
                title="The domain portion of the email address is invalid (the portion after the @)."
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              />
            </div>{" "}
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="service">What service you like to have from us? *</label>{" "}
              <select required="required" id="service" name="service"
              onChange={handleServiceChange}
              >
                <option
                  value=""
                  disabled="disabled"
                  selected="selected"
                  hidden="hidden"
                >
                 What service you like to have from us?
                </option>{" "}
                {formOptions["service"].map((item,i)=>(
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>{" "}
              <FaArrowDown className='text-[#b46633] contact-form-arrow '/>
            </div>{" "}
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="find">Budget for the {budgetName}? *</label>{" "}
              <select required="required" id="budget" name="budget"
              onChange={handleChange}
              >
                <option
                  value=""
                  disabled="disabled"
                  selected="selected"
                  hidden="hidden"
                >
                  Budget for the {budgetName}?
                </option>{" "}
                {formOptions["budget"][budgetName].map((item,i)=>(
                  <option value={item}>{item}</option>
                ))}
              </select>{" "}
              <FaArrowDown className='text-[#b46633] contact-form-arrow '/>
            </div>{" "}
            <div className="contact-form-section">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <div className="contact-form-section-line" />{" "}
              <label htmlFor="find">Time frame of the project? *</label>{" "}
              <select required="required" id="eta" name="eta"
              onChange={handleChange}
              >
                <option
                  value=""
                  disabled="disabled"
                  selected="selected"
                  hidden="hidden"
                >
                  Time frame of the project?
                </option>{" "}
                {formOptions["timeframe"].map(item=>(
                  <option value={item}>{item}</option>
                ))}
              </select>{" "}
              <FaArrowDown className='text-[#b46633] contact-form-arrow '/>
            </div>{" "}
            <div className="contact-form-subject">
              <div className="contact-form-section-bg" style={{ opacity: 0 }} />{" "}
              <label htmlFor="message">Tell us about the project *</label>{" "}
              <textarea
                onChange={handleChange}
                required="required"
                id="message"
                name="message"
                placeholder="Please tell us about scope, requirements, features ..."
                defaultValue={""}
              />
            </div>{" "}
            <div className="contact-form-submit">
              <div className="contact-form-submitted">
                <div className="contact-form-submitted-bg" />{" "}
                <div className="c-submitted-text-slider">
                  <span className="c-submitted-text">
                    Thanks for your submission! We will come back to you asap.
                  </span>
                </div>
              </div>{" "}
              <input id="submit" type="submit" defaultValue="Submit" className="cursor-pointer" />
            </div>
          </form>
        </div>
      </div>


      <div className="c-ceo-container">
        <motion.div
          style={{ y: yTransform }}
          className="c-ceo-pic"
        />{" "}
        <div className="c-ceo-text-slider">
          <span className="c-ceo-text">
            Don't worry, we are all friendly dudes like the trees
            <br /> in the background
          </span>{" "}
          <span className="c-ceo-text-sub">
            (who happens to be our CEO,
            <br /> Priyansh Sharma)
          </span>
        </div>
      </div>

      <ToastContainer />
      <Footer />azdk

    </div>
  )
}

export default Contact