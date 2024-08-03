import { useState, useRef, useEffect } from "react";
import ProgressTracker from "./components/progress-tracker";
import FormOne from "./components/form-one";
import FormTwo from "./components/form-two";
import FormThree from "./components/form-three";

/** Sign up page */
const SignUpPage = () => {
	const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
	const [formData, setFormData] = useState<any>({});
	const formsContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const { current } = formsContainer;
		const totalWidth = current?.scrollWidth as number;
		const formWidth = totalWidth / 3;

		current?.scroll({
			left: (currentPage - 1) * formWidth,
			behavior: "smooth"
		});
	}, [currentPage]);

	return (
		<main className="min-h-screen flex items-center justify-center p-4">
			<div className="bg-[#F7F9FA] shadow-lg py-8 px-4 rounded-sm w-full max-w-screen-sm space-y-6">
				<div className="text-center">
					<h1 className="text-[26.91px]">
						Create your school portal
					</h1>
					<p className="text-[#505050] text-[14.3px]">
						This information will let us know more about you and
						your school
					</p>
				</div>
				<ProgressTracker currentPage={currentPage} />
				<div className="flex overflow-hidden" ref={formsContainer}>
					<div className="min-w-full h-fit">
						<FormOne
							setCurrentPage={setCurrentPage}
							setFormData={setFormData}
						/>
					</div>
					<div className="min-w-full h-fit">
						<FormTwo
							setCurrentPage={setCurrentPage}
							setFormData={setFormData}
						/>
					</div>
					<div className="min-w-full h-fit">
						<FormThree
							setCurrentPage={setCurrentPage}
							formData={formData}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignUpPage;
