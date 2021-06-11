describe('', () => {
    it('', () => {
        browser.url("http://www.testyou.in/Login.aspx")
        browser.pause(3000)
        
        var username = $("#ctl00_CPHContainer_txtUserLogin")
        browser.pause(5000)

        username.setValue("pradeep")
        // var value = username.getAttribute("value")
        var value = username.getValue()
        console.log("=================="+value);

    });
    
});
// "@wdio/cli": "^7.0.1",