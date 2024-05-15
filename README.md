# Front-end Choose Your Own Adventure Take-Home

Design and build a comments feed that displays all comments and notifies a user in real-time when new comments are added.

Here is the data schema for a Comment:

- id: INTEGER
- name: TEXT
- created: DATETIME
- message: TEXT

Here are the API endpoints:

- Create a comment: /createComment (POST)
- Retrieve all comments: /getComments (GET)
- Retrieve a comment: /getComment (GET)
- Delete all comments: /deleteComments (DELETE)
  - This is useful for purging data

This is a basic wireframe, you can change the layout. While you won't be screened as a product designer, make sure you build a good user experience. If you decide to use a third-party design system, be prepared to discuss your decision.

![Basic wireframe](wireframe.png)

Please write unit tests and handle errors where you see fit.

## Engineering Style

We do not expect you to have expertise in all the topics that encapsulate front-end web development. We recognize that some folks are specialists and others are generalists!

### Specialist

If there's a particular topic you enjoy, you can focus your assignment solution on that!

Some examples include:

- Performance optimizations
- Accessibility
- Integration testing

### Generalist

If you're a generalist, you can focus more on building the minimum viable product described above with the wireframe!

## Interview Details

We have already set up an API client for a Node Express server that stores comments in SQLite.

You have the option of doing the assignment with or without a front-end JS framework.

If you decide to use a framework, we recommend the following boilerplates:

- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [vuejs/vue-cli](https://github.com/vuejs/vue-cli)
- [angular/angular-cli](https://github.com/angular/angular-cli)
- [ember-cli/ember-cli](https://github.com/ember-cli/ember-cli)

Be prepared to have a discussion about your implementation. Here are some example discussion questions:

- How can you optimize fetching new comments in real-time?
- Are there any restrictions we should place on the comment input?

We recommend spending up to four hours on this assignment. If you don't get every piece you hoped completed done in the timeframe, that's alright! We'll be having an hour long discussion on your thought processes and where you might spend more time, and that discussion is a key part of our evaluation!

## Usage

### Run in Development

```
$ npm install

# Run the application with a Fast network connection (service and DB response is instantaneous)

$ npm run dev

# New npm script created:
# Run the application with a Slow network connection (2 second delay)
# Note, this experience emulates posting a comment and waiting for a slow response from the service.
# It highlights the optimistic update UX that is provided in the Comment Feed experience for the Customer and the different request States that are available, for example, Loading, Success/Error.

$ npm run dev:slow
```

### Visit http://localhost:5173/

### Features added - Shawn Moore

- Existing comments list is fetched via `getComments` one time and then cached for reuse using `react-query`. Only the last posted comment is ever fetched from the API via `getComment` after the initial load. The intention is to reduce the number of `select *` queries on the backend and prevent the additional time needed to re-parse and re-sort the comments.
- Optimistic UX applied after a comment is initially sent. As soon as the request completes the temporary UX with a reduced opacity is replaced with the real comment fetched from the API. A green check mark is temporarily shown on comments that are just added. To test the optimistic UX, run the application with `npm run dev:slow` which emulates a slow network response.
- Each card includes an avatar with the first letter of the commenter's name and a random color from a pre-selected list. The created date has been formatted to display like `May 14 at 1PM` and offsets for the current user's timezone.
- Form validation of inputs made with `DOMPurify.sanitize()` to remove any malicious `XSS` code from inputs. Also, a warning is posted to the commenter if characters have been removed due to sanitizing.
- A max limit of `50` characters is applied to the Name input and a max of `1000` characters is applied to the Message textarea to prevent excessively large content from being sent to the API.
- The form fields Name and Message are required and the Comment button is disabled until both fields are populated.
- Comments are sorted in descending order by created date.
- Large comments are also truncated in the UX with the option to `Read more` or `Read less` on click of the provided link.
- Empty state UX when there are no comments.
- Loading UX with css animation when initially fetching all comments and when posting a comment.
- The components directory structure is using Atomic Design principles.
- Module aliases configured to simplify imports for components, utils, and models.
- The `getComment` API has been updated to accept the `id` as a query parameter instead of using a body property. This is needed to prevent an error with the spec for `fetch` when making a `GET` request. [more info](https://github.com/whatwg/fetch/issues/551)
- Unit tests added and jest and testing-library configurations created.
- The initial `dev` dependencies have been updated to prevent errors with `npm install`.
- The recommended `create-react-app` tool is no longer maintained and posts a warning. To resolve this I used `vite` and configured the proxy settings in `vite.config.ts`.
