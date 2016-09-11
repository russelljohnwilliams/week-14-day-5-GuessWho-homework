var React = require('react')

var CharacterSelect = React.createClass({


   handleSelect: function(e){
    e.preventDefault()
    var attribute = e.target.value
    console.log("what is the attribute? ", attribute)

    this.props.onAttributeSubmit(attribute)
   
  },

  render: function(){
   
    return(
      <select className="dropDown" value="nothing" onChange={this.handleSelect}  >
      <option key="nowt">
      Please select 
      </option>,
      <option value="blonde" key="blonde">
      Is this person a natural blonde?
      </option>,
      <option value="brown" key="brown">
      Is this person a brunette?
      </option>,
      <option value="white" key="white">
      Has this person got white hair       
      </option>,
      <option value="bald" key="bald">
      Is this person a baldy?
      </option>,
      <option value="glasses" key="glasses">
      Is this person wearing spectacles?
      </option>,
      <option value="beard" key="beard">
      Is there facial hair of some description present?
      </option>,
      <option value="hat" key="hat">
      Is this person wearing a hat?
      </option>,
      <option value="smile" key="smile">
      Does this person have a beaming great big smile?
      </option>,
      <option value="female" key="female">
      Is this person a lady of some description?
      </option>,
      <option value="male" key="male">
      Is the person of the male variety?
      </option>,
      </select>
      )
  }
})


module.exports = CharacterSelect





