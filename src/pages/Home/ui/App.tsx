import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { SelectedFilters, useFiltersStore } from '@store/useFiltersStore'

import { Filters } from './Filters'
import { Modal } from './Modal/Modal'

export const App = () => {
	const { t } = useTranslation()

	const [showFilters, setShowFilters] = useState(false)
	const [showConfirmModal, setShowConfirmModal] = useState(false)

	const { selectedFilters, setFilters } = useFiltersStore()
	const [localFilters, setLocalFilters] = useState<SelectedFilters>({})

	useEffect(() => {
		setLocalFilters(selectedFilters)
	}, [selectedFilters])

	const handleApply = () => {
		setFilters(localFilters)
	}

	const handleDiscard = () => {
		setLocalFilters(selectedFilters)
	}

	const closeAllModals = () => {
		setShowFilters(false)
		setShowConfirmModal(false)
	}

	const output: SearchRequestFilter = Object.entries(selectedFilters).map(
		([id, optionsIds]) => ({
			id,
			type: FilterType.OPTION,
			optionsIds
		})
	)

	return (
		<main className="w-full h-dvh flex flex-col items-center justify-center font-['Inter'] bg-[rgba(0,0,0,0.25)] relative z-10 text-[#31393C]">
			<button
				onClick={() => setShowFilters(true)}
				className="px-4 py-2 rounded bg-blue-600 text-white transition-opacity hover:opacity-75"
			>
				{t('filter:open')}
			</button>
			<section className="p-4">
				<h1 className="text-xl font-bold mb-2">{t('filter:debugFilters')}</h1>
				<pre className="bg-gray-100 p-2 rounded border">
					{JSON.stringify(output, null, 2)}
				</pre>
			</section>
			<Modal
				title={t('filter:filter')}
				show={showFilters}
				resetLocal={() => {
					setLocalFilters({})
					console.log('resetLocal')
				}}
				hideModal={() => setShowFilters(false)}
				openConfirm={() => setShowConfirmModal(true)}
			>
				<Filters
					localFilters={localFilters}
					setLocalFilters={setLocalFilters}
				/>
			</Modal>
			<Modal
				title={t('filter:confirmApply')}
				onApply={handleApply}
				onDiscard={handleDiscard}
				show={showConfirmModal}
				isConfirm
				hideModal={() => setShowConfirmModal(false)}
				closeAllModals={closeAllModals}
			/>
		</main>
	)
}
