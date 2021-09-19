# OMAE V3

This is the third iteration of the Shadowrun Character generator; Omae, called OMA3 for the cool hype soulless corporate branding types.

OMA3 is a progressive web app using IndexedDB to actually SAVE your runner for the first time. Which is something that has been requested a lot. Also, because this is a progressive web app, it also means you get to use it OFFLINE. The future is now my chummers!

## Technologies

OMA3 is leveraging the (currently as of 2020) latest in modern web standards and technologies. (At least until 2029 when the first Matrix Crash happens)

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Material-UI](https://material-ui.com/)
- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- [next-pwa](https://github.com/shadowwalker/next-pwa#readme)
- [react-indexed-db](https://github.com/assuncaocharles/react-indexed-db)

## Want to contribute

Fork this bad boy and git gud!

If you seriously want to help message me on the [twitters](https://twitter.com/dethstrobe) or [reddits](https://www.reddit.com/user/dethstrobe).

I'll start setting up a project board in github and will be more then happy to delegate work if there are people actually willing to help. I'm also willing to mentor in a purely hypothetical situation that you want to learn about web development.

I'm currently attempting to have 100% code coverage, which might get relaxed later as I have less time for this project. But that's a future problem, my current wide eyed bright future naivete thinks I really can keep it at 100% coverage.

## The basics of getting started

### Start locally

The _quickest_ way to start the app from this repo is to run this command.
However, this is also becoming slower and slower as the project has grown.

```
npm run dev
```

Then visit [localhost:3000](http://localhost:3000/)

But if you are not going to be actively developing but want to run it on your local machine, you'll need to first build the app

```
npm run build
```

Once done you can run the transpiled code called with

```
npm start
```

and visit [localhost:3000](http://localhost:3000/)

### Testing

This will run all the unit tests in watch mode and should rerun again if you make changes

```
npm test -- --watch
```

But since there are becoming more and more tests, running them all is becoming less ideal.
You can run a smaller subset after starting the tests. Hitting any key should stop the test runner, then you can press `p` and type in a string to filter out what you want to run. Type ahead should show you which tests will run.

Also, to check that coverage is still at 100% you can

```
npm test -- --coverage
```
