/** @format */
import "./App.css";
// import React from "react";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
	return (
		<div
			className="render"
			style={{ height: "100%", width: "100%", backgroundColor: "red" }}>
			<Outlet />
		</div>
	);
}
