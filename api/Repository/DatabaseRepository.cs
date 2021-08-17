using MongoDB.Driver;

namespace api.Repository
{
    public abstract class DatabaseRepository
    {
        private IMongoClient mongoClient;
        public string DatabaseName {get;set;}
        public string CollectionName {get;set;}
        public DatabaseRepository(IMongoClient mongoClient)
        {
            this.mongoClient = mongoClient;
        }

        public IMongoClient GetDbClient()
        {
            return mongoClient;
        }

    }
    
}