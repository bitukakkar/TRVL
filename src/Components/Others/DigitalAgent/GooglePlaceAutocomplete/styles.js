export const searchIconBox = {
  padding: `0 6px 0 8px`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "0 !important",
  marginTop: "5px",
};

export const styles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: "none",
    minHeight: 48,
    width: "100%",
    // minWidth: "350px",
    marginTop: "10px",
    // paddingLeft: "12px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    cursor: "pointer",
    ":hover": {
      border: "1.5px solid rgba(15, 25, 32, 0.25)",
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: "none !important",
  }),
};
