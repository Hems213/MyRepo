const dataset = [
    {
    "name": "Abhishek",
    "salary": "145000",
    "currency": "USD",
    "department": "Engineering",
    "on_contract":"false",
    "sub_department": "Platform"
    },
    {
    "name": "Anurag",
    "salary": "90000",
    "currency": "USD",
    "department": "Banking",
    "on_contract": "true",
    "sub_department": "Loan"
    },
    {
    "name": "Himani",
    "salary": "240000",
    "currency": "USD",
    "on_contract":"false",
    "department": "Engineering",
    "sub_department": "Platform"
    },
    {
    "name": "Yatendra",
    "salary": "30",
    "currency": "USD",
    "on_contract":"false",
    "department": "Operations",
    "sub_department": "CustomerOnboarding"
    },
    
    {
    "name": "Ragini",
    "salary": "30",
    "currency": "USD",
    "on_contract":"false",
    "department": "Engineering",
    "sub_department": "Platform"
    },
    {
    "name": "Nikhil",
    "salary": "110000",
    "currency": "USD",
    "on_contract": "true",
    "department": "Engineering",
    "sub_department": "Platform"
    },
    {
    "name": "Guljit",
    "salary": "30",
    "currency": "USD",
    "department": "Administration",
    "on_contract":"false",
    "sub_department": "Agriculture"
    },
    {
    "name": "Himanshu",
    "salary": "70000",
    "currency": "EUR",
    "on_contract":"false",
    "department": "Operations",
    "sub_department": "CustomerOnboarding"
    },
    {
    "name": "Anupam",
    "salary": "200000000",
    "currency": "INR",
    "on_contract":"false",
    "department": "Engineering",
    "sub_department": "Platform"
    }
    ]
    getDataSet = () => {
        return dataset
    }

    module.exports = {
        getDataSet
    }