import { create } from 'zustand'

export type SelectedFilters = {
	[filterId: string]: string[]
}

type FiltersStore = {
	selectedFilters: SelectedFilters
	toggleFilter: (filterId: string, optionId: string) => void
	resetFilters: () => void
	setFilters: (filters: SelectedFilters) => void
}

export const useFiltersStore = create<FiltersStore>(set => ({
	selectedFilters: {},
	toggleFilter: (filterId, optionId) =>
		set(state => {
			const prev = state.selectedFilters[filterId] || []
			const isActive = prev.includes(optionId)

			return {
				selectedFilters: {
					...state.selectedFilters,
					[filterId]: isActive
						? prev.filter(id => id !== optionId)
						: [...prev, optionId]
				}
			}
		}),
	resetFilters: () => set({ selectedFilters: {} }),
	setFilters: filters => set({ selectedFilters: filters }) // 🔹 new method
}))
