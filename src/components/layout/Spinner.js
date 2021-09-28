import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Spinner = () => {
  return (
    <Fragment>
      <FontAwesomeIcon
        className="all-center large text-primary"
        icon="spinner"
        spin
      />
    </Fragment>
  );
};
