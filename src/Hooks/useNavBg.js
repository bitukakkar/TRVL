import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setHideNavBg,
  setShowNavBg,
} from "../Components/AppHeader/appHeaderRedux";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const defaultState = [true, 360, "#c4edec"]; // 2nd value is nav background height

// Hook
const useNavBg = (initialState = defaultState) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Initialize the state
  const [state, setState] = useState(initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    if (state[0] === true) {
      // show Nav background
      dispatch(setShowNavBg(state));
    }

    // hide Nav background on location change
    const unblock = history.block((tx) => {
      if (tx.pathname !== pathname) {
        dispatch(setHideNavBg());
      }
    });

    return () => {
      unblock();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const isNavBgShow = (state = defaultState) => setState(state);

  isNavBgShow.propTypes = {
    state: PropTypes.bool,
  };

  return [isNavBgShow];
};

useNavBg.propTypes = {
  initialState: PropTypes.bool,
};

export default useNavBg;
