import React from 'react'

type ActionButtonProps = {
	label: string
	variant: 'apply' | 'discard'
	onClick?: () => void
	size?: 'normal' | 'wide'
}

export const ActionButton: React.FC<ActionButtonProps> = ({
	label,
	variant,
	onClick,
	size = 'normal'
}) => {
	const baseStyles =
		'px-4 rounded-2xl font-semibold transition-opacity hover:opacity-75'

	const variants: Record<typeof variant, string> = {
		apply: 'bg-[#FF5F00] text-white',
		discard: 'text-[#474747] border border-width-[2px] border-[#B4B4B4]'
	}

	const sizes: Record<typeof size, string> = {
		normal: 'min-w-[184px]',
		wide: 'min-w-[280px]'
	}

	return (
		<button
			onClick={onClick}
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} leading-16`}
		>
			{label}
		</button>
	)
}
