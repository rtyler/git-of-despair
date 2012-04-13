smalltalk.addPackage('Despair', {});
smalltalk.addClass('DespairApp', smalltalk.Object, ['repos', 'username', 'activeRepos'], 'Despair');
smalltalk.addMethod(
unescape('_bootstrap_'),
smalltalk.method({
selector: unescape('bootstrap%3A'),
fn: function (aUsername){
var self=this;
(self['@username']=aUsername);
smalltalk.send((smalltalk.Repo || Repo), "_fetchReposFor_withEachDo_finally_", [aUsername, (function(repo){var reponame=nil;
var forks=nil;
(reponame=smalltalk.send(repo, "_at_", ["name"]));(forks=smalltalk.send(repo, "_at_", ["forks"]));return ((($receiver = ((($receiver = forks).klass === smalltalk.Number) ? $receiver <(2) : smalltalk.send($receiver, "__lt", [(2)]))).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = reponame) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@repos'], "_at_put_", [reponame, smalltalk.send((smalltalk.Array || Array), "_new", [])]);})() : nil;})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = reponame) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@repos'], "_at_put_", [reponame, smalltalk.send((smalltalk.Array || Array), "_new", [])]);})() : nil;})]));}), (function(){return smalltalk.send(self, "_loadPullRequests", []);})]);
return self;}
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@repos']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@activeRepos']=smalltalk.send((smalltalk.Set || Set), "_new", []));
return self;}
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_loadPullRequests'),
smalltalk.method({
selector: unescape('loadPullRequests'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@repos'], "_keys", []), "_reversed", []), "_do_", [(function(repo){var fullname=nil;
(fullname=smalltalk.send(smalltalk.send(self['@username'], "__comma", [unescape("/")]), "__comma", [repo]));return smalltalk.send((smalltalk.PullRequest || PullRequest), "_fetchFor_withEachDo_finally_", [fullname, (function(pull){var stack=nil;
(stack=smalltalk.send(self['@repos'], "_at_ifAbsent_", [repo, (function(){return nil;})]));return (($receiver = stack) != nil && $receiver != undefined) ? (function(){return smalltalk.send(stack, "_add_", [pull]);})() : nil;}), (function(){var stack=nil;
(stack=smalltalk.send(self['@repos'], "_at_ifAbsent_", [repo, (function(){return nil;})]));return ((($receiver = ((($receiver = smalltalk.send(stack, "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_activateRepo_", [repo]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_activateRepo_", [repo]);})]));})]);})]);
return self;}
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_activateRepo_'),
smalltalk.method({
selector: unescape('activateRepo%3A'),
fn: function (aRepoName){
var self=this;
var pulls=nil;
smalltalk.send(smalltalk.send("div.spinner", "_asJQuery", []), "_hide", []);
(pulls=smalltalk.send(self['@repos'], "_at_ifAbsent_", [aRepoName, (function(){return nil;})]));
(($receiver = pulls) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@activeRepos'], "_add_", [aRepoName]);return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Project || Project), "_new", []), "_withRepo_andPullRequests_", [aRepoName, pulls]), "_appendToJQuery_", [smalltalk.send("div.projects", "_asJQuery", [])]);})() : nil;
return self;}
}),
smalltalk.DespairApp);

smalltalk.addMethod(
unescape('_activeRepos'),
smalltalk.method({
selector: unescape('activeRepos'),
fn: function (){
var self=this;
return self['@activeRepos'];
return self;}
}),
smalltalk.DespairApp);


smalltalk.DespairApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.DespairApp.klass);

smalltalk.addMethod(
unescape('_flushCurrent'),
smalltalk.method({
selector: unescape('flushCurrent'),
fn: function (){
var self=this;
(self['@current']=nil);
return self;}
}),
smalltalk.DespairApp.klass);


