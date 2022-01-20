import React, { useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { useStyles } from "./styles";
import clsx from "clsx";
import "./style.css";
import useNavBg from "./../../../Hooks/useNavBg";

const TermService = () => {
  const classes = useStyles();
  const [setIsNavBgShow] = useNavBg();
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const [activeterm, setActiveterm] = useState(myRef1);
  const executeScroll = (obj) => {
    setActiveterm(obj);
    obj.current.scrollIntoView();
  };

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);
  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <section className={classes.termssection}>
          <div className={classes.termsheading}>Terms of service</div>
          <div className={classes.termscontainer}>
            <div className={classes.terms_leftblock}>
              <ul className={classes.terms_ul}>
                <li
                  className={
                    activeterm === myRef1 ? classes.li_active : classes.terms_li
                  }
                  onClick={() => executeScroll(myRef1)}>
                  {" "}
                  1. Agreements and changes
                </li>
                <li
                  className={
                    activeterm === myRef2 ? classes.li_active : classes.terms_li
                  }
                  onClick={() => executeScroll(myRef2)}>
                  {" "}
                  2. Our services & paid currency
                </li>
                <li
                  className={
                    activeterm === myRef3 ? classes.li_active : classes.terms_li
                  }
                  onClick={() => executeScroll(myRef3)}>
                  3. Rights we grant to you
                </li>
                <li
                  className={
                    activeterm === myRef4 ? classes.li_active : classes.terms_li
                  }
                  onClick={() => executeScroll(myRef4)}>
                  4. Righs you grant us
                </li>
              </ul>
            </div>
            <div className={classes.terms_rightblock}>
              <div className={classes.terms_box} ref={myRef1}>
                <div className={classes.terms_label}>
                  {" "}
                  1.Lorem Ipsum is simply dummy text of the typesetting?
                </div>
                <div className={classes.terms_content}>
                  <p className={classes.terms_content_p}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className={classes.terms_content_p}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
              <div
                className={clsx(classes.terms_box, classes.terms_box_other)}
                ref={myRef2}>
                <div className={classes.terms_label}>
                  {" "}
                  2.Lorem Ipsum is simply dummy text of the typesetting?
                </div>
                <div className={classes.terms_content}>
                  <p className={classes.terms_content_p}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className={classes.terms_content_p}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
              <div
                className={clsx(classes.terms_box, classes.terms_box_other)}
                ref={myRef3}>
                <div className={classes.terms_label}>
                  {" "}
                  3.Lorem Ipsum is simply dummy text of the typesetting?
                </div>
                <div className={classes.terms_content}>
                  <p className={classes.terms_content_p}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className={classes.terms_content_p}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
              <div
                className={clsx(classes.terms_box, classes.terms_box_other)}
                ref={myRef4}>
                <div className={classes.terms_label}>
                  {" "}
                  4.Lorem Ipsum is simply dummy text of the typesetting?
                </div>
                <div className={classes.terms_content}>
                  <p className={classes.terms_content_p}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p className={classes.terms_content_p}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </ScopedCssBaseline>
  );
};

export default TermService;
