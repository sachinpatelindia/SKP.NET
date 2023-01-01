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

            _pageModels.Add(new PageModel
            {
                Id = 3,
                Author = "sk",
                CreatedOn = DateTime.Now,
                Title = "CSharp",
                FullDescription = "<div class=\"w3-example\">\r\n<h3>Example</h3>\r\n<pre class=\" w3-white language-csharp\"><code class=\" language-csharp\"><span class=\"token keyword keyword-int\">int</span> myNum <span class=\"token operator\">=</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span>               <span class=\"token comment\">// Integer (whole number)</span>\r\n<span class=\"token keyword keyword-double\">double</span> myDoubleNum <span class=\"token operator\">=</span> <span class=\"token number\">5.99</span>D<span class=\"token punctuation\">;</span>  <span class=\"token comment\">// Floating point number</span>\r\n<span class=\"token keyword keyword-char\">char</span> myLetter <span class=\"token operator\">=</span> <span class=\"token string\">'D'</span><span class=\"token punctuation\">;</span>         <span class=\"token comment\">// Character</span>\r\n<span class=\"token keyword keyword-bool\">bool</span> myBool <span class=\"token operator\">=</span> <span class=\"token keyword keyword-true\">true</span><span class=\"token punctuation\">;</span>          <span class=\"token comment\">// Boolean</span>\r\n<span class=\"token keyword keyword-string\">string</span> myText <span class=\"token operator\">=</span> <span class=\"token string\">\"Hello\"</span><span class=\"token punctuation\">;</span>     <span class=\"token comment\">// String</span>\r\n</code></pre>\r\n<p>\r\n<a target=\"_blank\" class=\"w3-btn\" href=\"trycs.php?filename=demo_data_types\">Try it Yourself »</a>\r\n</p>\r\n</div>"
            });
            return _pageModels;
        }
    }
}