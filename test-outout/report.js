$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature.feature");
formatter.feature({
  "line": 1,
  "name": "VZW.20Requirements",
  "description": "",
  "id": "vzw.20requirements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3279623800,
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
  "duration": 33219870000,
  "status": "passed"
});
formatter.match({
  "location": "TEST123.enterWrongLogin()"
});
formatter.result({
  "duration": 29959178200,
  "status": "passed"
});
formatter.match({
  "location": "TEST123.verifyLoginScreenshotIfFailed()"
});
formatter.result({
  "duration": 47730900,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat TestDef.TEST123.verifyLoginScreenshotIfFailed(TEST123.java:30)\r\n\tat ✽.Then verifyLoginScreenshotIfFailed(feature.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5862636100,
  "status": "passed"
});
formatter.before({
  "duration": 1531552300,
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
  "duration": 29950123500,
  "status": "passed"
});
formatter.match({
  "location": "TEST4.enterCorrectLogin()"
});
formatter.result({
  "duration": 1997570200,
  "status": "passed"
});
formatter.match({
  "location": "TEST4.verifyLoginScreenshotIfFailed4()"
});
formatter.result({
  "duration": 18569715600,
  "status": "passed"
});
formatter.after({
  "duration": 1121745400,
  "status": "passed"
});
formatter.before({
  "duration": 1581637800,
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
  "duration": 35137091900,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.enterCorrectLogin456()"
});
formatter.result({
  "duration": 7264838400,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.gotoWireless()"
});
formatter.result({
  "duration": 55434633400,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.selectSmartphones()"
});
formatter.result({
  "duration": 5768037400,
  "status": "passed"
});
formatter.match({
  "location": "TEST456.verifyResult456()"
});
formatter.result({
  "duration": 62696000,
  "status": "passed"
});
formatter.after({
  "duration": 1155564600,
  "status": "passed"
});
formatter.before({
  "duration": 1852692200,
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
  "duration": 41079036800,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.selectGalaxy10SPlus()"
});
formatter.result({
  "duration": 38955696900,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.pickColor()"
});
formatter.result({
  "duration": 491294700,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.addtoCart()"
});
formatter.result({
  "duration": 836424200,
  "status": "passed"
});
formatter.match({
  "location": "TEST789.verifyResult789()"
});
formatter.result({
  "duration": 261184600,
  "status": "passed"
});
formatter.after({
  "duration": 1168021000,
  "status": "passed"
});
});