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
	repos keys reversed do: [ :repo |
		| fullname |
		fullname := username, '/', repo.
		PullRequest fetchFor: fullname
			withEachDo: [ :pull |
				| stack |
				stack := (repos at: repo ifAbsent: [nil]).
				stack ifNotNil: [ stack add: pull ].
			]
			finally: [
				| stack |
				stack := (repos at: repo ifAbsent: []).
				(stack size) > 0 ifTrue: [ self activateRepo: repo ].
			]
	].
!

activateRepo: aRepoName
	| pulls |
	"As soon as we start activating repos, it's safe to hide the spinner from the user"
	'div.spinner' asJQuery hide.
	pulls := repos at: aRepoName ifAbsent: [].
	pulls ifNotNil: [
		activeRepos add: aRepoName.
		(Project new withRepo: aRepoName andPullRequests: pulls) appendToJQuery: 'div.projects' asJQuery.
	].
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
				finally: [ self loadPullRequests ].
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

