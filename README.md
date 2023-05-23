# Lord of The Rings - Character Bios
## React Props Exercise

### App: 
- [ ] Import the characters from `data.js` file into `App.js`
- [ ] Create a components folder inside the src folder
- [ ] Create `Header`, `CharacterList`, `Character`, `QuoteList`, and `Quote` components inside components folder
- [ ] Pass the characters from the `data.js` file to the `CharacterList` component (How do we pass information from one component to another?)
- [ ] `Header` and `CharacterList` components should be children of the `div` in the App's JSX

### Header: 
- [ ] The `Header` component should return a `div` with the className "header"
- [ ] Inside the `div`, there should be:
  - [ ] `h1` with text "Lord of The Rings"
  - [ ] `h2` with text "Character Bios"

### CharacterList:
- [ ] The `CharacterList` component should return a `div` with the className "characters-flex"
- [ ] Create a variable that stores an array of `Character` components
- [ ] Use props to pass character data to `Character` component
- [ ] Use a key in the `Character` component (use crypto or uuid)
- [ ] Display this array of `Character` components in the JSX 

### Character:
- [ ] Destructure prop into variables
- [ ] Parent `div` with className "character"
- [ ] Inside the `div`, there should be:
  - [ ] `img` with `image` as `src` and `alt` equal to `Character Portrait of ${name}`
  - [ ] `h2` for `name`
  - [ ] `p` for `race`  
  - [ ] `p`  for `status`
  - [ ] `p` for `weapon`
  - [ ] `QuoteList` component passing `quotes` to the `QuoteList`

### QuoteList:
- [ ] Destructure prop into variable `quotes`
- [ ] `QuoteList` should return a `ul` element with the className "quotes"
- [ ] Create variable that stores an array of Quotes components
- [ ] Use props to pass quote data to `Quote` component
- [ ] Use a key in the `Quote` component (use crypto or uuid)
- [ ] Display this array of `Quote` components in the JSX 

### Quote:
- [ ] Destructure prop into variable `quote`
- [ ] Return a single `div` with the className "quote", with the contents of the `quote` inside 

### Stretch Goals: 
- [ ] Use conditional rendering in the `Character` component using a `showQuotes` prop to show/hide quotes for each character
- [ ] Default to showing quotes for all characters, unless set to `false`
