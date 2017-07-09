var React = require('react');
import {SectionsContainer, Section, Header, Slide, HorizontalSlider, Footer} from 'react-fullpage';
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');
var Web = React.createClass ({
  componentDidMount: function(){

  },
  getInitialState : function() {
    return {
      title: 'WEB DESIGN & DEVELOPMENT',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  },
  render: function() {
    var {title, content} = this.state;

    let options = {
      sectionClassName:     'section',
      anchors:              ['websites?sectionOne', 'websites?sectionTwo', 'websites?sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
      <div>
        {/* <Header>
          <TitleBar title={title} content={content}/>
        </Header> */}
        {/* <Footer>
          <FooterComponent/>
        </Footer> */}
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">
            <div className="slide" id="slide1">
                <div className="intro">
                    <h1>Around the world scrolling</h1>
                    <p>Go to the first section and scroll up or to the last one and scroll down to see how it works.</p>
                </div>
            </div>
            <div className="slide active" id="slide2">
                <h1>Slide 2</h1>
            </div>
            <div className="slide" id="slide3">
                <h1>Slide 3</h1>
            </div>
          </Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>

      </div>
    );
  }
});

module.exports = Web;
