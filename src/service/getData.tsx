import { DataType } from "public/data.types";

export async function getData(): Promise<DataType> {
	return fetch("/data.json").then((res) => res.json());
}
