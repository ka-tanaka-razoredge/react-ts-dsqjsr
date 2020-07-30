const nameEx = (state: any[] | never = [], action) => {
    switch (action.type) {
      case 'DO_IT':
//        console.log(action.innerHTMLForFrontFront);
        return {
          innerHTMLForFrontFront: action.innerHTMLForFrontFront,
          backgroundColor: action.backgroundColor
        };

        return [
          {
            innerHTMLForFrontFront: action.innerHTMLForFrontFront
          }
        ]
      default:
        return state
    }
  }
  
  export default nameEx;