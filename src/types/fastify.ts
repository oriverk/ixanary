import { FastifyRequest } from "fastify"
import * as Fastify from 'fastify'

type CustomRequest<
  Params,
  Query,
  ReqBody,
  Headers extends Fastify.RequestHeadersDefault
  > = Omit<Fastify.FastifyRequest, 'params' | 'query' | 'headers'>
  & { params: Params, body: ReqBody, query: Query, headers: Headers }

export { CustomRequest }