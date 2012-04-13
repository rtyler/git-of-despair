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

!Project methodsFor: 'rendering'!

renderOn: html
	html div
		id: repo;
		class: 'project_tile';
		with: [
			html h2 with: repo.
			html div
				class: 'pull_requests';
				with: [
					pulls do: [ :pull | PullRequestTile new withPull: pull; renderOn: html ]
				].
		].
	html br.
! !

Widget subclass: #PullRequestTile
	instanceVariableNames: 'pull minutesOld lastUpdatedText'
	category: 'Despair-UI'!

!PullRequestTile methodsFor: 'formatting'!

readableTime: someSeconds
	| places |
	places := 1. "Stick with one decimal place for now "

	someSeconds > 86400 ifTrue: [ ^ ((someSeconds / 86400) printShowingDecimalPlaces: places), ' days ago' ].
	
	^ ((someSeconds / 60) printShowingDecimalPlaces: places), ' minutes ago'.
! !

!PullRequestTile methodsFor: 'initializers'!

withPull: aPullRequest
	pull := aPullRequest.
!

initialize
	super initialize.
	minutesOld := 0.
! !

!PullRequestTile methodsFor: 'rendering'!

renderOn: html
	lastUpdatedText := self lastUpdated.
	html div
		class: 'pull_request_tile sadness_', (self sadness asString);
		with: [
			html strong with: [ html a href: (pull url); target: '_blank'; with: (pull title) ].
			html br.
			html with: 'Last updated: ', lastUpdatedText.
			html br.
			html with: 'Created: ', (self readableTime: (Date now secondsDifference: (pull createdAt))).
			html br.
			" This data requires *yet another* GitHub API request
			html div
				class: 'metadata';
				with: [
					html span with: (pull commits asString), ' commits'.
					html span with: (pull comments asString), ' comments'.
					html span with: (pull changedFiles asString), ' changed files'.
			]."
	].
!

lastUpdated
	| delta |
	delta := Date now secondsDifference: (pull updatedAt).
	minutesOld := (delta / 60).
	^ self readableTime: delta.
!

sadness
	" More than two months old and we'll be super pissed"
	minutesOld > (1440 * 60) ifTrue: [ ^ #veryhigh ].

	" More than two weeks old, we'll be highly saddened "
	minutesOld > (1440 * 14) ifTrue: [ ^ #high ].

	" If our pull request is more than five days old, we'll be medium sad "
	minutesOld > (1440 * 5)
		ifTrue: [ ^ #medium ]
		ifFalse: [ ^ #low ].

	^ #bug.
! !

