import { useQuery } from '@tanstack/react-query'

import { fetchFilterData } from '@/shared/api/useFilterData'

export const Filters = () => {
	const { data: filterItems } = useQuery({
		queryKey: ['filterData'],
		queryFn: fetchFilterData
	})

	console.log(filterItems) // тут твои данные

	return (
		<div className="border-t-2 border-b-2 border-[#B4B4B4] py-8">
			{filterItems?.map((item, i) => (
				<div
					key={item.id}
					className={`py-8 ${filterItems.length !== i + 1 ? 'border-b-2 border-[#B4B4B4]' : ''}`}
				>
					<h2 className="font-medium text-2xl leading-[1.2] pb-6">
						{item.name}
					</h2>
					<div className="flex flex-wrap">
						{item.options.map(option => (
							<label
								key={option.id}
								className={`flex gap-4 items-center ${item.options.length === 2 ? 'w-full' : item.options.length === 4 ? 'w-1/2' : 'w-1/3'} pr-4 mb-4 relative pl-10`}
							>
								<input
									type="checkbox"
									className="hidden peer"
								/>
								<span className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 rounded-[2px] border-2 border-[#31393C] peer-checked:bg-[#FF5F00]"></span>
								{option.name}
							</label>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
