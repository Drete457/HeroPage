import React from 'react';

export function HeroWikipedia() {
  const url = 'https://it.wikipedia.org/wiki/Natsu_Dragonil';
  return <GetHyperLink url={url} name={'Wikipedia'} />
}

export function HeroFanPage(){
  const url = 'https://aminoapps.com/c/genesis-portugal/page/item/natsu-dragneel/kwmD_KRghQI7eVMEZ3ZJpE8VaEzob8KxVNzUQ';
  return <GetHyperLink url={url} name={'Fan Page Portugal'} />
}

function GetHyperLink(props){
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
  );
}

