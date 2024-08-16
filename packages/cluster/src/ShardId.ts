/**
 * @since 1.0.0
 */
import * as Model from "@effect/"
import * as Schema from "@effect/schema/Schema"
import { IntegerFromString } from "./internal/schemas.js"

/**
 * @since 1.0.0
 * @category type ids
 */
export const TypeId: unique symbol = Symbol.for("@effect/cluster/ShardId")

/**
 * @since 1.0.0
 * @category type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 1.0.0
 * @category constructors
 */
export const ShardId = IntegerFromString.pipe(
  Schema.brand(TypeId),
  Schema.annotations({ identifier: "ShardId" })
)

/**
 * @since 1.0.0
 * @category models
 */
export type ShardId = Schema.Schema.Type<typeof ShardId>
