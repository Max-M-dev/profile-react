import { CSSProperties } from "react";
import { transitions, positions, AlertTemplateProps } from "react-alert";

export const alertOptions = {
	position: positions.TOP_CENTER,
	timeout: 5000,
	offset: "10px",
	transition: transitions.FADE,
};

const alertStyle: CSSProperties = {
	backgroundColor: "#151515",
	color: "white",
	padding: "10px",
	borderRadius: "3px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.03)",
	fontFamily: "Arial",
	maxWidth: "500px",
	boxSizing: "border-box",
};

const buttonStyle = {
	marginLeft: "20px",
	border: "none",
	backgroundColor: "transparent",
	cursor: "pointer",
	color: "#FFFFFF",
};

export const AlertTheme = ({
	message,
	options,
	style,
	close,
}: AlertTemplateProps) => {
	switch (options.type) {
		case "info":
			alertStyle.backgroundColor = "rgb(30 166 197)";
			break;
		case "error":
			alertStyle.backgroundColor = "rgb(197 38 30)";
			break;
		case "success":
			alertStyle.backgroundColor = "rgb(30 197 74)";
	}
	return (
		<div style={{ ...alertStyle, ...style }}>
			{/* {options.type === "info" && "InfoIcon"} */}
			{/* {options.type === "success" && "SuccessIcon"} */}
			{/* {options.type === "error" && "error"}  */}
			<span style={{ margin: "auto" }}>{message}</span>
			{/* <button onClick={close} style={buttonStyle}>
				X
			</button> */}
		</div>
	);
};
