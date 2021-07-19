import React from "react";

export default function Logo({
	href,
	mode,
}: {
	href?: string;
	mode?: "small" | "medium" | "large";
}) {
	return (
		<a href={href ?? "#"}>
			<div className="inline-flex items-start justify-start">
				<p
					className={`${
						mode == "small"
							? "text-xl"
							: mode == "medium"
							? "text-2xl"
							: "text-4xl"
					} font-medium tracking-wider text-blue-600`}
				>
					Blue
				</p>
				<p
					className={`${
						mode == "small"
							? "text-xl"
							: mode == "medium"
							? "text-2xl"
							: "text-4xl"
					} font-medium tracking-wider text-gray-800`}
				>
					Forest
				</p>
			</div>
		</a>
	);
}
