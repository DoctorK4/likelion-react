
const rootElement = document.getElementById('root');

function renderVanillaApp() {

}

function render(){
  console.log('renderingapp');
  const container = document.createElement('div');
  container.classList.add('container', 'container--md');

  const containerHeadline = document.createElement('h1');
  const conatainerTextContent = documnet.createTextNode('웹');
  containerHeadline.append(conatainerTextContent);

  
}