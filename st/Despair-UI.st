Smalltalk current createPackage: 'Despair-UI' properties: #{}!
Widget subclass: #PullRequestTile
	instanceVariableNames: 'pull minutesOld lastUpdatedText'
	category: 'Despair-UI'!

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
	].
!

lastUpdated
	| now then delta places|
	places := 1. "Only print out to 1 decimal places in our deltas"
	now := Date now time.
	then := pull updatedAt time.
	"Stupid JavaScript gives you microseconds, just to be a pain in the ass"
	delta := ((now - then) / 1000). "Turn this into seconds"

	minutesOld := (delta / 60).

	delta > 86400 ifTrue: [ ^ ((delta / 86400) printShowingDecimalPlaces: places), ' days ago' ].
	
	^ (minutesOld printShowingDecimalPlaces: places), ' minutes ago'.
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

