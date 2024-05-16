# Comments feed

Comments feed that displays all comments and updates the feed in real-time when new comments are added.

> Note, this application is a proof of concept and is Not production ready.

> Note, Initial Express API existed from starter project called Frontend Choose Your Own Adventure and then updated to match with requirements, for example, adding real-time functionality with Server Sent Events.

## Stack

> ExpressJS, Sqlite, React, React-query, Vite

### Highlights

> Caching, Optimistic Updates UX, Dynamic UX based on Comment Size, Custom Avatar, XSS handling, Application state handling of disabled or enabled or error or loading or empty state, CSS Animation, real-time updates with Server Sent Events

## Usage

### Install

```
$ npm install
```

# Run the application with a Fast network connection (service and DB response is instantaneous)

```
$ npm run dev
```

# Run the application with a Slow network connection (2 second delay)

Note, this experience emulates posting a comment and waiting for a slow response from the service. It highlights the optimistic update UX that is provided in the Comment Feed experience for the Customer and the different request States that are available, for example, Loading, Success/Error.

```
$ npm run dev:slow
```

### Visit http://localhost:5173/

### Features added

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
- I used `vite` and configured the proxy settings in `vite.config.ts`.
- Real-time updates using Server Sent Events
