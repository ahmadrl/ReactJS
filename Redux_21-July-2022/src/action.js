
export const increment = (val) => {
    return {
        type: "deposite",
        payload: val
    }
}

export const decrement = (val) => {
    return {
        type: "withdraw",
        payload: val
    }
}