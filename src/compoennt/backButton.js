import React from "react";
import { withRouter } from "react-browser-router";

const Back = ({ history }) => (
    <div className="w-1/5 lg:w-1/6 text-xs lg:text-lg cursor-pointer appearance-none" onClick={history.goBack}>Back</div>
);

export default withRouter(Back);