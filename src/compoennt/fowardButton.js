import React from "react";
import { withRouter } from "react-browser-router";

const Foward = ({ history, title }) => (
    <div  className="w-1/5 lg:w-1/6 text-xs lg:text-sm flex justify-end cursor-pointer appearance-none" onClick={history.goForward}>Forward</div>
);

export default withRouter(Foward);