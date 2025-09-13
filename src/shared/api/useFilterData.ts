import { FilterDataResponse } from './types/Filter/FilterDataResponse'
import { FilterItem } from './types/Filter/FilterItem'

export const fetchFilterData = async (): Promise<FilterItem[]> => {
	const res = await fetch('/api/filterData.json')
	if (!res.ok) {
		throw new Error('Failed to fetch filter data')
	}
	const data: FilterDataResponse = await res.json()
	return data.filterItems
}
