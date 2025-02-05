import axios, {AxiosResponse} from "axios";

interface UseAxiosPropsType {
	url: string;
	method?: "GET" | "POST" | "DELETE" | "PUT";
	body?: any;
	headers?: Record<string, string>;
	params?: Record<string, any>;
}

const useAxios = async ({
	url,
	method = "GET",
	body = null,
	headers = {},
	params = {},
}: UseAxiosPropsType): Promise<AxiosResponse | void> => {
	const axiosConfig = {
		url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
		method,
		data: body,
		headers,
		params,
	};

	try {
		const response = await axios(axiosConfig);
		return response;
	} catch (error) {
		console.log(error + `:(`);
	}
};

export default useAxios;
