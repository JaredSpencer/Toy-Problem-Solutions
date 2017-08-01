var rules = [
  {
    name: 'rule1',
    criteria: [
      {
        object: 'Person',
        field: 'name',
        operator: '=',
        value: 'Naveen'
      },
      {
        object: 'Salary',
        field: 'base',
        operator: '>',
        value: '100'
      }
    ]
  },
  {
    name: 'rule2',
    criteria: [
      {
        object: 'Person',
        field: 'name',
        operator: '=',
        value: 'Naveen'
      },
      {
        object: 'Salary',
        field: 'base',
        operator: '>',
        value: '1000'
      }
    ]
  }
]

const compare = (rules, obj) => {
  let operators = {
    '>': function(a,b) {
      return a > b;
    },
    '<': function(a,b) {
      return a < b;
    },
    '=': function(a,b) {
      return a === b;
    },
    '>=': function(a,b) {
      return a >= b;
    },
    '=<': function(a,b) {
      return a =< b;
    }
  }
  for (let i = 0; i < rules.length; i++) {
    for (let j = 0; j < rules[i].criteria.length; j++) {
      let criteria = rules[i].criteria[j];
      if ((obj instanceof criteria.object) || obj.hasOwnProperty(criteria.object)) {
        continue;
      } else {
        return false;
      }
      let expression = obj[criteria.field].toString() + criteria[operator] === '=' ? '===' : criteria[operator] + criteria.value;
      if (!eval(expression)) {
        return false;
      }
      if (!(operators[criteria[operator]](obj[criteria.field], criteria.value))) {
        return false;
      }
    }
  }
  return true;
}

/*
"
  [
    {
      "name":"rule1",
      "criteria":
        [
          {
            "object":"Person",
            "field":"name",
            "operator":"=",
            "value":"Naveen"
          },
          {
            "object":"Salary",
            "field":"base",
            "operator":">",
            "value":"100"
          }
        ]
    },
    {
      "name":"rule2",
      "criteria":
        [
          {
            "object":"Person",
            "field":"name",
            "operator":"=",
            "value":"Naveen"
          },
          {
            "object":"Salary",
            "field":"base",
            "operator":">",
            "value":"1000"
          }
        ]
    }
  ]
"
*/

Person {
  name,
  salary
}

Salary {
  base,
  bonus
}



// Questions you weren't able to answer:
  // how to use the string operators ">" or "=" in actual operations? How do you build expressions from strings?
  // Where do you make AJAX requests when posting console.log reports to the server?
  // how do you make comparisons when you don't know the comparison criteria until pass in as an argument.
