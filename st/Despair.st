Smalltalk current createPackage: 'Despair' properties: #{}!
Object subclass: #DespairApp
	instanceVariableNames: 'repos username activeRepos'
	category: 'Despair'!

!DespairApp methodsFor: 'accessors'!

activeRepos
	^ activeRepos.
!

repos
	^ repos.
! !

!DespairApp methodsFor: 'actions'!

loadPullRequests
	(repos size) = 0 ifTrue: [
		self displayError: 'No repos found'.
		self hideSpinner.
		^ false
	].

	repos keys reversed do: [ :repo |
		| fullname |
		fullname := username, '/', repo.
		PullRequest fetchFor: fullname
			withEachDo: [ :pull |
				| stack |
				stack := (repos at: repo ifAbsent: [nil]).
				stack ifNotNil: [ stack add: pull ].
			]
			finally: [ : success |
				| stack |
				console log: 'Finding pull requests succeeded? ', success.
				stack := (repos at: repo ifAbsent: []).
				(stack size) > 0
					ifTrue: [ self activateRepo: repo ]
					ifFalse: [ self hideSpinner. self displayError: 'No pull requests found'.].
			]
	].
!

activateRepo: aRepoName
	| pulls |
	self hideSpinner.
	pulls := repos at: aRepoName ifAbsent: [].
	pulls ifNotNil: [
		activeRepos add: aRepoName.
		(Project new withRepo: aRepoName andPullRequests: pulls) appendToJQuery: 'div.projects' asJQuery.
	].
!

hideSpinner
	'div.spinner' asJQuery hide.
!

displayError: errorString
	[ :html |
		html div
			id: 'error';
			style: 'border: 3px solid red; background-color: pink; font-weight: bold;';
			with: errorString.
	] appendToJQuery: 'body' asJQuery.
! !

!DespairApp methodsFor: 'initializers'!

bootstrap: aUsername
	" Start the application loading with aUsername "
	| presetRepoName |
	username := aUsername.
	presetRepoName := (window at: 'despair_repo').

	presetRepoName
		ifNotNil: [
			repos at: presetRepoName put: (Array new).
			self loadPullRequests.
		]
		ifNil: [
			Repo fetchReposFor: aUsername
				withEachDo: [ :repo |
					| reponame forks |
					reponame := repo at: 'name'.
					forks := repo at: 'forks'.
					(forks < 2) ifFalse: [ reponame ifNotNil: [ repos at: reponame put: (Array new) ] ]
				]
				finally: [ :success | self loadPullRequests ].
		].
!

initialize
	" `repos` keys should be the names of the repositories, and the values should be an Array of each repo's pull requests"
	repos := Dictionary new.
	activeRepos := Set new.
! !

DespairApp class instanceVariableNames: 'current'!

!DespairApp class methodsFor: 'accessors'!

current
	^ current ifNil: [ current := self new ].
! !

!DespairApp class methodsFor: 'actions'!

flushCurrent
	current := nil.
! !

!Date methodsFor: '*Despair'!

secondsDifference: anotherDate
	^ (((self time) - (anotherDate time)) / 1000).
! !

!Date methodsFor: '*Despair'!

secondsDifference: anotherDate
	^ (((self time) - (anotherDate time)) / 1000).
! !

