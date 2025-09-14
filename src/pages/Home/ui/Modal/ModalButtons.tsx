import { useTranslation } from 'react-i18next'

import { ActionButton } from '../Button'

type ModalButtonsProps = {
	isConfirm: boolean
	onApply?: () => void
	onDiscard?: () => void
	resetLocal?: () => void
	openConfirm?: () => void
	hideModal?: () => void
	closeAllModals?: () => void
}

export const ModalButtons = ({
	isConfirm,
	onApply,
	onDiscard,
	resetLocal,
	openConfirm,
	hideModal,
	closeAllModals
}: ModalButtonsProps) => {
	const { t } = useTranslation()
	return (
		<>
			{!isConfirm && (
				<div className="flex justify-between items-center pt-8">
					<div className="w-1/3"></div>
					<div className="w-1/3 flex justify-center">
						<ActionButton
							label={t('filter:apply')}
							variant="apply"
							onClick={() => openConfirm?.()}
						/>
					</div>
					<div className="w-1/3 flex justify-end">
						<button
							className="underline leading-5 font-medium text-[#078691] transition-opacity hover:opacity-75 cursor-pointer"
							onClick={resetLocal}
						>
							{t('filter:clear')}
						</button>
					</div>
				</div>
			)}
			{isConfirm && (
				<div className="flex justify-center gap-8 items-center">
					<ActionButton
						label={t('filter:useOldFilter')}
						variant="discard"
						onClick={() => {
							onDiscard?.()
							hideModal?.()
							closeAllModals?.()
						}}
					/>
					<ActionButton
						label={t('filter:applyNewFilter')}
						variant="apply"
						onClick={() => {
							onApply?.()
							closeAllModals?.()
						}}
					/>
				</div>
			)}
		</>
	)
}
