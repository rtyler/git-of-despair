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
smalltalk.send(html, "_with_", [self['@repo']]);
smalltalk.send(html, "_br", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20with%3A%20repo.%0A%09html%20br.'),
messageSends: ["with:", "br"],
referencedClasses: []
}),
smalltalk.Project);



