export function selectClasses(objClasses: {}) {
	return (searchClasses: string) => {
		const listNameClassSearch = searchClasses.split(" ");

		Object.entries<string>(objClasses).forEach((item) => {
			if (listNameClassSearch.includes(item[0])) {
				const index = listNameClassSearch.indexOf(item[0]);
				listNameClassSearch[index] = item[1];
				// mySelectClasses.push(item[1]);
			}
		});
		return listNameClassSearch.join(" ");
	};
}
