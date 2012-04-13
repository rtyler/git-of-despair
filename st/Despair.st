Smalltalk current createPackage: 'Despair' properties: #{}!
Object subclass: #DespairApp
	instanceVariableNames: 'repos'
	category: 'Despair'!

!DespairApp methodsFor: 'initializers'!

bootstrap: aUsername
	" Start the application loading with aUsername "

	Repo fetchReposFor: aUsername
		withEachDo: [ :repo | ]
		finally: [ "continue initialization" ].
!

initialize
	" `repos` keys should be the names of the repositories, and the values should be an Array of each repo's pull requests"
	repos := Dictionary new.
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

