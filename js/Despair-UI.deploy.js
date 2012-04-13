smalltalk.addPackage('Despair-UI', {});
smalltalk.addClass('Project', smalltalk.Widget, ['repo', 'pulls'], 'Despair-UI');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@repo']=nil);
return self;}
}),
smalltalk.Project);

smalltalk.addMethod(
unescape('_withRepo_andPullRequests_'),
smalltalk.method({
selector: unescape('withRepo%3AandPullRequests%3A'),
fn: function (aRepo, anArrayOfRequests){
var self=this;
(self['@repo']=aRepo);
(self['@pulls']=anArrayOfRequests);
return self;}
}),
smalltalk.Project);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [self['@repo']]);smalltalk.send($rec, "_class_", ["project_tile"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [self['@repo']]);return (function($rec){smalltalk.send($rec, "_class_", ["pull_requests"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self['@pulls'], "_do_", [(function(pull){return (function($rec){smalltalk.send($rec, "_withPull_", [pull]);return smalltalk.send($rec, "_renderOn_", [html]);})(smalltalk.send((smalltalk.PullRequestTile || PullRequestTile), "_new", []));})]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(html, "_br", []);
return self;}
}),
smalltalk.Project);



smalltalk.addClass('PullRequestTile', smalltalk.Widget, ['pull', 'minutesOld', 'lastUpdatedText'], 'Despair-UI');
smalltalk.addMethod(
unescape('_withPull_'),
smalltalk.method({
selector: unescape('withPull%3A'),
fn: function (aPullRequest){
var self=this;
(self['@pull']=aPullRequest);
return self;}
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@lastUpdatedText']=smalltalk.send(self, "_lastUpdated", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send("pull_request_tile sadness_", "__comma", [smalltalk.send(smalltalk.send(self, "_sadness", []), "_asString", [])])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@pull'], "_url", [])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@pull'], "_title", [])]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_br", []);smalltalk.send(html, "_with_", [smalltalk.send("Last updated: ", "__comma", [self['@lastUpdatedText']])]);smalltalk.send(html, "_br", []);smalltalk.send(html, "_with_", [smalltalk.send("Created: ", "__comma", [smalltalk.send(self, "_readableTime_", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_now", []), "_secondsDifference_", [smalltalk.send(self['@pull'], "_createdAt", [])])])])]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_lastUpdated'),
smalltalk.method({
selector: unescape('lastUpdated'),
fn: function (){
var self=this;
var delta=nil;
(delta=smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_now", []), "_secondsDifference_", [smalltalk.send(self['@pull'], "_updatedAt", [])]));
(self['@minutesOld']=((($receiver = delta).klass === smalltalk.Number) ? $receiver /(60) : smalltalk.send($receiver, "__slash", [(60)])));
return smalltalk.send(self, "_readableTime_", [delta]);
return self;}
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_sadness'),
smalltalk.method({
selector: unescape('sadness'),
fn: function (){
var self=this;
try{((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (60) : smalltalk.send($receiver, "__gt", [(1440) * (60)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("veryhigh")}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("veryhigh")}})})();})]));
((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (14) : smalltalk.send($receiver, "__gt", [(1440) * (14)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("high")}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("high")}})})();})]));
((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (5) : smalltalk.send($receiver, "__gt", [(1440) * (5)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("medium")}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("low")}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("medium")}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("low")}})})();})]));
(function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("bug")}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_sadness'){return e.fn()} throw(e)}}
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@minutesOld']=(0));
return self;}
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_readableTime_'),
smalltalk.method({
selector: unescape('readableTime%3A'),
fn: function (someSeconds){
var self=this;
try{var places=nil;
(places=(1));
((($receiver = ((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver >(86400) : smalltalk.send($receiver, "__gt", [(86400)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(86400) : smalltalk.send($receiver, "__slash", [(86400)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" days ago"])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(86400) : smalltalk.send($receiver, "__slash", [(86400)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" days ago"])}})})();})]));
(function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(60) : smalltalk.send($receiver, "__slash", [(60)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" minutes ago"])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_readableTime_'){return e.fn()} throw(e)}}
}),
smalltalk.PullRequestTile);



