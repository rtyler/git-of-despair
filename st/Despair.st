Smalltalk current createPackage: 'Despair' properties: #{}!
Object subclass: #DespairApp
	instanceVariableNames: 'repos username activeRepos'
	category: 'Despair'!

!DespairApp methodsFor: 'actions'!

loadPullRequests
	repos keys do: [ :repo |
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
	activeRepos add: aRepoName.
! !

!DespairApp methodsFor: 'initializers'!

bootstrap: aUsername
	" Start the application loading with aUsername "
	username := aUsername.

	Repo fetchReposFor: aUsername
		withEachDo: [ :repo |
			| reponame forks |
			reponame := repo at: 'name'.
			forks := repo at: 'forks'.
			(forks < 2) ifFalse: [ reponame ifNotNil: [ repos at: reponame put: (Array new) ] ]
		]
		finally: [ self loadPullRequests ].
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

