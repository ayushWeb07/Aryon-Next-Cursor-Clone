"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Page = () => {
	const tasks = useQuery(api.tasks.get);

	return (
		<div>
			<Button>Hi</Button>
			<h1>HEY</h1>

			<div>
				{tasks?.map(({ _id, text }) => (
					<div key={_id}>{text}</div>
				))}
			</div>
		</div>
	);
};

export default Page;
