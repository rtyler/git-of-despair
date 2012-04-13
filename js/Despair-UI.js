smalltalk.addPackage('Despair-UI', {});
smalltalk.addClass('Project', smalltalk.Widget, ['repo', 'pulls'], 'Despair-UI');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
(self['@repo']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09repo%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Project);

smalltalk.addMethod(
unescape('_withRepo_andPullRequests_'),
smalltalk.method({
selector: unescape('withRepo%3AandPullRequests%3A'),
category: 'initializers',
fn: function (aRepo, anArrayOfRequests){
var self=this;
(self['@repo']=aRepo);
(self['@pulls']=anArrayOfRequests);
return self;},
args: ["aRepo", "anArrayOfRequests"],
source: unescape('withRepo%3A%20aRepo%20andPullRequests%3A%20anArrayOfRequests%0A%09%22Initialize%20this%20Project%20widget%20with%20aRepo%20and%20an%20Array%20of%20PullRequest%20objects%20%22%0A%09repo%20%3A%3D%20aRepo.%0A%09pulls%20%3A%3D%20anArrayOfRequests.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Project);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [self['@repo']]);smalltalk.send($rec, "_class_", ["project_tile"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [self['@repo']]);return (function($rec){smalltalk.send($rec, "_class_", ["pull_requests"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self['@pulls'], "_do_", [(function(pull){return (function($rec){smalltalk.send($rec, "_withPull_", [pull]);return smalltalk.send($rec, "_renderOn_", [html]);})(smalltalk.send((smalltalk.PullRequestTile || PullRequestTile), "_new", []));})]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(html, "_br", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20repo%3B%0A%09%09class%3A%20%27project_tile%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20h2%20with%3A%20repo.%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27pull_requests%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09pulls%20do%3A%20%5B%20%3Apull%20%7C%20PullRequestTile%20new%20withPull%3A%20pull%3B%20renderOn%3A%20html%20%5D%0A%09%09%09%09%5D.%0A%09%09%5D.%0A%09html%20br.'),
messageSends: ["id:", "class:", "with:", "h2", "do:", "withPull:", "renderOn:", "new", "div", "br"],
referencedClasses: ["PullRequestTile"]
}),
smalltalk.Project);



