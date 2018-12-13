/*
 Note that you can just copy-paste this code to chrome snippet https://developers.google.com/web/tools/chrome-devtools/snippets
 and do entire challange there. No setup is needed, when done, just send code back to us.
*/


/*
In this excercise you would need to write few simple functions that manipulate lists and objects. 
Feel free to implement any helper functions if you feel like, it's not required and doesn't give or subtract any
bonus points :)

1. Write a function to transform list of objects (listA) to list of objects (listB) in
    such a way that "name" would be formatted as "name-id". 
    So for example "{id: 0, name: 'A'}" should become "{id: 0, name: 'A-0'}"

 2. Write a function to transform list of objects (listA) to list of objects (listC) 
    in such a way that only object with id=2 will be changed, set it's name to "Fox". All other 
    objects should not be modified. 

 3. Write a function that does the following:
    * filters a list of objects (listA) in such a way, so new list contains only 
    items with odd ids
    * sorts items by id in ascending order
    * combines all names from all items into one string (so function returns just one string)

   
    E.g. if after filtering and sorting you got:
    [   {id: 1, name: 'A'},
        {id: 3, name: 'B'}, ]

    then result should be:

    'AB'
 */



function main() {
   const listA = [
    {id: 0, name: 'A'},
    {id: 2, name: 'C'},
    {id: 11, name: 'R'},
    {id: 4, name: 'E'},
    {id: 7, name: 'T'},
    {id: 13, name: 'Y'},
    {id: 5, name: 'C'},
    {id: 3, name: 'I'},
    {id: 6, name: 'C'},
    {id: 9, name: 'O'},
    {id: 1, name: 'V'},
   ]

    function transform(listA) {
        const putIntoListB = listA;
        for (let i=0; i < putIntoListB.length; i++) {
        putIntoListB[i].name = putIntoListB[i].name + '-' + putIntoListB[i].id;
        }
        return putIntoListB;
    };

    const listB = transform(listA);
    console.log(listB);

    function transformFox(listA) {
        const putIntoListC = listA;
        for (let j=0; j < putIntoListC.length; j++) {
            if (putIntoListC[j].id === 2) {
                putIntoListC[j].id = 'Fox';
            }
        }
        return putIntoListC;
    };

    const listC = transformFox(listA);
    console.log(listC);

    function transformOdd(listA) {
        return listA
            .filter(function(x) {
                return x.id % 2 != 0 || x.id != "Fox";
            })
            .sort(function(a, b){
                return a.id - b.id;
            })
            .map(function(y) {
                return y.name;
            })
            .join('');
    };

    const oddObject = transformOdd(listA);
    console.log(oddObject);

    
    /* 
        Task 4, using two lists, "customers" and "invoices", merge them together by "id + customerId"
    	so result is same as "invoices", but with new property "customerName" from corresponding customer attached to it
    */

    const invoices = [{
		id: 1,
		total: 10,
		customerId: 1
    }, {
		id: 2,
		total: 20,
		customerId: 2
    }, {
		id: 3,
		total: 30,
		customerId: 4
    }]

	const customers = [{
		id: 1,
		name: 'Brian'
	}, {
		id: 2,
		name: 'Mary'
	}, {
		id: 3,
		name: 'John'
	}]

	function addCustomerNamesToInvoices(invoices, customers) {
        const putIntoInvoicesWithNames = invoices;
        for (let i=0; i < invoices.length; i++) {
            putIntoInvoicesWithNames[i].name = customers[i].name;
        }
        return putIntoInvoicesWithNames;
	};

	const invoicesWithNames = addCustomerNamesToInvoices(invoices, customers);
	console.log(invoicesWithNames);

}

main()
