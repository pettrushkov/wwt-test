import { CloseIcon } from './CloseIcon'
import { ModalButtons } from './ModalButtons'

type ModalProps = {
	hideModal: () => void
	children?: React.ReactNode
	title?: string
	isConfirm?: boolean
	show?: boolean
	onApply?: () => void
	onDiscard?: () => void
	resetLocal?: () => void
	openConfirm?: () => void
	closeAllModals?: () => void
}

export const Modal = ({
	children,
	title,
	isConfirm = false,
	show = false,
	onApply,
	onDiscard,
	resetLocal,
	hideModal,
	openConfirm,
	closeAllModals
}: ModalProps) => {
	if (!show) {
		return null
	}

	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-xl bg-[rgba(27,27,27,0.3)]">
			<div className="absolute top-1/2 -translate-y-1/2 max-h-[calc(100%-32px)] left-4 right-4 md:max-h-[calc(100%-160px)] p-4 md:left-20 md:right-20 z-20 bg-white rounded-2xl md:p-8 overflow-auto">
				<CloseIcon hideModal={hideModal} />
				{title && (
					<h2
						className={`text-2xl text-center md:text-[40px] md:leading-[1.2] px-12 md:px-6 pb-6 ${isConfirm ? 'mb-12 md:mb-24' : ''}`}
					>
						{title}
					</h2>
				)}
				{children}
				<ModalButtons
					isConfirm={isConfirm}
					onApply={onApply}
					onDiscard={onDiscard}
					resetLocal={resetLocal}
					openConfirm={openConfirm}
					hideModal={hideModal}
					closeAllModals={closeAllModals}
				/>
			</div>
		</div>
	)
}
