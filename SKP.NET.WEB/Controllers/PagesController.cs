using Microsoft.AspNetCore.Mvc;
using SKP.NET.WEB.Models;

namespace SKP.NET.WEB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PagesController : ControllerBase
    {
        private List<PageModel> _pageModels;

        private readonly ILogger<PagesController> _logger;

        public PagesController(ILogger<PagesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<PageModel> Get()
        {
            return GetPagesModels();
        }

        private List<PageModel> GetPagesModels()
        {
            _pageModels = new List<PageModel>();
            _pageModels.Add(new PageModel
            {
                Id=1,
                Author = "sk",
                CreatedOn = DateTime.Now,
                Title= "React",
                FullDescription = "<p>You should also have some experience with the new JavaScript features \r\nintroduced in ECMAScript 6 (ES6), you will learn about them in the <a href=\"react_es6.asp\">React ES6</a> chapter.</p>"
            });

            _pageModels.Add(new PageModel
            {
                Id=2,
                Author = "sk",
                CreatedOn = DateTime.Now,
                Title = "HTML",
                FullDescription = "<table>\r\n  <tr>\r\n    <th>Company</th>\r\n    <th>Contact</th>\r\n    <th>Country</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Alfreds Futterkiste</td>\r\n    <td>Maria Anders</td>\r\n    <td>Germany</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Centro comercial Moctezuma</td>\r\n    <td>Francisco Chang</td>\r\n    <td>Mexico</td>\r\n  </tr>\r\n</table>"
            });
            return _pageModels;
        }
    }
}