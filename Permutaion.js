const Permutation = (() => {

    function factorial(number, product=1) {
        if(number < 2) {return product;} else {
            return factorial(number-1, product*number);
    }
}  

    function findByIndex(set, number) {
       
           function recursion(perm, niz, number) {
                    let d = factorial(niz.length-1);
                    let reminder = number % d;
                    let index = (number-reminder)/d;
                    if(reminder === 0) {
                        return [...perm, ...niz.splice(index-1,1), ...niz.reverse()];
                    } else {
                        return recursion( [...perm, ...niz.splice(index,1)], 
                                              niz, reminder);
                    }
           } 
        return recursion([], [...set], number);
    }

    function getIndex(set, permutation) {
        let setLocal = [...set];
        let n = set.length;
        let index = 1;
        while( n > 1) {
            let order = setLocal.findIndex((value) => value === permutation[0]);
            if(order === -1) {
                index = -1;
                n = 1;
            } else {
                        index = index + order*factorial(n-1);
                        setLocal.splice(order,1);
                        permutation.splice(0,1);
                        n=n-1;
            }
        }
        return index;
    }


    

    
    function all(set) {
        let allPermutations = [];
        function tailRecursion(x,y) {
            if(y.length === 0) {allPermutations.push(x);} else {
            for(let i=0; i<y.length; i++) {
                let niz = [...y];
                tailRecursion([...x,...niz.splice(i,1)], niz);
            }
        }
        }
        tailRecursion([], set);
        return allPermutations;
    }



    return {
        factorial: factorial,
        findByIndex: findByIndex,
        getIndex: getIndex,
        all: all
    }

})();

export default Permutation;