import React from 'react'

const ModalContainer = ({ currentModalName, children }) => {
    if (currentModalName !== '') {
        return (
            <div className='fixed z-10 inset-0 overflow-y-auto'>
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
                        <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
                    </div>
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>&#8203;</span>
                    {React.Children.map(children, child => {
                        if (child.props.name === currentModalName) {
                            return child
                        }
                    })}
                </div>
            </div>
        )
    }
    return null
}

export default ModalContainer
