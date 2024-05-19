function sendData() {
    var cookie = document.cookie;
    var url = 'http://dwmp-sit.dev.citicsf.com:8091/SilverSoftFramework/SilverSoft.Robot.ashx';
    var data = 'PageSize=20&PageIndex=1&ActionName=CiticsfPalmHall.Menu.QueryUserInfo&robotHandlerAction67DB9FDE26C8B3=SilverSoft.Robot.ashx&GoogleChromeXXID=4F29E1B5-555F-47CE-9DAE-8481916CBAA5&Expand_ExtraString001=&_requestbeginTime=9%3A55%3A12.595&_requestAutoIsQuery=true&_requestAutoField=%2CRowNum%2CEmployeeCode%2CPersonCode%2CRealName%2CUserType%2CUserInfoID%2C';

    var fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Encoding': 'gzip, deflate',
            'Cookie': cookie,
            // add other headers
        },
        body: data
    };

    fetch(url, fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(json => {
            // handle your json
        })
        .catch(function () {
            this.dataError = true;
        })
}
sendData();