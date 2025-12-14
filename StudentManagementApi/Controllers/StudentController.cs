using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudentManagementApi.Data;
using StudentManagementApi.Models;

[ApiController]
[Route("api/[controller]")]
[Authorize] 
public class StudentsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public StudentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetStudents()
    {
        return Ok(_context.Students.ToList());
    }

    [HttpPost]
    public IActionResult AddStudent(Student student)
    {
        _context.Students.Add(student);
        _context.SaveChanges();
        return Ok(student);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateStudent(int id, Student student)
    {
        var existing = _context.Students.Find(id);
        if (existing == null) return NotFound();

        existing.Name = student.Name;
        existing.Class = student.Class;
        existing.Section = student.Section;

        _context.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteStudent(int id)
    {
        var student = _context.Students.Find(id);
        if (student == null) return NotFound();

        _context.Students.Remove(student);
        _context.SaveChanges();
        return Ok();
    }
}
