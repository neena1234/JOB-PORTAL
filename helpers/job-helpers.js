var db = require('../config/connection');
var collection = require('../config/collections');
module.exports = {
    addJobs:(job,callback)=>{
        db.get().collection(collection.JOB_COLLECTION).insertOne(job).then((data)=>{
            callback(true)
        })
    },
    getAllJobs:()=>{
        return new Promise(async (resolve,reject)=>{
            let jobs = await db.get().collection(collection.JOB_COLLECTION).find().toArray()
            resolve(jobs)
        })
    }
}