smalltalk.addClass('PullRequestTile', smalltalk.Widget, ['pull', 'minutesOld', 'lastUpdatedText'], 'Despair-UI');
smalltalk.addMethod(
unescape('_withPull_'),
smalltalk.method({
selector: unescape('withPull%3A'),
category: 'initializers',
fn: function (aPullRequest){
var self=this;
(self['@pull']=aPullRequest);
return self;},
args: ["aPullRequest"],
source: unescape('withPull%3A%20aPullRequest%0A%09pull%20%3A%3D%20aPullRequest.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@lastUpdatedText']=smalltalk.send(self, "_lastUpdated", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send("pull_request_tile sadness_", "__comma", [smalltalk.send(smalltalk.send(self, "_sadness", []), "_asString", [])])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@pull'], "_url", [])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@pull'], "_title", [])]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(html, "_br", []);smalltalk.send(html, "_with_", [smalltalk.send("Last updated: ", "__comma", [self['@lastUpdatedText']])]);smalltalk.send(html, "_br", []);smalltalk.send(html, "_with_", [smalltalk.send("Created: ", "__comma", [smalltalk.send(self, "_readableTime_", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_now", []), "_secondsDifference_", [smalltalk.send(self['@pull'], "_createdAt", [])])])])]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09lastUpdatedText%20%3A%3D%20self%20lastUpdated.%0A%09html%20div%0A%09%09class%3A%20%27pull_request_tile%20sadness_%27%2C%20%28self%20sadness%20asString%29%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20strong%20with%3A%20%5B%20html%20a%20href%3A%20%28pull%20url%29%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%28pull%20title%29%20%5D.%0A%09%09%09html%20br.%0A%09%09%09html%20with%3A%20%27Last%20updated%3A%20%27%2C%20lastUpdatedText.%0A%09%09%09html%20br.%0A%09%09%09html%20with%3A%20%27Created%3A%20%27%2C%20%28self%20readableTime%3A%20%28Date%20now%20secondsDifference%3A%20%28pull%20createdAt%29%29%29.%0A%09%09%09html%20br.%0A%09%09%09%22%20This%20data%20requires%20*yet%20another*%20GitHub%20API%20request%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27metadata%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20span%20with%3A%20%28pull%20commits%20asString%29%2C%20%27%20commits%27.%0A%09%09%09%09%09html%20span%20with%3A%20%28pull%20comments%20asString%29%2C%20%27%20comments%27.%0A%09%09%09%09%09html%20span%20with%3A%20%28pull%20changedFiles%20asString%29%2C%20%27%20changed%20files%27.%0A%09%09%09%5D.%22%0A%09%5D.'),
messageSends: ["lastUpdated", "class:", unescape("%2C"), "asString", "sadness", "with:", "strong", "href:", "url", "target:", "title", "a", "br", "readableTime:", "secondsDifference:", "now", "createdAt", "div"],
referencedClasses: ["Date"]
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_lastUpdated'),
smalltalk.method({
selector: unescape('lastUpdated'),
category: 'rendering',
fn: function (){
var self=this;
var delta=nil;
(delta=smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_now", []), "_secondsDifference_", [smalltalk.send(self['@pull'], "_updatedAt", [])]));
(self['@minutesOld']=((($receiver = delta).klass === smalltalk.Number) ? $receiver /(60) : smalltalk.send($receiver, "__slash", [(60)])));
return smalltalk.send(self, "_readableTime_", [delta]);
return self;},
args: [],
source: unescape('lastUpdated%0A%09%7C%20delta%20%7C%0A%09delta%20%3A%3D%20Date%20now%20secondsDifference%3A%20%28pull%20updatedAt%29.%0A%09minutesOld%20%3A%3D%20%28delta%20/%2060%29.%0A%09%5E%20self%20readableTime%3A%20delta.'),
messageSends: ["secondsDifference:", "now", "updatedAt", unescape("/"), "readableTime:"],
referencedClasses: ["Date"]
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_sadness'),
smalltalk.method({
selector: unescape('sadness'),
category: 'rendering',
fn: function (){
var self=this;
try{((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (60) : smalltalk.send($receiver, "__gt", [(1440) * (60)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("veryhigh")}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("veryhigh")}})})();})]));
((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (14) : smalltalk.send($receiver, "__gt", [(1440) * (14)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("high")}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("high")}})})();})]));
((($receiver = ((($receiver = self['@minutesOld']).klass === smalltalk.Number) ? $receiver >(1440) * (5) : smalltalk.send($receiver, "__gt", [(1440) * (5)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("medium")}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("low")}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("medium")}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("low")}})})();})]));
(function(){throw({name: 'stReturn', selector: '_sadness', fn: function(){return smalltalk.symbolFor("bug")}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_sadness'){return e.fn()} throw(e)}},
args: [],
source: unescape('sadness%0A%09%22%20More%20than%20two%20months%20old%20and%20we%27ll%20be%20super%20pissed%22%0A%09minutesOld%20%3E%20%281440%20*%2060%29%20ifTrue%3A%20%5B%20%5E%20%23veryhigh%20%5D.%0A%0A%09%22%20More%20than%20two%20weeks%20old%2C%20we%27ll%20be%20highly%20saddened%20%22%0A%09minutesOld%20%3E%20%281440%20*%2014%29%20ifTrue%3A%20%5B%20%5E%20%23high%20%5D.%0A%0A%09%22%20If%20our%20pull%20request%20is%20more%20than%20five%20days%20old%2C%20we%27ll%20be%20medium%20sad%20%22%0A%09minutesOld%20%3E%20%281440%20*%205%29%0A%09%09ifTrue%3A%20%5B%20%5E%20%23medium%20%5D%0A%09%09ifFalse%3A%20%5B%20%5E%20%23low%20%5D.%0A%0A%09%5E%20%23bug.'),
messageSends: ["ifTrue:", unescape("%3E"), unescape("*"), "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@minutesOld']=(0));
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09minutesOld%20%3A%3D%200.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.PullRequestTile);

smalltalk.addMethod(
unescape('_readableTime_'),
smalltalk.method({
selector: unescape('readableTime%3A'),
category: 'formatting',
fn: function (someSeconds){
var self=this;
try{var places=nil;
(places=(1));
((($receiver = ((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver >(86400) : smalltalk.send($receiver, "__gt", [(86400)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(86400) : smalltalk.send($receiver, "__slash", [(86400)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" days ago"])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(86400) : smalltalk.send($receiver, "__slash", [(86400)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" days ago"])}})})();})]));
(function(){throw({name: 'stReturn', selector: '_readableTime_', fn: function(){return smalltalk.send(smalltalk.send(((($receiver = someSeconds).klass === smalltalk.Number) ? $receiver /(60) : smalltalk.send($receiver, "__slash", [(60)])), "_printShowingDecimalPlaces_", [places]), "__comma", [" minutes ago"])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_readableTime_'){return e.fn()} throw(e)}},
args: ["someSeconds"],
source: unescape('readableTime%3A%20someSeconds%0A%09%7C%20places%20%7C%0A%09places%20%3A%3D%201.%20%22Stick%20with%20one%20decimal%20place%20for%20now%20%22%0A%0A%09someSeconds%20%3E%2086400%20ifTrue%3A%20%5B%20%5E%20%28%28someSeconds%20/%2086400%29%20printShowingDecimalPlaces%3A%20places%29%2C%20%27%20days%20ago%27%20%5D.%0A%09%0A%09%5E%20%28%28someSeconds%20/%2060%29%20printShowingDecimalPlaces%3A%20places%29%2C%20%27%20minutes%20ago%27.'),
messageSends: ["ifTrue:", unescape("%3E"), unescape("%2C"), "printShowingDecimalPlaces:", unescape("/")],
referencedClasses: []
}),
smalltalk.PullRequestTile);



