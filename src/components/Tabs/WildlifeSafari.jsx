import Wild1 from "../../assets/images/wildlifeSafari/1.jpg";
import Wild2 from "../../assets/images/wildlifeSafari/2.jpg";
import Wild3 from "../../assets/images/wildlifeSafari/3.jpg";
import Wild4 from "../../assets/images/wildlifeSafari/4.jpg";

function WildlifeSafari() {
	return (
		<div className="flex justify-around gap-6 flex-wrap w-full py-10 p-4 shadow-xl bg-amber-100 border-2 rounded">
			<div className="basis-[48%]">
				<img
					src={Wild1}
					alt="Wild"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
			<div className="basis-[48%] relative">
				<img
					src={Wild2}
					alt="Wild"
					className="rounded-xl hover:scale-105 duration-300 absolute top-0 left-0 w-full h-full"
				/>
			</div>
			<div className="basis-[48%] relative">
				<img
					src={Wild3}
					alt="Wild"
					className="rounded-xl hover:scale-105 duration-300 absolute top-0 left-0 w-full h-full"
				/>
			</div>
			<div className="basis-[48%]">
				<img
					src={Wild4}
					alt="Wild"
					className="rounded-xl hover:scale-105 duration-300"
				/>
			</div>
		</div>
	);
}

export default WildlifeSafari;
