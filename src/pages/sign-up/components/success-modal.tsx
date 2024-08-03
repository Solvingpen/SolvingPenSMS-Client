import { Link } from "react-router-dom";
import clappingHands from "../../../assets/images/clapping.gif";

const SuccessModal = () => {
	return (
		<div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4">
			<div className="bg-white min-h-80 w-full max-w-screen-sm shadow-lg px-4 py-6 flex flex-col gap-4">
				<div className="text-center">
					<h3 className="text-3xl text-green-600">Congratulations</h3>
					<p className="text-sm">Your school's portal is ready</p>
				</div>
				<div className="flex-1 flex justify-between items-center flex-col gap-2">
					<img
						width={100}
						src={clappingHands}
						className="block"
						alt="Clapping hands gif"
					/>
					<Link
						className="bg-[#007BFF] text-sm inline-flex px-6 py-2 rounded-[6px] text-white"
						to="/sign-up">
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SuccessModal;
