namespace ClassLibraryModel
{
    public class Event
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime Date { get; set; }
        public string? Time { get; set; }
        public string? Description { get; set; }
        public bool IsSelected { get; set; }
        public string? TimeZone { get; set; }
        public TimeSpan? StartTime { get; set; }  // Change to TimeSpan
        public TimeSpan? EndTime { get; set; }    // Change to TimeSpan
        public string? Location { get; set; }
        public bool MultipleDates { get; set; }
        public string? Type { get; set; }

    }
}
