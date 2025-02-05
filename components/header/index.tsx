import {Search, User2Icon} from "lucide-react";

export const HeaderComponent = () => {
	return (
		<section className="w-full flex items-center justify-between gap-4 bg-[#f9fbfd] py-6 px-6">
			<div className="flex items-center gap-3">
				<p className="text-gray-500 cursor-pointer">Dashboard</p>
				<p className="text-gray-500 cursor-pointer">Products</p>
				<p className="text-gray-500 cursor-pointer">All Products</p>
			</div>
			<div className="flex items-center gap-3">
				<div className="w-[20em] h-10 rounded-md border bg-white border-gray-300 px-2 flex items-center justify-between gap-2">
					<Search className="text-gray-500 text-xs" />
					<input
						type="text"
						placeholder="Search..."
						className="w-full h-full border-none pl-1 outline-none bg-transparent text-gray-600"
					/>
				</div>
				<div className="h-10 w-10 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center">
					<User2Icon className="text-gray-500" />
				</div>
			</div>
		</section>
	);
};
