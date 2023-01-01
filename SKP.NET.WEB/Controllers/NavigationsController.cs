using Microsoft.AspNetCore.Mvc;
using SKP.NET.WEB.Models;

namespace SKP.NET.WEB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NavigationsController : ControllerBase
    {
        private List<NavigationModel> _navigationModels;

        private readonly ILogger<WeatherForecastController> _logger;

        public NavigationsController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<NavigationModel> Get()
        {
            return GetNavigationModels();
        }

        private List<NavigationModel> GetNavigationModels()
        {
            _navigationModels = new List<NavigationModel>();
            _navigationModels.Add(new NavigationModel {Id=1, Category="article", Description="article 1 description", Name= "i-am-indian" });
            _navigationModels.Add(new NavigationModel { Id = 2, Category = "article", Description = "article 2 description", Name = "i-am-nepali" });
            _navigationModels.Add(new NavigationModel { Id = 3, Category = "article", Description = "article 3 description", Name = "i-am-american" });
            return _navigationModels;
        }
    }
}