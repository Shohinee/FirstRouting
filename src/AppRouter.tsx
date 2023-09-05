/** @format */

// import React from "react";
import { Route, Routes } from "react-router-dom";
import forgetpass from "./forgetpass";
import NotANumber from "./NotANumber";
import Signup from "./Signup";
import PageLayout from "./PageLayout";
import BasicForm from "./BasicForm";

export default function AppRouter() {
	return (
		<div>
			<Routes>
				{/* <Route element={<PageLayout />}> */}
				<Route path="/" Component={BasicForm} />
				<Route path="/forget" Component={forgetpass} />
				<Route path="/notaMember" Component={NotANumber} />
				<Route path="/signup" Component={Signup} />
				{/* </Route> */}
			</Routes>
		</div>
	);
}
