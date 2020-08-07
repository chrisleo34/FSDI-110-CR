using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PropertyRental.Models;
using PropertyRental.Controllers;


namespace PropertyRental.Controllers
{

    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext db)
        {
            this.dbContext = db;
        }
        public IActionResult Test()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }


        [HttpGet]
        
        public IActionResult GetCatalog(){
            var list = dbContext.Properties.Take(100).ToList();
            
            return Json(list);
        }
        
        [HttpPost]

        public IActionResult RegisterProperty([FromBody] Property p)
        {
            Console.WriteLine("User is saving Property info");

            dbContext.Properties.Add(p);
            dbContext.SaveChanges();

            return Json(p);
        }
    }
}


