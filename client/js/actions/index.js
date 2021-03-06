import store from '../store'

export const asyncAddExpenseCategory = (category) => dispatch => {
	return fetch('/category', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({name: category})
	})
	.then(res => {
		if (!res.ok) {
				throw new Error(res.statusText);
		}
		return res.json();
	})
	.then(_res => {
		return dispatch(addExpenseCategory(_res.name))
	})
	.catch(error => {
		return error;
	})
}


export const asyncAddExpense = (dollars, category, description, date, dateAsNumber) => dispatch => {
	return fetch('/expense', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({category: category, 
							  cost: dollars, 
							  description: description, 
							  date: date,
							  dateAsNumber: dateAsNumber})
	})
	.then(res => {
		if (!res.ok) {
			console.log("Is there error");
			throw new Error(res.statusText);			
		}
		return res.json();
	})
	.then(_res => {
		return dispatch(addExpense(_res.cost, _res.category, _res.description, _res.date))
	})
	.catch(error => {
		return error;
	})
}


export const asyncAddCategoryGoal = (category, dollars) => dispatch => {
	return fetch('/goal', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({category: category, 
							  goal: dollars})
	})
	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);			
		}
		return res.json();
	})
	.then(_res => {
		return dispatch(addCategoryGoal(_res.category, _res.goal))
	})
	.catch(error => {
		return error;
	})
}

export const asyncFetchAllCategories = () => dispatch => {
  	return fetch('/category')
  	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
    	}
    	return res.json(); 
  	})
  	.then(_res => {
     	dispatch(fetchAllCategories(_res))
	})
  	.catch(error => {
  		return error;
	});
};

export const asyncFetchAllGoals = () => dispatch => {
  	return fetch('/goal')
  	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
    	}
    	return res.json(); 
  	})
  	.then(_res => {
     	dispatch(fetchAllGoals(_res))
	})
  	.catch(error => {
  		return error;
	});
};

export const asyncFetchAllTransactions = (category='All') => dispatch => {
  	return fetch(`/expense?category=${category}`)
  	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
    	}
    	return res.json(); 
  	})
  	.then(_res => {
     	dispatch(fetchAllTransactions(_res))
	})
  	.catch(error => {
  		return error;
	});
};


export const asyncGetCategoryTotals = () => dispatch => {
  	return fetch('/total')
  	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
    	}
    	return res.json(); 
  	})
	// Response will come back as an array of key value pairs like this:  [{food: 35}, {entertainment: 80}]
	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);			
		}
		return res.json();
	})
	.then(_res => {
		return dispatch(getCategoryTotals(_res))
	})
	.catch(error => {
		return error;
	})
}



export const ADD_EXPENSE_CATEGORY = 'ADD_EXPENSE_CATEGORY';
export const addExpenseCategory = (category) => ({
	type: ADD_EXPENSE_CATEGORY,
	category: category
})


export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (dollars, category, description, date) => ({
	type: ADD_EXPENSE,
	dollars: dollars,
	category: category,
	description: description,
	date: date
})


export const ADD_CATEGORY_GOAL = 'ADD_CATEGORY_GOAL';
export const addCategoryGoal = (category, dollars) => ({
	type: ADD_CATEGORY_GOAL,
	category: category,
	dollars: dollars
})


export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const fetchAllCategories = (categories) => ({
	type: FETCH_ALL_CATEGORIES,
	categories: categories
})

export const FETCH_ALL_GOALS = 'FETCH_ALL_GOALS';
export const fetchAllGoals = (goals) => ({
	type: FETCH_ALL_GOALS,
	goals: goals
})

export const FETCH_ALL_TRANSACTIONS = 'FETCH_ALL_TRANSACTIONS';
export const fetchAllTransactions = (transactions) => ({
	type: FETCH_ALL_TRANSACTIONS,
	transactions: transactions
})

export const CHANGE_CURRENT_CATEGORY = 'CHANGE_CURRENT_CATEGORY';
export const changeCurrentCategory = (tempCategory) => ({
	type: CHANGE_CURRENT_CATEGORY,
	tempCategory: tempCategory
})

export const GET_CATEGORY_TOTALS = 'GET_CATEGORY_TOTALS';
export const getCategoryTotals = (categoryTotals) => ({
	type: GET_CATEGORY_TOTALS,
	categoryTotals: categoryTotals
	//categoryTotals should be an array of key value pairs like this:  [{food: 35}, {entertainment: 80}]
})

export const SET_START_DATE = 'SET_START_DATE';
export const setStartDate = (selectedDate) => ({
	type: SET_START_DATE,
	startDate: selectedDate
})

export const SET_END_DATE = 'SET_END_DATE';
export const setEndDate = (selectedDate) => ({
	type: SET_END_DATE,
	endDate: selectedDate
})

