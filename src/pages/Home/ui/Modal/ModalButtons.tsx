import { useTranslation } from 'react-i18next'

import { ActionButton } from '../Button'

export const ModalButtons = ({ isConfirm }: { isConfirm: boolean }) => {
	const { t } = useTranslation()
	return (
		<>
			{!isConfirm && (
				<div className="flex justify-between items-center pt-8">
					<div className="w-1/3"></div>
					<div className="w-1/3 flex justify-center">
						<ActionButton
							label={t('Apply')}
							variant="apply"
						/>
					</div>
					<div className="w-1/3 flex justify-end">
						<button className="underline leading-5 font-medium text-[#078691] transition-opacity hover:opacity-75 cursor-pointer">
							{t('Clear all parameters')}
						</button>
					</div>
				</div>
			)}
			{isConfirm && (
				<div className="flex justify-center gap-8 items-center">
					<ActionButton
						label={t('Use old filter')}
						variant="discard"
					/>
					<ActionButton
						label={t('Apply new filter')}
						variant="apply"
					/>
				</div>
			)}
		</>
	)
}
