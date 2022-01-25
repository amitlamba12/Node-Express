const {MongoClient}=require('mongodb')
const uri = "mongodb://localhost/emp";
const client = new MongoClient(uri);
async function main(){
 
    try {
        await client.connect();
        let result = await client.db().collection('user2').deleteMany({Techonology :"React JS"});
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();