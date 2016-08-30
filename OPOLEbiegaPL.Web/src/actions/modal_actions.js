export function showWindow(isEditMode) {
    return {
        type: 'OPEN',
        state: {
            isPopupVisible: true,
            isEditMode: isEditMode
        }
    }
}

export function hideWindow() {
    return {
        type: 'CLOSE'
    }
}