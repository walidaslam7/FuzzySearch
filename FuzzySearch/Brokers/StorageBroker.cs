using Microsoft.EntityFrameworkCore;

namespace FuzzySearch.Brokers;

public class StorageBroker : DbContext
{
    private readonly string? _connectionString;
    public StorageBroker(DbContextOptions<StorageBroker> options) : base(options) {
    }
    public StorageBroker()
    {
        var config = new ConfigurationBuilder()
       .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true).Build();
        _connectionString = config.GetConnectionString("SQLConnection");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
        optionsBuilder.UseSqlServer(_connectionString ?? string.Empty);


    [DbFunction(Name = "SOUNDEX", IsBuiltIn = true)]
    public static string SoundsLike(string query) => throw new NotImplementedException();

    public DbSet<Users> Users { get; set; }
}
