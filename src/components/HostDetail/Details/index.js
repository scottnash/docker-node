import React from 'react';
import moment from 'moment';

export default ({ host }) => {
  console.log(host);
  return (
    <div>
      <h1>{ host.name }</h1>
      <HostDOB host={ host } />
      <HostBirthPlace host={ host } />
      <div>
        <HostImage host={ host } />
        <HostWiki host={ host } />
      </div>
      <HostingDates host={ host } />
    </div>
  )
}

const HostDOB = ( { host } ) => {
  const DOB = host.node.nodeProperties.find( (nodeProperty)=> nodeProperty.propertyName == 'date_of_birth' );
  if(moment(DOB.propertyValue, 'YYYY-MM-DD', true).isValid()){
    return(
        <p>
          Date of Birth:
          { moment(DOB.propertyValue).format('MMMM Do, YYYY') } ({ moment().diff(DOB.propertyValue, 'years') })
        </p>
    )
  }
  return null;
}

const HostBirthPlace = ( { host } ) => {
  const birthPlace = host.node.nodeProperties.find( (nodeProperty)=> nodeProperty.propertyName == 'place_of_birth' );
  if(birthPlace.propertyValue.length > 0){
    return (
      <p>Birthplace: { birthPlace.propertyValue }</p>
    );
  }
  return null;
}

const HostImage = ( { host } ) => {
  if(host.image.url){
    return (
      <img
        src={ host.image.url }
        alt={ `${ host.name } photo` }
        title={ host.name }
        onError={(e) => { e.target.parentNode.removeChild(e.target) }}
      />
    );
  }
  return null;
}

const HostWiki = ( { host } ) => {
  const { nodeWiki } = host.node;

  if(nodeWiki.wikiText.length > 0){
    return (
      <p>{ nodeWiki.wikiText } - <a target="_blank" href={ nodeWiki.wikiLink }>Wikipedia</a></p>
    );
  }
  return null;
}

const HostingDates = ( { host } ) => {
  if(host.blather.length > 0){
    let hostingDates = host.blather.split(')');
    hostingDates = splitHostingDates(hostingDates);
    hostingDates = objectifyDates(hostingDates);

    return (
      <div>
        <h4>Hosting Dates</h4>
        <ul>
        { hostingDates.map( (hostingDate, index) => <li key={ index }>{ hostingDate.showDate }</li> ) }
        </ul>
      </div>
    );
  }
  return null;
}

const splitHostingDates = (hostingDates) => {
  return hostingDates.filter( (hostingDate)=>{
    let tryDate = decodeURI(hostingDate.replace(/&nbsp;/gi,' ').split(';')[0]).replace(/(<([^>]+)>)/ig,"");
    var dateFormat = "DD/MM/YYYY";
    return !moment(tryDate, dateFormat, false).isValid();
  });
}

const objectifyDates = (hostingDates)=> {
  return hostingDates.map( (hostingDate) => {
    let returnDate = {
      showDate: decodeURI(hostingDate.replace(/&nbsp;/gi,' ').split(';')[0]).replace(/(<([^>]+)>)/ig, "")
    }
    let returnMonth = returnDate['showDate'].split(' ')[1].replace(/ /gi,' ').replace(/,/gi,' ');

    returnDate.dateArray = [
      parseInt(returnDate['showDate'].trim().split(',')[returnDate['showDate'].split(',').length-1]),
      returnMonth = moment().month(returnMonth).format("M"),
      parseInt(returnDate['showDate'].trim().split(' ')[1].replace(/ /gi,' ').replace(/,/gi,' '))
    ];

    return returnDate
  });
}
