
var params = {
     TableName:'MyTable',
     Key:{
         "id": 101 
     },
     UpdateExpression: "set rating = rating + :val",
     ExpressionAttributeValues:{
         ":val":1
     },
     ReturnValues:"UPDATED_NEW"
};
console.log("Updating the item...");
docClient.update(params, function(err, data) {
     if (err) {
         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
     } else {
         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
     } 
});



