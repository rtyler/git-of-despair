smalltalk.addPackage('Despair', {});
smalltalk.addClass('DespairApp', smalltalk.Object, ['repos'], 'Despair');
smalltalk.addMethod(
unescape('_bootstrap_'),
smalltalk.method({
selector: unescape('bootstrap%3A'),
category: 'initializers',
fn: function (aUsername){
var self=this;
smalltalk.send((smalltalk.Repo || Repo), "_fetchReposFor_withEachDo_finally_", [aUsername, (function(repo){return nil;}), (function(){return nil;})]);
return self;},
args: ["aUsername"],
source: unescape('bootstrap%3A%20aUsername%0A%09%22%20Start%20the%20application%20loading%20with%20aUsername%20%22%0A%0A%09Repo%20fetchReposFor%3A%20aUsername%0A%09%09withEachDo%3A%20%5B%20%3Arepo%20%7C%20%5D%0A%09%09finally%3A%20%5B%20%22continue%20initialization%22%20%5D.'),
messageSends: ["fetchReposFor:withEachDo:finally:"],
referencedClasses: ["Repo"]
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
return self;},
args: [],
source: unescape('initialize%0A%09%22%20%60repos%60%20keys%20should%20be%20the%20names%20of%20the%20repositories%2C%20and%20the%20values%20should%20be%20an%20Array%20of%20each%20repo%27s%20pull%20requests%22%0A%09repos%20%3A%3D%20Dictionary%20new.'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
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


