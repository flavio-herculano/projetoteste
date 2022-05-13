import { NextApiRequest, NextApiResponse } from "next";

export default function productShow(
	req : NextApiRequest,
	res : NextApiResponse
): void {
	const { id } = req.query;
	res.status(200).json({
		id,
		nome: "jhon",
	});
}
