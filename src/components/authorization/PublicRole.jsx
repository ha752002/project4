import React from 'react'

export default function PublicRole({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.PUBLIC
    )
        return (
            <>{children}</>
        )

}
