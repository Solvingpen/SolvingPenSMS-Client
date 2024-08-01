import { useId } from "react";
import { BiCheck } from "react-icons/bi";

/** Input group for email verification */
const EmailVerificationInput = () => {
	const id = useId();

	return (
		<div className="text-sm flex flex-col gap-1">
			<label htmlFor={id}>Verify your email</label>
			<div className="flex gap-2">
				<div className="flex items-center gap-1 w-fit">
					<input
						id={id}
						className="p-2 rounded-md border-zinc-400 max-w-8 border text-center"
						type="text"
					/>
					<input
						className="p-2 rounded-md border-zinc-400 max-w-8 border text-center"
						type="text"
					/>
					<input
						className="p-2 rounded-md border-zinc-400 max-w-8 border text-center"
						type="text"
					/>
					<input
						className="p-2 rounded-md border-zinc-400 max-w-8 border text-center"
						type="text"
					/>
				</div>
				<div className="flex items-center gap-1 text-xs text-green-600">
					<BiCheck className="text-xl" /> Verified
				</div>
			</div>
		</div>
	);
};

export default EmailVerificationInput;
