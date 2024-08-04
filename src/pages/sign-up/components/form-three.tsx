import { useState, type Dispatch, type SetStateAction } from "react";
import Checkbox from "../../../components/checkbox";
import NavButton from "./nav-button";
import SuccessModal from "./success-modal";
import { useForm } from "react-hook-form";

/** Third form on the sign up page */
const FormThree = ({
	formData,
	setCurrentPage
}: {
	formData: any;
	setCurrentPage: Dispatch<SetStateAction<1 | 2 | 3>>;
}) => {
	const [portalCreated, setPortalCreated] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: "onBlur" });
	return (
		<form
			onSubmit={handleSubmit(
				() => (console.log("Form", formData), setPortalCreated(true))
			)}
			className="">
			<div className="max-w-[500px] mx-auto space-y-4 py-12">
				<Checkbox
					id="terms"
					label="I agree to Terms and Conditions"
					name="nursery"
					required
					register={register}
					errors={errors}
				/>
				<Checkbox
					id="requires-session"
					label="I want a session to teach my staff how to use the system"
					name="requiresSession"
				/>
				<Checkbox
					id="wants-updateInfo"
					label="I want to receive updates about the software"
					name="wantsUpdateInfo"
				/>
				<Checkbox
					id="wantsTrainedPersonnel"
					label="I want trained personnel to handle the software for my school"
					name="wantsTrainedPersonnel"
				/>
			</div>
			<div className="flex justify-between items-stretch mt-24">
				<NavButton onClick={() => setCurrentPage(2)} action="back" />
				<button className="text-sm inline-flex px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA] bg-[#007BFF] float-right">
					Submit
				</button>
			</div>
			{portalCreated && <SuccessModal />}
		</form>
	);
};

export default FormThree;
