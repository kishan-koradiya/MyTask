// Ans 1
function lengthOfNum(nums) {
    if (nums.length === 0) return 0;
    const NewArray = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {

        for (let j = 0; j < i; j++) {

            if (nums[i] > nums[j]) {

                NewArray[i] = Math.max(NewArray[i], NewArray[j] + 1);

            }
        }
    }

    return Math.max(...dp);
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfNum(nums));


// Ans 2

function findPair(arr, sum) {

    const valueToIndexMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const difference = sum - arr[i];

        if (valueToIndexMap.has(difference)) {
            return [valueToIndexMap.get(difference), i];
        }

        valueToIndexMap.set(arr[i], i);
    }

    throw new Error("Not a valid pair");
}

const arr = [2, 7, 11, 15];
const sum = 9;

try {
    const result = findPair(arr, sum);
    console.log(result); 
} catch (error) {
    console.error(error.message);
}


// Ans 3

db.sales.aggregate([
    {
      $project: {
        store: 1,
        month: { $dateToString: { format: "%Y-%m", date: "$date" } },
        items: {
          name: 1,
          quantity: 1,
          price: 1,
          revenue: { $multiply: ["$items.quantity", "$items.price"] }
        }
      }
    },
    {
      $unwind: "$items"
    },
    {
      $group: {
        _id: { store: "$store", month: "$month" },
        totalRevenue: { $sum: "$items.revenue" },
        averagePrice: { $avg: "$items.price" }
      }
    },
    {
      $project: {
        _id: 0,
        store: "$_id.store",
        month: "$_id.month",
        totalRevenue: 1,
        averagePrice: 1
      }
    },
    {
      $sort: { store: 1, month: 1 }
    }
  ]);
  
  