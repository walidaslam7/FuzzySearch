using FuzzySearch.Brokers;
using Microsoft.AspNetCore.Mvc;

namespace FuzzySearch.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly StorageBroker _storageBroker;
    public UsersController()
    {
        _storageBroker = new();
    }
    public IQueryable<Users> GetUsers(string? query)
    {
        if (string.IsNullOrEmpty(query))
            return _storageBroker.Users;
        else
            return _storageBroker.Users.Where(user =>
                      StorageBroker.SoundsLike(user.FirstName) == StorageBroker.SoundsLike(query)
                    || StorageBroker.SoundsLike(user.LastName) == StorageBroker.SoundsLike(query)).Distinct();
    }
}
