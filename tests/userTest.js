const { request } = require('http');

const chakram = require("chakram"),
  expect = chakram.expect;

describe("User TEST Case", function () {
  
    it("GETexample/v2/user/", function () {
    // Test kodlarınız
    var userName = "test678g";
   
    const response = chakram.get("https://petstore.swagger.io/v2/user/" + userName);

    return response.then(function (res) {
     // console.log(res);
      expect(res).to.have.status(200);
    });
  });
  
    it("POSTexample/v2/user", function () {
    // Test kodlarınız
    const userinfo = {
        "id": 78799781,
        "username": "test678g",
        "firstName": "test",
        "lastName": "qa",
        "email": "testqa@udemig.com",
        "password": "test123",
        "phone": "45454554554",
        "userStatus": 1
      };

      const response = chakram.post("https://petstore.swagger.io/v2/user" ,userinfo);
      return response.then(function (res){
          //console.log(res);
          expect(res).to.have.status(200); 
          expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'}); 
         });
   
      });
    it("GetLoginexample/v2/user/login", function () {

        const user = {
        "username ": "test678g",
        "password": "test123"
      };
      const response = chakram.get("https://petstore.swagger.io/v2/user/login",{qs:user});
      return response.then(function(res){
       // console.log(res)
        expect(res).to.have.status(200);
        //expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'});
      });
    });

    it("Delete User", function(){

       const deleteUser = {
       "username" : "klkl"
        };
        const response = chakram.delete("https://petstore.swagger.io/v2/user",{qs:deleteUser});
        
        return response.then(function(res){
       //  console.log(res);
         expect(res).to.have.status(405);

        })

})

});

