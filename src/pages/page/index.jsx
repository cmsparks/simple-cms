import React from 'react'
import txt from "../../../assets/test.txt"

console.log(txt)

function createMarkup() {
	var parsed=replaceAll(txt,">","&gt")
	parsed=replaceAll(parsed,"<","&lt")
	parsed=replaceAllPairs(parsed,"__","<ul>")
	parsed="<p>"+parsed+"</p>"
	console.log(parsed)
	return {__html: parsed};
}
function replaceAllPairs(string,pattern,replacement) {
	var i= 0;
	var regex = new RegExp(pattern) 
	var end = replacement.substring(0,1)+"/"+replacement.substring(1,replacement.length)
	while(string.includes(pattern)) {
		if(i==0){
			string = string.replace(regex,replacement)
			i++
		}
		else {
			string = string.replace(regex,end)
			i--
			console.log(i)
			console.log(string)
		}
	}
	if(i==1) {
		throw "Error parsing "+pattern+" to "+replacement+": unmatched markup symbol"
		string="Error parsing "+pattern+" to "+replacement+": unmatched markup symbol"
	}
	return string
}
function replaceAll(string, pattern, replacement) {
    return string.replace(new RegExp(pattern, "g"), replacement);
}

export default class Page extends React.Component {
  render () {
    return (
      <div dangerouslySetInnerHTML={createMarkup()}>
      </div>
    )
  }
}
