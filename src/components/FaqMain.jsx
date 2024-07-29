import React, { useState } from 'react';
import { faqs } from '../constants';

const FaqMain = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="faqbg w-full faqs_main">
      <div className="faqHeading uppercase text-white text-center py-8">
        FAQ
      </div>
      <div className="">
        
        <div className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8 faq-border" />
              <div className="w-full give_faq_padding">
                <div onClick={() => toggleQuestion(index)} id="mainHeading" className="flex faq_answer_container cursor-pointer justify-between items-center w-full">
                  <div>
                    <p className="flex justify-center pl-5 text-[#e2e2e2] faq_questions font-semibold items-center text-base leading-6 lg:leading-4">
                      <span className="lg:mr-6 text-[#e2e2e2] mr-4 lg:text-2xl md:text-xl text-lg leading-6 questionNumber md:leading-5 lg:leading-4 font-semibold">
                        Q{index + 1}.
                      </span>
                      {faq.question}
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none pr-5 faq_askedBy focus:ring-2 focus:ring-offset-2 text-[#e2e2e2]"
                  >
                   ({faq.askedBy})
                  </button>
                </div>
                <div id="menu" className={`${openQuestionIndex === index ? 'block' : 'hidden'} mt-6 w-full`}>
                  <p className="text-base faqs_answer font-medium leading-6 font-normal pl-5">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
          <hr className="w-full lg:mt-10 my-8 faq-border" />
        </div>
      </div>
    </div>
  );
};

export default FaqMain;

