export default function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "flex",
				position: "absolute",
				left: "-46px",
				height: "32px",
				width: "32px",
				alignItems: "center",
				justifyContent: "center",
				background: "var(--bg-main)",
				borderRadius: "50%",
				padding: "2px",
			}}
			onClick={onClick}
		/>
	);
}
