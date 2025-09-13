import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Filters } from './Filters'
import { Modal } from './Modal/Modal'

export const App = () => {
	const { t } = useTranslation()

	const [showFilters, setShowFilters] = useState(false)

	return (
		<main className="w-full h-dvh flex flex-col items-center justify-center font-['Inter'] bg-[rgba(0,0,0,0.25)] relative z-10 text-[#31393C]">
			<button
				onClick={() => setShowFilters(true)}
				className="px-4 py-2 rounded bg-blue-600 text-white transition-opacity hover:opacity-75"
			>
				{t('Open Filters')}
			</button>
			<Modal
				title={t('Filter')}
				show={showFilters}
				showState={setShowFilters}
			>
				<Filters />
			</Modal>
		</main>
	)
}
