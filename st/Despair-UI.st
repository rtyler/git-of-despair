Smalltalk current createPackage: 'Despair-UI' properties: #{}!
Widget subclass: #Project
	instanceVariableNames: 'repo pulls'
	category: 'Despair-UI'!

!Project methodsFor: 'initializers'!

initialize
	repo := nil.
!

withRepo: aRepo andPullRequests: anArrayOfRequests
	"Initialize this Project widget with aRepo and an Array of PullRequest objects "
	repo := aRepo.
	pulls := anArrayOfRequests.
! !

