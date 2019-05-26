$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature.feature");
formatter.feature({
  "line": 1,
  "name": "VZW.20Requirements",
  "description": "",
  "id": "vzw.20requirements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2457268900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Negative Login",
  "description": "",
  "id": "vzw.20requirements;negative-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Step123"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "loginPageExists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enterWrongLogin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verifyLoginScreenshotIfFailed",
  "keyword": "Then "
});
formatter.match({
  "location": "TEST123.loginPageExists()"
});
formatter.result({
  "duration": 3915002600,
  "status": "passed"
});
formatter.match({
  "location": "TEST123.enterWrongLogin()"
});
formatter.result({
  "duration": 2813875000,
  "status": "passed"
});
formatter.match({
  "location": "TEST123.verifyLoginScreenshotIfFailed()"
});
formatter.result({
  "duration": 44291500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat TestDef.TEST123.verifyLoginScreenshotIfFailed(TEST123.java:30)\r\n\tat ✽.Then verifyLoginScreenshotIfFailed(feature.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1720645100,
  "status": "passed"
});
formatter.before({
  "duration": 1172351700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Positive Login with Dynamic Xpath",
  "description": "",
  "id": "vzw.20requirements;positive-login-with-dynamic-xpath",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Step4"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "loginPageExists4",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enterCorrectLogin",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verifyLoginScreenshotIfFailed4",
  "keyword": "Then "
});
formatter.match({
  "location": "TEST4.loginPageExists4()"
});
formatter.result({
  "duration": 3099041600,
  "status": "passed"
});
formatter.match({
  "location": "TEST4.enterCorrectLogin()"
});
formatter.result({
  "duration": 1775206800,
  "status": "passed"
});
formatter.match({
  "location": "TEST4.verifyLoginScreenshotIfFailed4()"
});
formatter.result({
  "duration": 4402309800,
  "status": "passed"
});
formatter.after({
  "duration": 695982600,
  "status": "passed"
});
formatter.before({
  "duration": 1394334200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login and Go to Smartphones",
  "description": "",
  "id": "vzw.20requirements;login-and-go-to-smartphones",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Step456"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "loginPageExists456",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "enterCorrectLogin456",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "gotoWireless",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "selectSmartphones",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verifyResult456",
  "keyword": "And "
});
formatter.match({
  "location": "TEST456.loginPageExists456()"
});
formatter.result({
  "duration": 3936154100,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.enterCorrectLogin456()"
});
formatter.result({
  "duration": 1666218000,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.gotoWireless()"
});
formatter.result({
  "duration": 4898629900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"active-bar\"\u003e...\u003c/span\u003e is not clickable at point (243, 25). Other element would receive the click: \u003cdiv class\u003d\"page-loader\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-SBI06AA\u0027, ip: \u0027192.168.136.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\Minh\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51875}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 42e63453079eeec6292c4ac87d136132\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat Pages.Page456.clickWireless(Page456.java:28)\r\n\tat TestDef.TEST456.gotoWireless(TEST456.java:34)\r\n\tat ✽.When gotoWireless(feature.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TEST456.selectSmartphones()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TEST456.verifyResult456()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1185591200,
  "status": "passed"
});
formatter.before({
  "duration": 1405227400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select SamsungS10+",
  "description": "",
  "id": "vzw.20requirements;select-samsungs10+",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Step789"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "smartphonesPageExists",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "selectGalaxy10SPlus",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "pickColor",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "addtoCart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verifyResult789",
  "keyword": "Then "
});
formatter.match({
  "location": "TEST789.smartphonesPageExists()"
});
formatter.result({
  "duration": 4513003400,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.selectGalaxy10SPlus()"
});
formatter.result({
  "duration": 13260781100,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.pickColor()"
});
formatter.result({
  "duration": 584398000,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.addtoCart()"
});
formatter.result({
  "duration": 480309000,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.verifyResult789()"
});
formatter.result({
  "duration": 103933300,
  "status": "passed"
});
formatter.after({
  "duration": 654802900,
  "status": "passed"
});
});