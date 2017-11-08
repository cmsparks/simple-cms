import React from 'react'
import txt from "../../../assets/test.txt"

console.log(txt)

function createMarkup() {
	var parsed=replaceAll(txt,">","&gt")
	parsed=replaceAll(parsed,"<","&lt")
	parsed=replaceAll(parsed,"/[","<b>")
	parsed=replaceAll(parsed,"/]","</b>")
	parsed="<p>"+parsed+"</p>"
	console.log(parsed)
	return {__html: parsed};
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
