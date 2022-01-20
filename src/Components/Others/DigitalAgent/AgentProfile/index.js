import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import exchangeIcon from "./../../../../Assets/images/exchangeIcon.svg";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { setAgentImage } from "../agentRedux";

const AgentProfile = () => {
  const dispatch = useDispatch();
  const { src, alt } = useSelector((state) => state.agentRegisterDetails.image);
  const { name } = useSelector((state) => state.agentRegisterDetails);
  const classes = useStyles();
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();

  const handleImg = () => {
    const img = getValues("image")[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(setAgentImage(reader.result));
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  useEffect(() => {
    if (getValues("image") && !!getValues("image")[0]) {
      handleImg();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("image")]);

  const ImageUploadHiddenFiled = () => (
    <label className={classes.custom_file_upload}>
      <div className={classes.exchangeIconDiv}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          className={classes.custom_file_upload_field_hide}
          {...register("image")}
        />
        <img
          src={exchangeIcon}
          alt="exchange"
          className={classes.exchangeIcon}
        />
      </div>
    </label>
  );

  return (
    <Box className={classes.boxWidth}>
      <ScopedCssBaseline>
        <div className={classes.boxPadding}>
          <h4 className={classes.title}>Agent Profile</h4>
          <div>
            <div className={classes.imageDiv}>
              <div className={classes.imgCircle}>
                <ImageUploadHiddenFiled />
                {src && (
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "200px",
                      height: "100%",
                    }}
                    classes={classes.agent_img}
                  />
                )}
                {/* <ErrorMessage errors={errors} name="image" render={({ message }) => <span className={classes.agent_img_error_msg}>{message}</span>} /> */}
              </div>
            </div>
          </div>
          <label htmlFor="agentName" className={classes.label}>
            How should we call him?
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register("name", {
              required: "Agent name is required",
            })}
            className={classes.input}
            placeholder="Carl"
            defaultValue={name}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <span className={classes.agent_name_error_msg}>{message}</span>
            )}
          />
        </div>
      </ScopedCssBaseline>
    </Box>
  );
};

export default AgentProfile;
