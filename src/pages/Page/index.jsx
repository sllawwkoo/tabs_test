import tabs from "../../assets/tabs.json";
import { Link, useNavigate } from "react-router-dom";
import Routers from "../../Routers/Routers";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Page() {
	const navigate = useNavigate();
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);

	useEffect(() => {
		if (currentPath !== location.pathname) {
			setCurrentPath(location.pathname);
		}

		if (location.pathname === "/") {
			navigate(`/${tabs[0].id}`);
		}
	}, [location, currentPath, navigate]);

	return (
		<div className="max-w-[1000px] mx-auto py-8">
			<div className="p-4 shadow-xl bg-slate-200 border-2 rounded">
				<ul className="flex justify-between">
					{tabs.map((tab) => (
						<li
							className={`border-stone-50 border-solid border-2 rounded hover:bg-slate-50 hover:text-red-700 duration-300 ${
								location.pathname === `/${tab.id}` && "bg-slate-50 text-red-700"
							}`}
							key={tab.id}
						>
							<Link
								className="px-6 py-4 block"
								to={`/${tab.id}`}
							>
								{tab.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<Routers />
		</div>
	);
}
