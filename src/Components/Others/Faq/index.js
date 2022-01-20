import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { useStyles } from "./styles";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./style.css";
import useNavBg from "./../../../Hooks/useNavBg";

const faqs = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

const Faq = () => {
  const classes = useStyles();
  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);
  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <section className={classes.faqsection + " faq-container"}>
          <div className={classes.faqheading}>Frequently Asked Question</div>
          <div className={classes.faqcontent}>
            <Accordion preExpanded={[1]} allowZeroExpanded>
              {faqs.map((faq) => (
                <div className={classes.faqblock} key={faq.id}>
                  <AccordionItem uuid={faq.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{faq.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className={classes.faqdetail}>{faq.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
          <div className={classes.stillquestion}>Still have a question?</div>
          <div className={classes.noanswer}>
            If you cannot find answer to your question in our FAQ, you can
            always contact us at{" "}
            <span className={classes.faqemail}>
              <a href="mailto:hello@decentralized.travel">
                hello@decentralized.travel
              </a>
            </span>
          </div>
        </section>
      </Box>
    </ScopedCssBaseline>
  );
};

export default Faq;
