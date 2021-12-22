# Cosmos App 
[Click here to view the website](https://jwd-activity.github.io/cosmos/)

## Description
- COSMOS app provides information on spacecraft, astronauts, and space news.
- COSMOS app [Wireframe.pdf](https://github.com/JWD-activity/cosmos/files/7758927/Wireframe.pdf) 


### The challenge
- Create a **`Home`** component that displays the main home page of the cosmos app.
- Create a **`Spacecraft`** component that displays a list of spacecraft.
- Create a **`SpacecraftDetails`** component that displays details of a spacecraft.
- Create an **`Astronauts`** component that displays a list of astronauts. 
- Create an **`AstronautsDetails`** component that displays details of a selected astronaut.
- Create a **`News`** component that displays a list of latest spaceflight-related news.
- Create an **`NotFound`** component that notifies the user of an page not found error.
- Create a **`Search`** component that displays the search form.
- Create a **`Filter`** component that displays multiple options of the filter.
- Create a **`Mybookmark`** component that displays a list of bookmark news.
- Create a **`MessageAlert`** component that notifies the user of errors or information.
- Create **`CardNews, CardSpacecraft and CardAstronauts`** components that display Thumbnails.
- Create a **`CardCarousel`** component that displays a slideshow.
- Implement a function that **`allows users to properly navigate to a new router page.`**
- Implement a  function that **`allows users to search astronauts by using a filter or entering astronauts' name.`**
- Implement a **`bookmark`** function that **`allows users to keep favourite news articles.`**
- Implement a **`caching system with localStorage (when pages are refreshed, still data remain and display on the screen.)`**

## My process
### Built with
- HTML
- CSS
- JavaScript
- React
- NPM 
  - **gh-pages** https://www.npmjs.com/package/gh-pages
  - **react-bootstrap** https://react-bootstrap.github.io/
  - **react icons** https://react-icons.github.io/react-icons/
  - **react-router-dom** https://reactrouter.com/
  - **axios** https://www.npmjs.com/package/react-axios
  - **Redux Toolkit** https://redux-toolkit.js.org/
- API
  - The Space Devs API https://lldev.thespacedevs.com/2.2.0/swagger
  - Spaceflight News API https://api.spaceflightnewsapi.net/v3/documentation#/Article
  
### Things I applied
- JavaScript 
  - Array Methods:` map, filter, includes, find, findIndex, push, splice, slice`
  - String Methods: `trim, toLowerCase`
  - Date Methods: `toLocaleDateString`

- React
  - `Founction components`
  - `Conditional Rendering` of Components
  - `Props`: Passing data between components
  - `Hooks: useState, useEffect`

- React Router
  - `Router: HashRouter`
  - `Hooks: useParams, useLocation, useNavigate`

- Redux/Redux Toolkit
  - `Store: configureStore` 
  - `Reducer: createSlice`
  - `Fetching data: createAsyncThunk`
  - `Hooks: useSelector,useDispatch`
  
### Screenshot
- Home

![home-sm](https://user-images.githubusercontent.com/83196262/147014647-e894966f-b8d7-4d34-bcd0-4c48577fd694.png)

- Spacecraft

![spacecraft-sm](https://user-images.githubusercontent.com/83196262/147014692-7a1fd45a-df0e-4232-bfeb-c26165b93eeb.png)
![spacecraftDetails-sm](https://user-images.githubusercontent.com/83196262/147014711-8acdbee8-c44b-4fca-899e-24240726fa9f.png)

- Astronauts

![astronauts-sm](https://user-images.githubusercontent.com/83196262/147014759-f5dc35a2-244d-4cda-85e7-215fe53f30d4.png)
![astronautsDetails-sm](https://user-images.githubusercontent.com/83196262/147167633-2a7b0cf8-0911-42ca-b2c5-a696d186fab2.png)

- Astronauts(Filter)

![filter-sm](https://user-images.githubusercontent.com/83196262/147014788-81833df2-6464-457f-913f-6fa920cedd07.png)

- Astronauts(Search)

![search-sm](https://user-images.githubusercontent.com/83196262/147014818-210761d6-11c9-44ca-a3fc-40dafb77861a.png)

- News

![news-sm](https://user-images.githubusercontent.com/83196262/147014908-21f39c75-1f66-4f88-b18f-4d58f6c8598d.png)

- Bookmark

![bookmark-sm](https://user-images.githubusercontent.com/83196262/147014934-6e7e6840-0140-4183-a265-18b81a4b7722.png)





