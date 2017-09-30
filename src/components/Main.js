require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
// let yeomanImage = require('../images/yeoman.png');
// 获取图片相关的数据
// important:  json!
var imageDatas = require('json!../data/imageDatas.json');
// 利用自执行函数，将图片名信息转成图片URL路径信息 genImageURL

imageDatas = (function(imageDatasArr){
	for(var i=0, j = imageDatasArr.length; i<j; i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


var ImgFigure = React.createClass({
	render: function(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}
				/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		)
	}
})


class AppComponent extends React.Component {

  render() {
	
	var controllerUnits = [],
		imgFigures = [];

	for (var i = 0, j = imageDatas.length; i < j; i++) {
		var value = imageDatas[i],
			index = i;
		imgFigures.push(<ImgFigure data={value} key={index}/>)
	}

    return (
    	<section className="stage">
    		<section className="img-sec">
				{imgFigures}
    		</section>
    		<nav className="controller-nav">
				{controllerUnits}
    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
