import { Route, Routes } from "react-router-dom";
import tabs from "../assets/tabs.json";
import { TabLoader } from "../components/TabLoader";

function Routers() {
	return (
		<Routes>
			{tabs.map((tab) => (
				<Route
					key={tab.id}
					path={`/${tab.id}`}
					element={<TabLoader path={tab.path} />}
				/>
			))}
		</Routes>
	);
}

export default Routers;
