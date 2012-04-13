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



