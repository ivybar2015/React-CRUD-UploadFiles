using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDApp.UserFormModel
{
    public class AddNewUser
    {
        public string userName { get; set; }
        public string passWord { get; set; }
        public string firstName { get; set; }
        //public string email { get; set; }
        public string isActive { get; set; }
    }
}