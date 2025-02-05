import {
	AlignEndHorizontal,
	BlocksIcon,
	Home,
	Settings,
	ShoppingCart,
	Users,
} from "lucide-react";

export const SidebarComponent = () => {
	const mainIconsStyle = `cursor-pointer hover:text-black text-gray-500`;
	return (
		<section className="flex flex-col items-center justify-between pb-8 pt-7 gap-9 w-16 bg-white h-screen border-r">
			<div className="flex flex-col justify-start items-center gap-9">
				<Home className={`${mainIconsStyle}`} />
				<ShoppingCart className={`${mainIconsStyle}`} />
				<BlocksIcon className={`${mainIconsStyle}`} />
				<Users className={`${mainIconsStyle}`} />
				<AlignEndHorizontal className={`${mainIconsStyle}`} />
			</div>
			<Settings className={`${mainIconsStyle}`} />
		</section>
	);
};
