/** Button for navigating between forms */
const NavButton = ({
	action,
	onClick
}: {
	action: "next" | "back";
	onClick?(): any;
}) => {
	const nextButtonClass = "bg-[#007BFF] float-right";
	const backButtonClass = "bg-[#6C757D]";
	return (
		<button
			onClick={onClick}
			className={`text-sm inline-flex px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA] ${
				action === "next" ? nextButtonClass : backButtonClass
			}`}
			type={action === "back" ? "button" : "submit"}>
			{action === "back" ? "Back" : "Next"}
		</button>
	);
};

export default NavButton;
