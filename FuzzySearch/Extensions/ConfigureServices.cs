using FuzzySearch.Brokers;
using System.Text.Json;

namespace FuzzySearch.Extensions;

public static class ConfigureServices
{
    public static void RegisterServices(this IServiceCollection serviceCollection)
    {
        // Seed data
        var dbContext = new StorageBroker();
        dbContext.Database.EnsureCreated();

        if (!dbContext.Users.Any())
        {
            string jsonData = File.ReadAllText("data.json");
            var deserialize = JsonSerializer.Deserialize<List<Users>>(jsonData) ?? new();
            dbContext.Users.AddRange(deserialize);

            dbContext.SaveChanges();
        }
    }
}
