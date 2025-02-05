"use client";

import {ProductsType} from "@/@types";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import {useEffect, useState} from "react";

export const ProductsComponent = () => {
	const [data, setData] = useState<ProductsType[]>([]);
	const [isLoading, setIsloading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsloading(true);
			const response = await useAxios({url: `/products`});
			if (response) {
				setData(response.data);
			} else {
				setIsError(true);
			}
			setIsloading(false);
		};
		fetchData();
	}, []);

	return (
		<section className="bg-white border rounded-md w-full h-full py-5 px-5 mt-4">
			<p className="text-2xl font-semibold">Products</p>
			<p className="text-gray-500 text-sm mt-2">
				Manage your products and view their sales performance.
			</p>
			<Table className="mt-5">
				<TableCaption></TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-28"></TableHead>
						<TableHead className="w-[32em]">Name</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Total Sales</TableHead>
						<TableHead>Category</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data?.map((value: ProductsType) => (
						<TableRow key={value.id}>
							<TableCell>
								<Image
									width={70}
									height={70}
									src={`${value.image}`}
									alt={`${value.description}`}
									className={`object-cover rounded-md`}
								/>
							</TableCell>
							<TableCell className="textxl font-semibold">
								{value.title}
							</TableCell>
							<TableCell>
								<p className="w-14 border-gray-400 h-6 rounded-full border flex items-center justify-center">
									New
								</p>
							</TableCell>
							<TableCell className="font-medium">${value.price}</TableCell>
							<TableCell>{(value.price + 34).toFixed(2)}</TableCell>
							<TableCell>{value.category}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};
