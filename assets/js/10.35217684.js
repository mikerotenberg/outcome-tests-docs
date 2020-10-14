(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(t,e,s){"use strict";s.r(e);var r=s(28),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"azure-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-setup"}},[t._v("#")]),t._v(" Azure Setup")]),t._v(" "),s("h2",{attrs:{id:"automated-testing-app-pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-testing-app-pipeline"}},[t._v("#")]),t._v(" Automated Testing App Pipeline")]),t._v(" "),s("p",[t._v("Go into Azure and import "),s("a",{attrs:{href:"https://github.com/mikerotenberg/outcome-tests/blob/master/Automated%20Testing%20App.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),s("OutboundLink")],1),t._v(" pipeline.")]),t._v(" "),s("p",[t._v("Next, select "),s("em",[s("strong",[t._v("windows-2019")])]),t._v(" for the agent pool specification.")]),t._v(" "),s("h2",{attrs:{id:"resources-pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources-pipeline"}},[t._v("#")]),t._v(" Resources Pipeline")]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"https://github.com/mikerotenberg/outcome-tests-resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("this template repository"),s("OutboundLink")],1),t._v(" to create a new resource repository for your site.")]),t._v(" "),s("p",[t._v("Once you've created your resource repository, edit the "),s("em",[s("strong",[t._v(".runsettings")])]),t._v(" file in the "),s("em",[s("strong",[t._v("RunSettings")])]),t._v(" folder and edit the test data files in the TestData folder to fit your site. Refer to the "),s("RouterLink",{attrs:{to:"/tests/"}},[t._v("Tests")]),t._v(" guide for what each test expects in its data file.")],1),t._v(" "),s("p",[t._v("Once done, go into Azure and create a new pipeline called "),s("em",[t._v("Automated Testing App Resources")]),t._v(" using the GitHub repository you created using the template. Make sure to select the existing "),s("em",[t._v("azure-pipelines.yml")]),t._v(" file as your configuration file of choice.")]),t._v(" "),s("h2",{attrs:{id:"release-pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#release-pipeline"}},[t._v("#")]),t._v(" Release Pipeline")]),t._v(" "),s("p",[t._v("Create a release pipeline and add the "),s("em",[s("strong",[t._v("Resources Pipeline")])]),t._v(" and "),s("em",[s("strong",[t._v("Automated Testing App Pipeline")])]),t._v(" as artifacts.")]),t._v(" "),s("p",[t._v("Next, add an empty stage.")]),t._v(" "),s("p",[t._v("Click into the stage and click "),s("em",[s("strong",[t._v("Run on agent")])]),t._v(".")]),t._v(" "),s("p",[t._v("Select "),s("em",[s("strong",[t._v("windows-2019")])]),t._v(" for your agent pool specification.")]),t._v(" "),s("h2",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[t._v("#")]),t._v(" Tasks")]),t._v(" "),s("h3",{attrs:{id:"copy-runsettings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-runsettings"}},[t._v("#")]),t._v(" Copy .runsettings")]),t._v(" "),s("p",[t._v("Add a new "),s("em",[s("strong",[t._v("Copy Files")])]),t._v(" task with the following settings:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Setting")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Source Folder")])]),t._v(" "),s("td",[t._v("$(System.DefaultWorkingDirectory)/_Automated Testing App Resources/drop/RunSettings")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Contents")])]),t._v(" "),s("td",[t._v("**")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Target Folder")])]),t._v(" "),s("td",[t._v("d:/a/r1/a/_Automated Testing App/drop/")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Overwrite")])]),t._v(" "),s("td",[t._v("Checked")])])])]),t._v(" "),s("h3",{attrs:{id:"copy-testdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-testdata"}},[t._v("#")]),t._v(" Copy TestData")]),t._v(" "),s("p",[t._v("Add a new "),s("em",[s("strong",[t._v("Copy Files")])]),t._v(" task with the following settings:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Setting")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Source Folder")])]),t._v(" "),s("td",[t._v("$(System.DefaultWorkingDirectory)/_Automated Testing App Resources/drop/TestData")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Contents")])]),t._v(" "),s("td",[t._v("**")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Target Folder")])]),t._v(" "),s("td",[t._v("d:/a/r1/a/_Automated Testing App/drop/TestData")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Overwrite")])]),t._v(" "),s("td",[t._v("Checked")])])])]),t._v(" "),s("h3",{attrs:{id:"copy-drivers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-drivers"}},[t._v("#")]),t._v(" Copy Drivers")]),t._v(" "),s("p",[t._v("Add a new "),s("em",[s("strong",[t._v("Copy Files")])]),t._v(" task with the following settings:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Setting")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Source Folder")])]),t._v(" "),s("td",[t._v("$(System.DefaultWorkingDirectory)/_Automated Testing App Resources/drop/Drivers")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Contents")])]),t._v(" "),s("td",[t._v("**")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Target Folder")])]),t._v(" "),s("td",[t._v("d:/a/r1/a/_Automated Testing App/drop/")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Overwrite")])]),t._v(" "),s("td",[t._v("Checked")])])])]),t._v(" "),s("h3",{attrs:{id:"run-selenium-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-selenium-tests"}},[t._v("#")]),t._v(" Run Selenium Tests")]),t._v(" "),s("p",[t._v("Add a new "),s("em",[s("strong",[t._v(".NET Core")])]),t._v(" task with the following settings:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Setting")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Command")])]),t._v(" "),s("td",[t._v("custom")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Path to project(s)")])]),t._v(" "),s("td",[t._v("**/OutcomeTests.dll")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Custom command")])]),t._v(" "),s("td",[t._v("vstest")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Arguments")])]),t._v(" "),s("td",[t._v('--logger:"trx;LogFileName=TEST.xml" --settings:"d:/a/r1/a/_Automated Testing App/drop/.runsettings"')])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Continue on error")])]),t._v(" "),s("td",[t._v("Checked")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can customize "),s("em",[s("strong",[t._v("Arguments")])]),t._v(" to add additional settings or filters. See "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"publish-test-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish-test-results"}},[t._v("#")]),t._v(" Publish Test Results")]),t._v(" "),s("p",[t._v("Add a new "),s("em",[s("strong",[t._v("Publish Test Results")])]),t._v(" task with the following settings:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Setting")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Test result format")])]),t._v(" "),s("td",[t._v("VSTest")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Test result files")])]),t._v(" "),s("td",[t._v("**/TEST.xml")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Search folder")])]),t._v(" "),s("td",[t._v("$(System.DefaultWorkingDirectory)")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Merge test results")])]),t._v(" "),s("td",[t._v("Checked")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Test run title")])]),t._v(" "),s("td",[t._v("Selenium Tests")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Upload test results files")])]),t._v(" "),s("td",[t._v("Checked")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);