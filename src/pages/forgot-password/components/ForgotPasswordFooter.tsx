const ForgotPasswordFooter = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center pt-20">
				<p className="text-sm">
					Contact Support:{" "}
					<a
						className="text-blue-600 hover:underline"
						href="mailto:Schoolname@gmail.com">
						Schoolname@gmail.com
					</a>
				</p>
				<p className="text-sm">
					School Phone:{" "}
					<a
						className="text-blue-600 hover:underline"
						href="tel:+2348065005323">
						08065005323
					</a>
				</p>
			</div>
		</>
	);
};

export default ForgotPasswordFooter;
