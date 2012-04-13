smalltalk.addPackage('Despair', {});
smalltalk.addClass('DespairApp', smalltalk.Object, ['repos', 'username', 'activeRepos'], 'Despair');
smalltalk.addMethod(
unescape('_bootstrap_'),
smalltalk.method({
selector: unescape('bootstrap%3A'),
category: 'initializers',
fn: function (aUsername){
var self=this;
var presetRepoName=nil;
(self['@username']=aUsername);
(presetRepoName=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["despair_repo"]));
(($receiver = presetRepoName) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.Repo || Repo), "_fetchReposFor_withEachDo_finally_", [aUsername, (function(repo){var reponame=nil;
var forks=nil;
(reponame=smalltalk.send(repo, "_at_", ["name"]));(forks=smalltalk.send(repo, "_at_", ["forks"]));return ((($receiver = ((($receiver = forks).klass === smalltalk.Number) ? $receiver <(2) : smalltalk.send($receiver, "__lt", [(2)]))).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = reponame) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@repos'], "_at_put_", [reponame, smalltalk.send((smalltalk.Array || Array), "_new", [])]);})() : nil;})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = reponame) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@repos'], "_at_put_", [reponame, smalltalk.send((smalltalk.Array || Array), "_new", [])]);})() : nil;})]));}), (function(){return smalltalk.send(self, "_loadPullRequests", []);})]);})() : (function(){smalltalk.send(self['@repos'], "_at_put_", [presetRepoName, smalltalk.send((smalltalk.Array || Array), "_new", [])]);return smalltalk.send(self, "_loadPullRequests", []);})();
return self;},
args: ["aUsername"],
source: unescape('bootstrap%3A%20aUsername%0A%09%22%20Start%20the%20application%20loading%20with%20aUsername%20%22%0A%09%7C%20presetRepoName%20%7C%0A%09username%20%3A%3D%20aUsername.%0A%09presetRepoName%20%3A%3D%20%28window%20at%3A%20%27despair_repo%27%29.%0A%0A%09presetRepoName%0A%09%09ifNotNil%3A%20%5B%0A%09%09%09repos%20at%3A%20presetRepoName%20put%3A%20%28Array%20new%29.%0A%09%09%09self%20loadPullRequests.%0A%09%09%5D%0A%09%09ifNil%3A%20%5B%0A%09%09%09Repo%20fetchReposFor%3A%20aUsername%0A%09%09%09%09withEachDo%3A%20%5B%20%3Arepo%20%7C%0A%09%09%09%09%09%7C%20reponame%20forks%20%7C%0A%09%09%09%09%09reponame%20%3A%3D%20repo%20at%3A%20%27name%27.%0A%09%09%09%09%09forks%20%3A%3D%20repo%20at%3A%20%27forks%27.%0A%09%09%09%09%09%28forks%20%3C%202%29%20ifFalse%3A%20%5B%20reponame%20ifNotNil%3A%20%5B%20repos%20at%3A%20reponame%20put%3A%20%28Array%20new%29%20%5D%20%5D%0A%09%09%09%09%5D%0A%09%09%09%09finally%3A%20%5B%20self%20loadPullRequests%20%5D.%0A%09%09%5D.%0A%09%0A'),
messageSends: ["at:", "ifNotNil:ifNil:", "fetchReposFor:withEachDo:finally:", "ifFalse:", unescape("%3C"), "ifNotNil:", "at:put:", "new", "loadPullRequests"],
referencedClasses: ["Repo", "Array"]
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
(self['@repos']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@activeRepos']=smalltalk.send((smalltalk.Set || Set), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09%22%20%60repos%60%20keys%20should%20be%20the%20names%20of%20the%20repositories%2C%20and%20the%20values%20should%20be%20an%20Array%20of%20each%20repo%27s%20pull%20requests%22%0A%09repos%20%3A%3D%20Dictionary%20new.%0A%09activeRepos%20%3A%3D%20Set%20new.'),
messageSends: ["new"],
referencedClasses: ["Dictionary", "Set"]
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_loadPullRequests'),
smalltalk.method({
selector: unescape('loadPullRequests'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@repos'], "_keys", []), "_reversed", []), "_do_", [(function(repo){var fullname=nil;
(fullname=smalltalk.send(smalltalk.send(self['@username'], "__comma", [unescape("/")]), "__comma", [repo]));return smalltalk.send((smalltalk.PullRequest || PullRequest), "_fetchFor_withEachDo_finally_", [fullname, (function(pull){var stack=nil;
(stack=smalltalk.send(self['@repos'], "_at_ifAbsent_", [repo, (function(){return nil;})]));return (($receiver = stack) != nil && $receiver != undefined) ? (function(){return smalltalk.send(stack, "_add_", [pull]);})() : nil;}), (function(){var stack=nil;
(stack=smalltalk.send(self['@repos'], "_at_ifAbsent_", [repo, (function(){return nil;})]));return ((($receiver = ((($receiver = smalltalk.send(stack, "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_activateRepo_", [repo]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_activateRepo_", [repo]);})]));})]);})]);
return self;},
args: [],
source: unescape('loadPullRequests%0A%09repos%20keys%20reversed%20do%3A%20%5B%20%3Arepo%20%7C%0A%09%09%7C%20fullname%20%7C%0A%09%09fullname%20%3A%3D%20username%2C%20%27/%27%2C%20repo.%0A%09%09PullRequest%20fetchFor%3A%20fullname%0A%09%09%09withEachDo%3A%20%5B%20%3Apull%20%7C%0A%09%09%09%09%7C%20stack%20%7C%0A%09%09%09%09stack%20%3A%3D%20%28repos%20at%3A%20repo%20ifAbsent%3A%20%5Bnil%5D%29.%0A%09%09%09%09stack%20ifNotNil%3A%20%5B%20stack%20add%3A%20pull%20%5D.%0A%09%09%09%5D%0A%09%09%09finally%3A%20%5B%0A%09%09%09%09%7C%20stack%20%7C%0A%09%09%09%09stack%20%3A%3D%20%28repos%20at%3A%20repo%20ifAbsent%3A%20%5B%5D%29.%0A%09%09%09%09%28stack%20size%29%20%3E%200%20ifTrue%3A%20%5B%20self%20activateRepo%3A%20repo%20%5D.%0A%09%09%09%5D%0A%09%5D.'),
messageSends: ["do:", "reversed", "keys", unescape("%2C"), "fetchFor:withEachDo:finally:", "at:ifAbsent:", "ifNotNil:", "add:", "ifTrue:", unescape("%3E"), "size", "activateRepo:"],
referencedClasses: ["PullRequest"]
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_activateRepo_'),
smalltalk.method({
selector: unescape('activateRepo%3A'),
category: 'actions',
fn: function (aRepoName){
var self=this;
var pulls=nil;
smalltalk.send(smalltalk.send("div.spinner", "_asJQuery", []), "_hide", []);
(pulls=smalltalk.send(self['@repos'], "_at_ifAbsent_", [aRepoName, (function(){return nil;})]));
(($receiver = pulls) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@activeRepos'], "_add_", [aRepoName]);return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Project || Project), "_new", []), "_withRepo_andPullRequests_", [aRepoName, pulls]), "_appendToJQuery_", [smalltalk.send("div.projects", "_asJQuery", [])]);})() : nil;
return self;},
args: ["aRepoName"],
source: unescape('activateRepo%3A%20aRepoName%0A%09%7C%20pulls%20%7C%0A%09%22As%20soon%20as%20we%20start%20activating%20repos%2C%20it%27s%20safe%20to%20hide%20the%20spinner%20from%20the%20user%22%0A%09%27div.spinner%27%20asJQuery%20hide.%0A%09pulls%20%3A%3D%20repos%20at%3A%20aRepoName%20ifAbsent%3A%20%5B%5D.%0A%09pulls%20ifNotNil%3A%20%5B%0A%09%09activeRepos%20add%3A%20aRepoName.%0A%09%09%28Project%20new%20withRepo%3A%20aRepoName%20andPullRequests%3A%20pulls%29%20appendToJQuery%3A%20%27div.projects%27%20asJQuery.%0A%09%5D.'),
messageSends: ["hide", "asJQuery", "at:ifAbsent:", "ifNotNil:", "add:", "appendToJQuery:", "withRepo:andPullRequests:", "new"],
referencedClasses: ["Project"]
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_activeRepos'),
smalltalk.method({
selector: unescape('activeRepos'),
category: 'accessors',
fn: function (){
var self=this;
return self['@activeRepos'];
return self;},
args: [],
source: unescape('activeRepos%0A%09%5E%20activeRepos.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_repos'),
smalltalk.method({
selector: unescape('repos'),
category: 'accessors',
fn: function (){
var self=this;
return self['@repos'];
return self;},
args: [],
source: unescape('repos%0A%09%5E%20repos.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DespairApp);


smalltalk.DespairApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessors',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%5E%20current%20ifNil%3A%20%5B%20current%20%3A%3D%20self%20new%20%5D.'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.DespairApp.klass);

smalltalk.addMethod(
unescape('_flushCurrent'),
smalltalk.method({
selector: unescape('flushCurrent'),
category: 'actions',
fn: function (){
var self=this;
(self['@current']=nil);
return self;},
args: [],
source: unescape('flushCurrent%0A%09current%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DespairApp.klass);


