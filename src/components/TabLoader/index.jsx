import { lazy, Suspense } from "react";
import { Loading } from "../Loading";
const BeachVacation = lazy(() => import("../Tabs/BeachVacation"));
const CityExploration = lazy(() => import("../Tabs/CityExploration"));
const CulturalExperiences = lazy(() => import("../Tabs/CulturalExperiences"));
const MountainAdventure = lazy(() => import("../Tabs/MountainAdventure"));
const WildlifeSafari = lazy(() => import("../Tabs/WildlifeSafari"));

export function TabLoader({ path }) {
	let TabComponent;

	switch (path) {
		case "BeachVacation":
			TabComponent = BeachVacation;
			break;
		case "CityExploration":
			TabComponent = CityExploration;
			break;
		case "CulturalExperiences":
			TabComponent = CulturalExperiences;
			break;
		case "MountainAdventure":
			TabComponent = MountainAdventure;
			break;
		case "WildlifeSafari":
			TabComponent = WildlifeSafari;
			break;
		default:
			TabComponent = BeachVacation;
	}

	return (
		<>
			<Suspense fallback={<Loading />}>
				{TabComponent && <TabComponent />}
			</Suspense>
		</>
	);
}
