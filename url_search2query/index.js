const search2query = (url) => {
    try {
        const searchParams = new URL(url).searchParams;
        const query = Object.create(null);
        for (let [key, value] of searchParams) {
            query[key] = value;

            const isNumber = /^[0-9]+$/;
            const isBoolean = /true|false/;
            if (isNumber.test(value)) {
                query[`_${key}`] = Number(value);
            }
            if (isBoolean.test(value)) {
                query[`_${key}`] = value === 'true';
            }
        }
        console.log(query);
        return query;
    } catch (error) {
        console.log(error);
    }
};


// test
const url = 'http://www.google.com?num=1&isZH=true&name=test&age=18';
const query = search2query(url);
