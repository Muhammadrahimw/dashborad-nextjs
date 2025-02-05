"use client";

import {Button} from "@/components/ui/button";
import {File, PlusCircle} from "lucide-react";
import React, {useState} from "react";

const ProductLayout = ({
	all,
	active,
}: {
	all: React.ReactNode;
	active: React.ReactNode;
}) => {
	const [section, setSection] = useState<boolean>(true);
	return (
		<div className="py-2 px-6">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<Button
						onClick={() => setSection(true)}
						variant={"outline"}
						type="button">
						All
					</Button>
					<Button
						onClick={() => setSection(false)}
						variant={"outline"}
						type="button">
						Active
					</Button>
					<Button variant={"outline"} type="button">
						Draft
					</Button>
					<Button variant={"outline"} type="button">
						Archived
					</Button>
				</div>
				<div className="flex items-center gap-3">
					<Button variant={"outline"} type="button">
						<File /> Export
					</Button>
					<Button variant={"default"} type="button">
						<PlusCircle /> Add Products
					</Button>
				</div>
			</div>
			{section ? all : active}
		</div>
	);
};

export default ProductLayout;
