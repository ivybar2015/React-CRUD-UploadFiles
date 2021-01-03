using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using CRUDApp.Models;
using CRUDApp.UserFormModel;

//PortfolioDBEntities
namespace CRUDApp.Controllers
{
    // ADD THIS FOR ALL APP CAN ACCESS IT
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    [RoutePrefix("api/users")]

    public class UsersController : ApiController
    {
        private PortfolioDBEntities db = new PortfolioDBEntities();

        //////////  ALL ACTION METHODS   ////////////////////

        [HttpGet]
        [Route("allusers")]
        public object GetAllUserData()
        {
            try
            {
                // get record table datas
                var dataRecord = db.Users.Where(col => col.IsActive == true).ToList();

                if (dataRecord == null)
                {
                    // No Match
                    return new { status = "401", message = "cannot get all user" };
                }
                else
                {
                    return new { db = dataRecord };
                    // User is authenticated                    
                }

            }
            catch (Exception e)
            {

                return new { status = "401", message = "Server Error " + e.InnerException };
            }
        }

        /// ADD MORE USER TO TABLE

        [HttpPost]
        [Route("addusers")]
        public object AddUsers(AddNewUser getinput) 
        {
            try
            {
                // object name of newRecordTable
                User newRecordTable = new User();
                
                newRecordTable.Username = getinput.userName;
                newRecordTable.Password = getinput.passWord;
                newRecordTable.FirstName = getinput.firstName;
                newRecordTable.LastName = getinput.lastName;
                newRecordTable.IsActive = true;
                newRecordTable.DateCreated = DateTime.Now;

                db.Users.Add(newRecordTable);
                db.SaveChanges();

                return new { status = 200, msg = "Success", db = newRecordTable };


            }
            catch (Exception e)
            {

                return new { status = 404, msg = "Error" + e.InnerException };
            }



        }
        //////////////////////////////////
        [HttpPost]
        [Route("login")]
        public object userlogin(UserLogin getinput)
        {
            var recordcheck = db.Users.Where(col => col.Username == getinput.userName && col.Password == getinput.passWord).ToList();
            try
            {
                if (recordcheck == null)
                    return new { status = 404, msg = "Cannot login " };
                else
                    return new { status = 200, msg = "Success", db = recordcheck };


            }
            catch (Exception e)
            {

                return new { status = 404, msg = "Error" + e.InnerException };


            }
        }


        //////////////////////////////////
        [HttpPost]
        [Route("deleteuser")]
        public object DelteUserData(int id)
        {
            User userRecord = db.Users.Find(id);
            if (userRecord == null)
            {
                return NotFound();
            }

            db.Users.Remove(userRecord);
            db.SaveChanges();

            return Ok(userRecord);
        }
        ///////////////////////////
        [HttpPost]
        [Route("edituser")]
        public object EditUserData(UpdateUser ginput)
        {
            try
            {
                var getinput = db.Users.Find(ginput.Id);
                if (getinput != null)
                {
                    if (getinput.Username != ginput.useName)
                        getinput.Username = ginput.useName;

                    if (getinput.Username == ginput.useName)
                        getinput.Username = getinput.Username;

                    if (getinput.FirstName != ginput.firstName)
                        getinput.FirstName = ginput.firstName;

                    if (getinput.FirstName == ginput.firstName)
                        getinput.FirstName = getinput.FirstName;

                    // save the changing data table
                    db.SaveChanges();
                    return new { status = 200, msg = "Success", db = getinput };


                }

                return null;


            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }
        ////////////////////
        [HttpPost]
        [Route("searchuser")]
        public object SearchUserData(SearchUserName1 ginput)
        {


            var recordcheck = db.Users.Where(col => col.LastName == ginput.lastName);
            try
            {
               // var getinput = db.Users.Find(ginput.lastName);
                if (recordcheck != null)
                {
     
                    return new { status = 200, msg = "Success", db = recordcheck };


                }

                return null;


            }
            catch (Exception e)
            {
                return new { status = 404, msg = "Error" + e.InnerException };

            }

        }

        ////////////////////
        /// <param name="disposing"></param>

        //[HttpGet]
        //[Route("valueusers")]
        //public  IEnumerable GetAllUservalua()
        //{
        //    Global.LogMessage("Data from Controller");
        //    return new string[] { "value1", "value2" };
        //}
        //////////////////////

        //[HttpGet]
        //[Route("valueusers/{5}")]
        //public string GetAllUservalua(string id)
        //{
        //    Global.LogMessage("Request param : " + id);
        //    return "value";
        //}
        ///// ///////////////////////////

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserRecordExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}