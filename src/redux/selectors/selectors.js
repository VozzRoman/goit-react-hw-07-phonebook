
// значение берем через стор

export const selectContactsList = state => {
	// console.log(state.contacts.items);
	return state.contacts.items;
};
export const selectIsLoading = state => {
	// console.log(state.contacts.isLoading);
	return state.contacts.isLoading;
}
export const selectError = state => {
	// console.log(state.contacts.error);
	return state.contacts.error
}
export const selectFilterValue = state => state.filter.filter;