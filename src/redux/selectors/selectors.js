
// значение берем через стор

export const getContactsList = state => {
	// console.log(state.contacts.items);
	return state.contacts.items;
};
export const getIsLoading = state => {
	// console.log(state.contacts.isLoading);
	return state.contacts.isLoading;
}
export const getError = state => {
	// console.log(state.contacts.error);
	return state.contacts.error
}
export const getFilterValue = state => state.filter.filter;