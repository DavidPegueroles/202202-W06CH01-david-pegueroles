// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          name: "Do something",
          done: "true",
          id: 1,
        },
        {
          name: "Do something else",
          done: "false",
          id: 2,
        },
      ])
    )
  ),

  rest.delete(`${process.env.REACT_APP_API}1`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
];
