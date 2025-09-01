 const redis= require('redis');

 const redisClient= redis.createClient({
    username: 'default',
    password: 'DqMe2yg6nFNtYu8lTPsvg5ReJIjerx1l',
    socket: {
        host: 'redis-10962.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10962
    }
});

// const connectReddis= async ()=>{
    
//     await redisClient.connect();
//     console.log("connected to redis");
// }

// connectReddis();

module.exports = redisClient; 

