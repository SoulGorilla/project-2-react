# Project Overview
This is a currency converter for citizens of the U.S, Great Britain, Europe and Australia to use when traveling abroad.

## Project Links

- [github repo link](https://github.com/SoulGorilla/project-2-react)
- [deployment link](https://soulgorilla.github.io/project-2-react/#/about)

## Project Description
This webapp is a currency converter. It allows you to see what your money is worth in many different countries. It uses the styling from Mint.com and has many possibilities for advanced features including crypto conversions.

## API
It utilizes the CurrencyScoop APi which returns real-time and historical exchange rates for 168 world currencies.

```
{
"meta": {
"code": 200,
"disclaimer": "Usage subject to terms: https://currencyscoop.com/terms"
},
"response": {
"date": "2022-05-13T17:37:43Z",
"base": "USD",
"rates": {
"ADA": 1.80237082,
"AED": 3.6725,
"AFN": 87.80555901,
"ALL": 116.19254389,
"AMD": 458.36660798,
"ANG": 1.78962933,
"AOA": 406.43496403,
}
```


## Wireframes
- [Wireframe](https://res.cloudinary.com/dvhyslfb6/image/upload/v1652467049/Screen_Shot_2022-05-13_at_11.17.25_AM_sphqfl.png)
- [React architecture](https://res.cloudinary.com/dvhyslfb6/image/upload/v1652474437/Screen_Shot_2022-05-13_at_1.40.17_PM_f6i6b5.png)

#### MVP 
- Find and use external api 
- Render data on page 
- show specific currencies based on fixed currency value
- Have routes and 4 pages (3 currencies, 1 about)

#### PostMVP EXAMPLE

- Add "Traveling through the metaverse" page to show Crypto pairs in USD
- Add ability to input both currency type and amount (removes 2 dedicated pages) onSubmit it shows dozens of currency amounts on Homepage.

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will include React Router as well as a burger menu with links. It will include State to show which components to render.| 
|Iterate Currencies| This component will make the initial data pull and use 2 states (currency and Amount) to pass to the API. It will then iterate through the return to disply only the pairs for GBP, Euro, and Ruble.
|Currency | This component will build a list to display the data from Iterate currencies.
|Currency Ruble |This will be built almost exactly the same as currency, but will pass different data on its' API request. [This Component will be deleted during if I hit my Stretch Goals]

| Header | This will render the header include the nav | 

| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 5hrs| ? | ?|
| Iterate Currencies | H | 3hrs| ? | ? |
| Currency | H | 4hrs| ? | ? |
| Currency Ruble | L | 1hrs| ? | ? |
| Header | H | 2hrs| ? | ? |
| Footer | H | .5hrs| ? | ? |
| Total | H | 15.5hrs| ? | ?hrs |

## Additional Libraries
- Bootstrap
- Jquery
- React
- mint.com's Css for styling

## Code Snippet


```
/// this is a form dropdown that adds the currency selected to the api call.
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          class="form-control me-2"
          inputMode="numeric"
          type="text"
          placeholder="Amount"
          aria-label="Search"
          onChange={handleChange}
        />
        <select
          class="custom-select"
          id="select"
          onChange={e => setCurrency(e.target.value)}
        >
          <option selected>Currency</option>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pounds</option>
          <option value="AUD">Aussie Dollars</option>
          <option value="CAD">Canadian Dollars</option>
          <option value="RUB">Ruble</option>
          <option value="AUD">AUD</option>
          <option value="GBP">British Pounds</option>
        </select>
        <button className="btn btn-outline-success" type="submit">
          CONVERT!
        </button>
      </form>
      <ul class="list-group">
        <Convert money={money} />
      </ul>
```
