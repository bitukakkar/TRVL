import React, { useState, useEffect, useCallback, useRef } from "react";
import BathtubIcon from "@material-ui/icons/Bathtub";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

import { getDialoguesById } from './../../APIs/AmadeusService';
import { usePolling } from "../../Hooks/usePolling";
import { CLIENT_ACTION } from "../../Constants/General";
import { TEXT } from "../../Constants/Strings";
import { Dialogue } from "../";
import { useStyles } from "./styles";
import { PERFORMATIVE, ROLE } from "../../Types/Enums";

export const Dialogues = ({ bookingId, setAction }) => {
  const classes = useStyles();
  const dialogueEl = useRef(null);
  const dialogues = useRef([]);
  const [dialoguesData, setDialoguesData] = useState(dialogues?.current);

  const getDialogues = useCallback(async () => {
    //get dialogues from /dialogues API
    const _dialoguesData = await getDialoguesById(bookingId);
    if (
      _dialoguesData &&
      _dialoguesData.dialogueitems &&
      _dialoguesData.dialogueitems?.length &&
      _dialoguesData.dialogueitems?.length > dialogues?.current?.length
    ) {
      const sortedDialogues = _dialoguesData.dialogueitems.sort(
        // Sort dialogues based on dialogue id
        (current, next) => current.id - next.id,
      );
      dialogues.current = sortedDialogues;
      setDialoguesData(sortedDialogues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogues.current, bookingId]);
  // Poll /dialogues API
  const [startGettingDialogues, stopGettingDialogues] = usePolling(getDialogues);
  useEffect(() => {
    // Scroll to the latest dialogue
    const scrollToBottom = (event) => {
      const { currentTarget } = event;
      currentTarget.scroll({
        top: currentTarget.scrollHeight,
        behavior: "smooth",
      });
    };

    if (dialogueEl && dialogueEl.current) {
      dialogueEl.current.scrollTop = dialogueEl.current.scrollHeight;
      dialogueEl.current.addEventListener("DOMNodeInserted", scrollToBottom);
    }

    return () => {
      if (dialogueEl && dialogueEl.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dialogueEl.current.removeEventListener("DOMNodeInserted", scrollToBottom);
      }
    };
  }, []);

  useEffect(() => {
    // Start getting dialogues once component mounted
    startGettingDialogues();
    // Stop getting dialogues once component unmounted
    return () => stopGettingDialogues();
  }, [startGettingDialogues, stopGettingDialogues]);

  const AgentDialogue = ({ item, index, offer }) => {
    // If id in dialogue data is hotel then show it to left side of dialogue box
    // else show it to right
    return item.role === ROLE.HOTEL ? (
      <Dialogue
        left={true}
        message={item.message}
        actions={item.actions}
        offer={offer}
        key={index}
      />
    ) : (
      <Dialogue left={false} message={item.message} actions={item.actions} key={index} />
    );
  };

  const OfferComponent = ({ message }) => {
    return (
      <div>
        <div>
          <p>
            {TEXT.ROOM_NUMBER} {message?.offer?.room_number}
          </p>
          <p>
            {TEXT.PRICE} {message?.offer?.price}
          </p>
        </div>
        <div className={classes.amenitiesContainer}>
          <p>{TEXT.AMENITIES}</p>
          {message?.offer?.coffee_machine && offerIcons.coffee_machine}
          {message?.offer?.bath && offerIcons.bath}
        </div>
      </div>
    );
  };

  const offerIcons = {
    coffee_machine: <LocalCafeIcon className={classes.amenityIcons} />,
    bath: <BathtubIcon className={classes.amenityIcons} />,
  };

  return (
    <>
      <div ref={dialogueEl} className={classes.dialogueContainer}>
        <div className={classes.dialogueInnerContainer}>
          {dialoguesData.map((item, index) => {
            if (
              item.performative === PERFORMATIVE.CONFORMATION ||
              item.performative === PERFORMATIVE.DECLINE
            ) {
              setAction(item.performative);
              stopGettingDialogues();
              return <AgentDialogue item={item} index={index} />;
            }
            if (item.performative === PERFORMATIVE.OFFER) {
              //If performative is offer then show dialogue with action buttons ( ACCEPT, DECLINE and NEGOTIATE )
              try {
                // replace /" with "
                const message = JSON.parse(item.message.replace(/\\"/g, '"'));
                const offer = {
                  price: message.offer.price,
                  component: <OfferComponent message={message} />,
                };
                const itemWithActions =
                  index === dialoguesData.length - 1
                    ? {
                        ...item,
                        actions: [
                          CLIENT_ACTION.ACCEPT,
                          CLIENT_ACTION.DECLINE,
                          CLIENT_ACTION.NEGOTIATE,
                        ],
                      }
                    : item;
                return <AgentDialogue item={itemWithActions} index={index} offer={offer} />;
              } catch (error) {
                console.error(error);
              }
            }
            return <AgentDialogue item={item} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
