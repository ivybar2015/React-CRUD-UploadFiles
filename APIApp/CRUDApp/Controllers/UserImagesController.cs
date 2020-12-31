using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using CRUDApp.Models;
using FileUploadAPI.Utilities;


//PortfolioDBEntities
namespace CRUDApp.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/userimage")]

    public class UserImagesController : ApiController
    {
        [HttpPost]
        [Route("addtodb")]
        public async Task<IHttpActionResult> addImageToDatabase()
        {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            var ctx = HttpContext.Current;
            var root = ctx.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);


            DateTime today = DateTime.Today;
            try
            {
                using (PortfolioDBEntities db = new PortfolioDBEntities())
                {
                    // Read the form data.
                    await Request.Content.ReadAsMultipartAsync(provider);
                    var uniqueFileName = "";
                    NameValueCollection formdata = provider.FormData;

                    UserImage ProfileForm = new UserImage();
                    ProfileForm.UserId = int.Parse(formdata["UserId"]);
                    ProfileForm.IsActive = true;
                    ProfileForm.IsActive = true;
                    ProfileForm.Label = formdata["Label"];
                    ProfileForm.DateUploaded = today;
                    foreach (MultipartFileData file in provider.FileData)
                    {
                        var fileName = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                        string mimeType = file.Headers.ContentType.MediaType;

                        byte[] documentData = File.ReadAllBytes(file.LocalFileName);

                        ProfileForm.ImageData = documentData;
                        ProfileForm.MimeType = mimeType;
                        ProfileForm.Size = documentData.Length;

                    }
                    db.UserImages.Add(ProfileForm);
                    db.SaveChanges();

                    return Ok("Successfully Added Image To Database");
                }

            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet]
        [Route("getdbimagelist")]
        public object getDBImageList()
        {
            try
            {
                using (PortfolioDBEntities db = new PortfolioDBEntities())
                {

                    var queryResults = db.UserImages.ToList();

                    return new { status = StatusCodes.OK.code, msg = StatusCodes.OK.msg, data = queryResults };
                }
            }
            catch (System.Exception e)
            {
                return new { status = StatusCodes.NotFound.code, msg = e.InnerException, data = 0 };
            }
        }


    }
}