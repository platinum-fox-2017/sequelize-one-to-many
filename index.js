const Address = require('./controllers/address.js')

if (process.argv[2] === 'address:list'){
    Address.list()
}else if (process.argv[2] === 'address:add'){
    Address.add(process.argv[3], process.argv[4], process.argv[5], process.argv[6])
}else if(process.argv[2] === 'address:update'){
    Address.update(process.argv[3], process.argv[4], process.argv[5])    
}else if (process.argv[2] === 'address:delete'){
    Address.delete(process.argv[3] )
}