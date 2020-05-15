module.exports = async function batchModel(model, batchSize, lastId = null) {

    return await model
        .find( lastId ? {link_id: { $gt: lastId}} : {})
        .sort({link_id: 1})
        .limit(batchSize);
        
        
}