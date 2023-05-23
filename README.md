# Lord of The Rings - Character Bios
## React Props Exercise

### App: 
- [ ] Import the data.js file into App.js
- [ ] Render Header and CharacterList components
- [ ] Pass information from the data.js file to CharacterList (How do we pass information from one component to another?

### Header: 
- [ ] Create header component that returns a div with the className "header"
- [ ] Inside the div, there should be 2 header elements (h1, h2 etc) 

### CharacterList:
- [ ] Create a Character component that returns a div with the className "characters-flex"
- [ ] Create variable that stores a <u>list</u> of Character components 
- [ ] Use props to pass character data to Character component 

### Character:
- [ ] Destructure prop into variables
- [ ] Parent div with className "character"
- [ ] img with image as src and name as alt
- [ ] h2 for name
- [ ] p for race  
- [ ] p status
- [ ] p weapon of choice

### QuoteList:
- [ ] Use CharacterList as a template to create QuoteList
- [ ] QuoteList should return a 'ul' element with the className "quotes"

### Quote:
- [ ] Use Character as a template to create the Quote component
- [ ] Use props to accept the quote passed down from QuoteList
- [ ] Return a single div with the className "quote", with the contents of the quote inside 

### Stretch Goals: 
- [ ] Use conditional rendering using a showQuotes prop to show/hide quotes for each character
- [ ] Default to showing quotes for character, unless set to false
