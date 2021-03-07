import { HTTPMethods, RouteHandler, RouteHandlerMethod, RouteShorthandMethod } from 'fastify'
import { getAllCards, getCard, createCard, updateCard, deleteCard } from "../controller/cards"

interface Route {
  method: HTTPMethods,
  url: string,
  // handler: RouteShorthandMethod,
  handler: Omit<RouteShorthandMethod, 'Server'>

}

export const cardsRoutes: Route[] = [
  {
    method: "GET",
    url: "/api/cards",
    handler: getAllCards
  },
  {
    method: "GET",
    url: "/api/cards/:id",
    handler: getCard
  },
  {
    method: "POST",
    url: "/api/cards",
    handler: createCard
  },
  {
    method: "PUT",
    url: "/api/cards/:id",
    handler: updateCard
  }, {
    method: "DELETE",
    url: "/api/cards/:id",
    handler: deleteCard
  },
]