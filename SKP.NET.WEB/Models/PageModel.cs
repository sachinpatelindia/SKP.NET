namespace SKP.NET.WEB.Models
{
    public class PageModel
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public string? FullDescription { get; set; }
        public string? Author { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set;}
        public int? PageCount { get; set; }
        public int? PageReview { get; set;}

    }
}
