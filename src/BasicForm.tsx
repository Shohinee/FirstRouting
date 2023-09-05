/** @format */

// import { useFormik } from "formik";
// import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
export default function BasicForm() {
	return (
		<div>
			<div className="container1">
				<h2>LoginPage</h2>
				<input type="email" placeholder="Username" />
				<br />
				<input type="pass" placeholder="Password" />
				<br />
				<NavLink to="/forget">Forget Password?</NavLink>
				<br />
				<button>Login</button>
				<br />
				<NavLink to="/notaMember">Not a Member ?</NavLink>
				<br />
				<NavLink to="/signup">Signup</NavLink>
				<Outlet />
			</div>
		</div>
	);
}
