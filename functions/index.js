const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();


exports.calculateCompletenessPercentage = functions.firestore
	.document('/users/{documentId}')
  .onWrite((change, context) => {
  	const newData = change.after.data()
  	const keys = Object.keys(newData)
  	const values = Object.values(newData)
  	const nonNulValues = values.filter(elem => elem !== "" && elem !== undefined && elem !== null)
  	const percentageCompleteness = ( (nonNulValues.length -1 ) / (keys.length - 1) ) * 100
  	console.log(percentageCompleteness)
  	return null;
  })