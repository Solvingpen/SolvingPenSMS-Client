/** UI for displaying form progress */
const ProgressTracker = ({ currentPage }: { currentPage: 1 | 2 | 3 }) => {
	return (
		<div className="flex items-center">
			<button className="h-6 w-6 rounded-full bg-[#228D67]"></button>
			<span className="h-1 flex-1 bg-black"></span>
			<button
				className={`h-6 w-6 rounded-full ${
					currentPage >= 2 ? "bg-[#228D67]" : "bg-[#D9D9D9]"
				}`}></button>
			<span className="h-1 flex-1 bg-black"></span>
			<button
				className={`h-6 w-6 rounded-full ${
					currentPage > 2 ? "bg-[#228D67]" : "bg-[#D9D9D9]"
				}`}></button>
		</div>
	);
};

export default ProgressTracker;
