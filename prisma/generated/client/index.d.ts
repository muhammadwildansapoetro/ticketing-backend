
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organizer
 * 
 */
export type Organizer = $Result.DefaultSelection<Prisma.$OrganizerPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerCoupon
 * 
 */
export type CustomerCoupon = $Result.DefaultSelection<Prisma.$CustomerCouponPayload>
/**
 * Model CustomerPoint
 * 
 */
export type CustomerPoint = $Result.DefaultSelection<Prisma.$CustomerPointPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDetail
 * 
 */
export type OrderDetail = $Result.DefaultSelection<Prisma.$OrderDetailPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventCategory: {
  Training: 'Training',
  Friendly: 'Friendly',
  League: 'League',
  Championship: 'Championship'
};

export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory]


export const TicketCategory: {
  North: 'North',
  East: 'East',
  South: 'South',
  West: 'West'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const OrderStatus: {
  Unpaid: 'Unpaid',
  Paid: 'Paid',
  Canceled: 'Canceled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const RatingRange: {
  One: 'One',
  Two: 'Two',
  Three: 'Three',
  Four: 'Four',
  Five: 'Five'
};

export type RatingRange = (typeof RatingRange)[keyof typeof RatingRange]

}

export type EventCategory = $Enums.EventCategory

export const EventCategory: typeof $Enums.EventCategory

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type RatingRange = $Enums.RatingRange

export const RatingRange: typeof $Enums.RatingRange

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizers
 * const organizers = await prisma.organizer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizers
   * const organizers = await prisma.organizer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organizer`: Exposes CRUD operations for the **Organizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizer.findMany()
    * ```
    */
  get organizer(): Prisma.OrganizerDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.customerCoupon`: Exposes CRUD operations for the **CustomerCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerCoupons
    * const customerCoupons = await prisma.customerCoupon.findMany()
    * ```
    */
  get customerCoupon(): Prisma.CustomerCouponDelegate<ExtArgs>;

  /**
   * `prisma.customerPoint`: Exposes CRUD operations for the **CustomerPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerPoints
    * const customerPoints = await prisma.customerPoint.findMany()
    * ```
    */
  get customerPoint(): Prisma.CustomerPointDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetail.findMany()
    * ```
    */
  get orderDetail(): Prisma.OrderDetailDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organizer: 'Organizer',
    Event: 'Event',
    Ticket: 'Ticket',
    Customer: 'Customer',
    CustomerCoupon: 'CustomerCoupon',
    CustomerPoint: 'CustomerPoint',
    Order: 'Order',
    OrderDetail: 'OrderDetail',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organizer" | "event" | "ticket" | "customer" | "customerCoupon" | "customerPoint" | "order" | "orderDetail" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organizer: {
        payload: Prisma.$OrganizerPayload<ExtArgs>
        fields: Prisma.OrganizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findFirst: {
            args: Prisma.OrganizerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findMany: {
            args: Prisma.OrganizerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[]
          }
          create: {
            args: Prisma.OrganizerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          createMany: {
            args: Prisma.OrganizerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[]
          }
          delete: {
            args: Prisma.OrganizerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          update: {
            args: Prisma.OrganizerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          deleteMany: {
            args: Prisma.OrganizerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          aggregate: {
            args: Prisma.OrganizerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizer>
          }
          groupBy: {
            args: Prisma.OrganizerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizerCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizerCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerCoupon: {
        payload: Prisma.$CustomerCouponPayload<ExtArgs>
        fields: Prisma.CustomerCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          findFirst: {
            args: Prisma.CustomerCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          findMany: {
            args: Prisma.CustomerCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>[]
          }
          create: {
            args: Prisma.CustomerCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          createMany: {
            args: Prisma.CustomerCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>[]
          }
          delete: {
            args: Prisma.CustomerCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          update: {
            args: Prisma.CustomerCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          deleteMany: {
            args: Prisma.CustomerCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCouponPayload>
          }
          aggregate: {
            args: Prisma.CustomerCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerCoupon>
          }
          groupBy: {
            args: Prisma.CustomerCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCouponCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCouponCountAggregateOutputType> | number
          }
        }
      }
      CustomerPoint: {
        payload: Prisma.$CustomerPointPayload<ExtArgs>
        fields: Prisma.CustomerPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          findFirst: {
            args: Prisma.CustomerPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          findMany: {
            args: Prisma.CustomerPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>[]
          }
          create: {
            args: Prisma.CustomerPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          createMany: {
            args: Prisma.CustomerPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>[]
          }
          delete: {
            args: Prisma.CustomerPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          update: {
            args: Prisma.CustomerPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          deleteMany: {
            args: Prisma.CustomerPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPointPayload>
          }
          aggregate: {
            args: Prisma.CustomerPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerPoint>
          }
          groupBy: {
            args: Prisma.CustomerPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerPointCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerPointCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDetail: {
        payload: Prisma.$OrderDetailPayload<ExtArgs>
        fields: Prisma.OrderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findMany: {
            args: Prisma.OrderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          create: {
            args: Prisma.OrderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          createMany: {
            args: Prisma.OrderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          update: {
            args: Prisma.OrderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetail>
          }
          groupBy: {
            args: Prisma.OrderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizerCountOutputType
   */

  export type OrganizerCountOutputType = {
    Event: number
  }

  export type OrganizerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | OrganizerCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizerCountOutputType
     */
    select?: OrganizerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    Ticket: number
    Review: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | EventCountOutputTypeCountTicketArgs
    Review?: boolean | EventCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    OrderDetail: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetail?: boolean | TicketCountOutputTypeCountOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    CustomerPoint: number
    Order: number
    Review: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerPoint?: boolean | CustomerCountOutputTypeCountCustomerPointArgs
    Order?: boolean | CustomerCountOutputTypeCountOrderArgs
    Review?: boolean | CustomerCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomerPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPointWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderDetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetail?: boolean | OrderCountOutputTypeCountOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organizer
   */

  export type AggregateOrganizer = {
    _count: OrganizerCountAggregateOutputType | null
    _avg: OrganizerAvgAggregateOutputType | null
    _sum: OrganizerSumAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  export type OrganizerAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizerSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizerAvgAggregateInputType = {
    id?: true
  }

  export type OrganizerSumAggregateInputType = {
    id?: true
  }

  export type OrganizerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizer to aggregate.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizers
    **/
    _count?: true | OrganizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizerMaxAggregateInputType
  }

  export type GetOrganizerAggregateType<T extends OrganizerAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizer[P]>
      : GetScalarType<T[P], AggregateOrganizer[P]>
  }




  export type OrganizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizerWhereInput
    orderBy?: OrganizerOrderByWithAggregationInput | OrganizerOrderByWithAggregationInput[]
    by: OrganizerScalarFieldEnum[] | OrganizerScalarFieldEnum
    having?: OrganizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizerCountAggregateInputType | true
    _avg?: OrganizerAvgAggregateInputType
    _sum?: OrganizerSumAggregateInputType
    _min?: OrganizerMinAggregateInputType
    _max?: OrganizerMaxAggregateInputType
  }

  export type OrganizerGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    avatar: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrganizerCountAggregateOutputType | null
    _avg: OrganizerAvgAggregateOutputType | null
    _sum: OrganizerSumAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  type GetOrganizerGroupByPayload<T extends OrganizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
        }
      >
    >


  export type OrganizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Event?: boolean | Organizer$EventArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizer"]>

  export type OrganizerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organizer"]>

  export type OrganizerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Organizer$EventArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizer"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      avatar: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizer"]>
    composites: {}
  }

  type OrganizerGetPayload<S extends boolean | null | undefined | OrganizerDefaultArgs> = $Result.GetResult<Prisma.$OrganizerPayload, S>

  type OrganizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizerCountAggregateInputType | true
    }

  export interface OrganizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizer'], meta: { name: 'Organizer' } }
    /**
     * Find zero or one Organizer that matches the filter.
     * @param {OrganizerFindUniqueArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizerFindUniqueArgs>(args: SelectSubset<T, OrganizerFindUniqueArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organizer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizerFindUniqueOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizerFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizerFindFirstArgs>(args?: SelectSubset<T, OrganizerFindFirstArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizerFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizer.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizerWithIdOnly = await prisma.organizer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizerFindManyArgs>(args?: SelectSubset<T, OrganizerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organizer.
     * @param {OrganizerCreateArgs} args - Arguments to create a Organizer.
     * @example
     * // Create one Organizer
     * const Organizer = await prisma.organizer.create({
     *   data: {
     *     // ... data to create a Organizer
     *   }
     * })
     * 
     */
    create<T extends OrganizerCreateArgs>(args: SelectSubset<T, OrganizerCreateArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizers.
     * @param {OrganizerCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizerCreateManyArgs>(args?: SelectSubset<T, OrganizerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {OrganizerCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizerCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organizer.
     * @param {OrganizerDeleteArgs} args - Arguments to delete one Organizer.
     * @example
     * // Delete one Organizer
     * const Organizer = await prisma.organizer.delete({
     *   where: {
     *     // ... filter to delete one Organizer
     *   }
     * })
     * 
     */
    delete<T extends OrganizerDeleteArgs>(args: SelectSubset<T, OrganizerDeleteArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organizer.
     * @param {OrganizerUpdateArgs} args - Arguments to update one Organizer.
     * @example
     * // Update one Organizer
     * const organizer = await prisma.organizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizerUpdateArgs>(args: SelectSubset<T, OrganizerUpdateArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizers.
     * @param {OrganizerDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizerDeleteManyArgs>(args?: SelectSubset<T, OrganizerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizerUpdateManyArgs>(args: SelectSubset<T, OrganizerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizer.
     * @param {OrganizerUpsertArgs} args - Arguments to update or create a Organizer.
     * @example
     * // Update or create a Organizer
     * const organizer = await prisma.organizer.upsert({
     *   create: {
     *     // ... data to create a Organizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizer we want to update
     *   }
     * })
     */
    upsert<T extends OrganizerUpsertArgs>(args: SelectSubset<T, OrganizerUpsertArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizer.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends OrganizerCountArgs>(
      args?: Subset<T, OrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizerAggregateArgs>(args: Subset<T, OrganizerAggregateArgs>): Prisma.PrismaPromise<GetOrganizerAggregateType<T>>

    /**
     * Group by Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizerGroupByArgs['orderBy'] }
        : { orderBy?: OrganizerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizer model
   */
  readonly fields: OrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Organizer$EventArgs<ExtArgs> = {}>(args?: Subset<T, Organizer$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organizer model
   */ 
  interface OrganizerFieldRefs {
    readonly id: FieldRef<"Organizer", 'Int'>
    readonly name: FieldRef<"Organizer", 'String'>
    readonly email: FieldRef<"Organizer", 'String'>
    readonly password: FieldRef<"Organizer", 'String'>
    readonly avatar: FieldRef<"Organizer", 'String'>
    readonly isVerified: FieldRef<"Organizer", 'Boolean'>
    readonly createdAt: FieldRef<"Organizer", 'DateTime'>
    readonly updatedAt: FieldRef<"Organizer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organizer findUnique
   */
  export type OrganizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer findUniqueOrThrow
   */
  export type OrganizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer findFirst
   */
  export type OrganizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer findFirstOrThrow
   */
  export type OrganizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer findMany
   */
  export type OrganizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer create
   */
  export type OrganizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizer.
     */
    data: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
  }

  /**
   * Organizer createMany
   */
  export type OrganizerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizer createManyAndReturn
   */
  export type OrganizerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizer update
   */
  export type OrganizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizer.
     */
    data: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
    /**
     * Choose, which Organizer to update.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer updateMany
   */
  export type OrganizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<OrganizerUpdateManyMutationInput, OrganizerUncheckedUpdateManyInput>
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput
  }

  /**
   * Organizer upsert
   */
  export type OrganizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizer to update in case it exists.
     */
    where: OrganizerWhereUniqueInput
    /**
     * In case the Organizer found by the `where` argument doesn't exist, create a new Organizer with this data.
     */
    create: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
    /**
     * In case the Organizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
  }

  /**
   * Organizer delete
   */
  export type OrganizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter which Organizer to delete.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer deleteMany
   */
  export type OrganizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizerWhereInput
  }

  /**
   * Organizer.Event
   */
  export type Organizer$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Organizer without action
   */
  export type OrganizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    organizerId: number | null
  }

  export type EventSumAggregateOutputType = {
    organizerId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: $Enums.EventCategory | null
    description: string | null
    image: string | null
    location: string | null
    venue: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    organizerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: $Enums.EventCategory | null
    description: string | null
    image: string | null
    location: string | null
    venue: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    organizerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    category: number
    description: number
    image: number
    location: number
    venue: number
    date: number
    startTime: number
    endTime: number
    organizerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    organizerId?: true
  }

  export type EventSumAggregateInputType = {
    organizerId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    description?: true
    image?: true
    location?: true
    venue?: true
    date?: true
    startTime?: true
    endTime?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    description?: true
    image?: true
    location?: true
    venue?: true
    date?: true
    startTime?: true
    endTime?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    description?: true
    image?: true
    location?: true
    venue?: true
    date?: true
    startTime?: true
    endTime?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date
    startTime: Date
    endTime: Date
    organizerId: number
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    image?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    image?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    image?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      organizer: Prisma.$OrganizerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: $Enums.EventCategory
      description: string
      image: string
      location: string
      venue: string
      date: Date
      startTime: Date
      endTime: Date
      organizerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Event$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Event$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends Event$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Event$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    organizer<T extends OrganizerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizerDefaultArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'EventCategory'>
    readonly description: FieldRef<"Event", 'String'>
    readonly image: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly endTime: FieldRef<"Event", 'DateTime'>
    readonly organizerId: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.Ticket
   */
  export type Event$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.Review
   */
  export type Event$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    discountPercentage: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    discountPercentage: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    category: $Enums.TicketCategory | null
    description: string | null
    price: number | null
    quantity: number | null
    discountPercentage: number | null
    discountStartDate: Date | null
    discountEndDate: Date | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    category: $Enums.TicketCategory | null
    description: string | null
    price: number | null
    quantity: number | null
    discountPercentage: number | null
    discountStartDate: Date | null
    discountEndDate: Date | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    category: number
    description: number
    price: number
    quantity: number
    discountPercentage: number
    discountStartDate: number
    discountEndDate: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    discountPercentage?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    discountPercentage?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    price?: true
    quantity?: true
    discountPercentage?: true
    discountStartDate?: true
    discountEndDate?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    price?: true
    quantity?: true
    discountPercentage?: true
    discountStartDate?: true
    discountEndDate?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    price?: true
    quantity?: true
    discountPercentage?: true
    discountStartDate?: true
    discountEndDate?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage: number | null
    discountStartDate: Date | null
    discountEndDate: Date | null
    eventId: string
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    discountPercentage?: boolean
    discountStartDate?: boolean
    discountEndDate?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OrderDetail?: boolean | Ticket$OrderDetailArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    discountPercentage?: boolean
    discountStartDate?: boolean
    discountEndDate?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    discountPercentage?: boolean
    discountStartDate?: boolean
    discountEndDate?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetail?: boolean | Ticket$OrderDetailArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      OrderDetail: Prisma.$OrderDetailPayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.TicketCategory
      description: string
      price: number
      quantity: number
      discountPercentage: number | null
      discountStartDate: Date | null
      discountEndDate: Date | null
      eventId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderDetail<T extends Ticket$OrderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$OrderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany"> | Null>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly quantity: FieldRef<"Ticket", 'Int'>
    readonly discountPercentage: FieldRef<"Ticket", 'Int'>
    readonly discountStartDate: FieldRef<"Ticket", 'DateTime'>
    readonly discountEndDate: FieldRef<"Ticket", 'DateTime'>
    readonly eventId: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.OrderDetail
   */
  export type Ticket$OrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    referralCode: string | null
    referralCodeBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerified: boolean | null
    referralCode: string | null
    referralCodeBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    password: number
    avatar: number
    isVerified: number
    referralCode: number
    referralCodeBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    referralCode?: true
    referralCodeBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    referralCode?: true
    referralCodeBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerified?: true
    referralCode?: true
    referralCodeBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    password: string
    avatar: string | null
    isVerified: boolean
    referralCode: string
    referralCodeBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    referralCode?: boolean
    referralCodeBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CustomerCoupon?: boolean | Customer$CustomerCouponArgs<ExtArgs>
    CustomerPoint?: boolean | Customer$CustomerPointArgs<ExtArgs>
    Order?: boolean | Customer$OrderArgs<ExtArgs>
    Review?: boolean | Customer$ReviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    referralCode?: boolean
    referralCodeBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerified?: boolean
    referralCode?: boolean
    referralCodeBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerCoupon?: boolean | Customer$CustomerCouponArgs<ExtArgs>
    CustomerPoint?: boolean | Customer$CustomerPointArgs<ExtArgs>
    Order?: boolean | Customer$OrderArgs<ExtArgs>
    Review?: boolean | Customer$ReviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      CustomerCoupon: Prisma.$CustomerCouponPayload<ExtArgs> | null
      CustomerPoint: Prisma.$CustomerPointPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      password: string
      avatar: string | null
      isVerified: boolean
      referralCode: string
      referralCodeBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomerCoupon<T extends Customer$CustomerCouponArgs<ExtArgs> = {}>(args?: Subset<T, Customer$CustomerCouponArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CustomerPoint<T extends Customer$CustomerPointArgs<ExtArgs> = {}>(args?: Subset<T, Customer$CustomerPointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findMany"> | Null>
    Order<T extends Customer$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends Customer$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly fullname: FieldRef<"Customer", 'String'>
    readonly username: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly avatar: FieldRef<"Customer", 'String'>
    readonly isVerified: FieldRef<"Customer", 'Boolean'>
    readonly referralCode: FieldRef<"Customer", 'String'>
    readonly referralCodeBy: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.CustomerCoupon
   */
  export type Customer$CustomerCouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    where?: CustomerCouponWhereInput
  }

  /**
   * Customer.CustomerPoint
   */
  export type Customer$CustomerPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    where?: CustomerPointWhereInput
    orderBy?: CustomerPointOrderByWithRelationInput | CustomerPointOrderByWithRelationInput[]
    cursor?: CustomerPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerPointScalarFieldEnum | CustomerPointScalarFieldEnum[]
  }

  /**
   * Customer.Order
   */
  export type Customer$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.Review
   */
  export type Customer$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerCoupon
   */

  export type AggregateCustomerCoupon = {
    _count: CustomerCouponCountAggregateOutputType | null
    _avg: CustomerCouponAvgAggregateOutputType | null
    _sum: CustomerCouponSumAggregateOutputType | null
    _min: CustomerCouponMinAggregateOutputType | null
    _max: CustomerCouponMaxAggregateOutputType | null
  }

  export type CustomerCouponAvgAggregateOutputType = {
    customerId: number | null
    percentage: number | null
  }

  export type CustomerCouponSumAggregateOutputType = {
    customerId: number | null
    percentage: number | null
  }

  export type CustomerCouponMinAggregateOutputType = {
    customerId: number | null
    percentage: number | null
    isRedeem: boolean | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCouponMaxAggregateOutputType = {
    customerId: number | null
    percentage: number | null
    isRedeem: boolean | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCouponCountAggregateOutputType = {
    customerId: number
    percentage: number
    isRedeem: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerCouponAvgAggregateInputType = {
    customerId?: true
    percentage?: true
  }

  export type CustomerCouponSumAggregateInputType = {
    customerId?: true
    percentage?: true
  }

  export type CustomerCouponMinAggregateInputType = {
    customerId?: true
    percentage?: true
    isRedeem?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCouponMaxAggregateInputType = {
    customerId?: true
    percentage?: true
    isRedeem?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCouponCountAggregateInputType = {
    customerId?: true
    percentage?: true
    isRedeem?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCoupon to aggregate.
     */
    where?: CustomerCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCoupons to fetch.
     */
    orderBy?: CustomerCouponOrderByWithRelationInput | CustomerCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerCoupons
    **/
    _count?: true | CustomerCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerCouponMaxAggregateInputType
  }

  export type GetCustomerCouponAggregateType<T extends CustomerCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerCoupon[P]>
      : GetScalarType<T[P], AggregateCustomerCoupon[P]>
  }




  export type CustomerCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCouponWhereInput
    orderBy?: CustomerCouponOrderByWithAggregationInput | CustomerCouponOrderByWithAggregationInput[]
    by: CustomerCouponScalarFieldEnum[] | CustomerCouponScalarFieldEnum
    having?: CustomerCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCouponCountAggregateInputType | true
    _avg?: CustomerCouponAvgAggregateInputType
    _sum?: CustomerCouponSumAggregateInputType
    _min?: CustomerCouponMinAggregateInputType
    _max?: CustomerCouponMaxAggregateInputType
  }

  export type CustomerCouponGroupByOutputType = {
    customerId: number
    percentage: number
    isRedeem: boolean
    expiredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CustomerCouponCountAggregateOutputType | null
    _avg: CustomerCouponAvgAggregateOutputType | null
    _sum: CustomerCouponSumAggregateOutputType | null
    _min: CustomerCouponMinAggregateOutputType | null
    _max: CustomerCouponMaxAggregateOutputType | null
  }

  type GetCustomerCouponGroupByPayload<T extends CustomerCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerCouponGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerCouponGroupByOutputType[P]>
        }
      >
    >


  export type CustomerCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    percentage?: boolean
    isRedeem?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCoupon"]>

  export type CustomerCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    percentage?: boolean
    isRedeem?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCoupon"]>

  export type CustomerCouponSelectScalar = {
    customerId?: boolean
    percentage?: boolean
    isRedeem?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerCoupon"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      percentage: number
      isRedeem: boolean
      expiredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerCoupon"]>
    composites: {}
  }

  type CustomerCouponGetPayload<S extends boolean | null | undefined | CustomerCouponDefaultArgs> = $Result.GetResult<Prisma.$CustomerCouponPayload, S>

  type CustomerCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerCouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCouponCountAggregateInputType | true
    }

  export interface CustomerCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerCoupon'], meta: { name: 'CustomerCoupon' } }
    /**
     * Find zero or one CustomerCoupon that matches the filter.
     * @param {CustomerCouponFindUniqueArgs} args - Arguments to find a CustomerCoupon
     * @example
     * // Get one CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerCouponFindUniqueArgs>(args: SelectSubset<T, CustomerCouponFindUniqueArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerCoupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerCouponFindUniqueOrThrowArgs} args - Arguments to find a CustomerCoupon
     * @example
     * // Get one CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponFindFirstArgs} args - Arguments to find a CustomerCoupon
     * @example
     * // Get one CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerCouponFindFirstArgs>(args?: SelectSubset<T, CustomerCouponFindFirstArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponFindFirstOrThrowArgs} args - Arguments to find a CustomerCoupon
     * @example
     * // Get one CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerCoupons
     * const customerCoupons = await prisma.customerCoupon.findMany()
     * 
     * // Get first 10 CustomerCoupons
     * const customerCoupons = await prisma.customerCoupon.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerCouponWithCustomerIdOnly = await prisma.customerCoupon.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerCouponFindManyArgs>(args?: SelectSubset<T, CustomerCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerCoupon.
     * @param {CustomerCouponCreateArgs} args - Arguments to create a CustomerCoupon.
     * @example
     * // Create one CustomerCoupon
     * const CustomerCoupon = await prisma.customerCoupon.create({
     *   data: {
     *     // ... data to create a CustomerCoupon
     *   }
     * })
     * 
     */
    create<T extends CustomerCouponCreateArgs>(args: SelectSubset<T, CustomerCouponCreateArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerCoupons.
     * @param {CustomerCouponCreateManyArgs} args - Arguments to create many CustomerCoupons.
     * @example
     * // Create many CustomerCoupons
     * const customerCoupon = await prisma.customerCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCouponCreateManyArgs>(args?: SelectSubset<T, CustomerCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerCoupons and returns the data saved in the database.
     * @param {CustomerCouponCreateManyAndReturnArgs} args - Arguments to create many CustomerCoupons.
     * @example
     * // Create many CustomerCoupons
     * const customerCoupon = await prisma.customerCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerCoupons and only return the `customerId`
     * const customerCouponWithCustomerIdOnly = await prisma.customerCoupon.createManyAndReturn({ 
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerCoupon.
     * @param {CustomerCouponDeleteArgs} args - Arguments to delete one CustomerCoupon.
     * @example
     * // Delete one CustomerCoupon
     * const CustomerCoupon = await prisma.customerCoupon.delete({
     *   where: {
     *     // ... filter to delete one CustomerCoupon
     *   }
     * })
     * 
     */
    delete<T extends CustomerCouponDeleteArgs>(args: SelectSubset<T, CustomerCouponDeleteArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerCoupon.
     * @param {CustomerCouponUpdateArgs} args - Arguments to update one CustomerCoupon.
     * @example
     * // Update one CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerCouponUpdateArgs>(args: SelectSubset<T, CustomerCouponUpdateArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerCoupons.
     * @param {CustomerCouponDeleteManyArgs} args - Arguments to filter CustomerCoupons to delete.
     * @example
     * // Delete a few CustomerCoupons
     * const { count } = await prisma.customerCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerCouponDeleteManyArgs>(args?: SelectSubset<T, CustomerCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerCoupons
     * const customerCoupon = await prisma.customerCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerCouponUpdateManyArgs>(args: SelectSubset<T, CustomerCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerCoupon.
     * @param {CustomerCouponUpsertArgs} args - Arguments to update or create a CustomerCoupon.
     * @example
     * // Update or create a CustomerCoupon
     * const customerCoupon = await prisma.customerCoupon.upsert({
     *   create: {
     *     // ... data to create a CustomerCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerCoupon we want to update
     *   }
     * })
     */
    upsert<T extends CustomerCouponUpsertArgs>(args: SelectSubset<T, CustomerCouponUpsertArgs<ExtArgs>>): Prisma__CustomerCouponClient<$Result.GetResult<Prisma.$CustomerCouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponCountArgs} args - Arguments to filter CustomerCoupons to count.
     * @example
     * // Count the number of CustomerCoupons
     * const count = await prisma.customerCoupon.count({
     *   where: {
     *     // ... the filter for the CustomerCoupons we want to count
     *   }
     * })
    **/
    count<T extends CustomerCouponCountArgs>(
      args?: Subset<T, CustomerCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerCouponAggregateArgs>(args: Subset<T, CustomerCouponAggregateArgs>): Prisma.PrismaPromise<GetCustomerCouponAggregateType<T>>

    /**
     * Group by CustomerCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerCouponGroupByArgs['orderBy'] }
        : { orderBy?: CustomerCouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerCoupon model
   */
  readonly fields: CustomerCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerCoupon model
   */ 
  interface CustomerCouponFieldRefs {
    readonly customerId: FieldRef<"CustomerCoupon", 'Int'>
    readonly percentage: FieldRef<"CustomerCoupon", 'Int'>
    readonly isRedeem: FieldRef<"CustomerCoupon", 'Boolean'>
    readonly expiredAt: FieldRef<"CustomerCoupon", 'DateTime'>
    readonly createdAt: FieldRef<"CustomerCoupon", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerCoupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerCoupon findUnique
   */
  export type CustomerCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCoupon to fetch.
     */
    where: CustomerCouponWhereUniqueInput
  }

  /**
   * CustomerCoupon findUniqueOrThrow
   */
  export type CustomerCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCoupon to fetch.
     */
    where: CustomerCouponWhereUniqueInput
  }

  /**
   * CustomerCoupon findFirst
   */
  export type CustomerCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCoupon to fetch.
     */
    where?: CustomerCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCoupons to fetch.
     */
    orderBy?: CustomerCouponOrderByWithRelationInput | CustomerCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCoupons.
     */
    cursor?: CustomerCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCoupons.
     */
    distinct?: CustomerCouponScalarFieldEnum | CustomerCouponScalarFieldEnum[]
  }

  /**
   * CustomerCoupon findFirstOrThrow
   */
  export type CustomerCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCoupon to fetch.
     */
    where?: CustomerCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCoupons to fetch.
     */
    orderBy?: CustomerCouponOrderByWithRelationInput | CustomerCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCoupons.
     */
    cursor?: CustomerCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCoupons.
     */
    distinct?: CustomerCouponScalarFieldEnum | CustomerCouponScalarFieldEnum[]
  }

  /**
   * CustomerCoupon findMany
   */
  export type CustomerCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCoupons to fetch.
     */
    where?: CustomerCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCoupons to fetch.
     */
    orderBy?: CustomerCouponOrderByWithRelationInput | CustomerCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerCoupons.
     */
    cursor?: CustomerCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCoupons.
     */
    skip?: number
    distinct?: CustomerCouponScalarFieldEnum | CustomerCouponScalarFieldEnum[]
  }

  /**
   * CustomerCoupon create
   */
  export type CustomerCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerCoupon.
     */
    data: XOR<CustomerCouponCreateInput, CustomerCouponUncheckedCreateInput>
  }

  /**
   * CustomerCoupon createMany
   */
  export type CustomerCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerCoupons.
     */
    data: CustomerCouponCreateManyInput | CustomerCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerCoupon createManyAndReturn
   */
  export type CustomerCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerCoupons.
     */
    data: CustomerCouponCreateManyInput | CustomerCouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerCoupon update
   */
  export type CustomerCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerCoupon.
     */
    data: XOR<CustomerCouponUpdateInput, CustomerCouponUncheckedUpdateInput>
    /**
     * Choose, which CustomerCoupon to update.
     */
    where: CustomerCouponWhereUniqueInput
  }

  /**
   * CustomerCoupon updateMany
   */
  export type CustomerCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerCoupons.
     */
    data: XOR<CustomerCouponUpdateManyMutationInput, CustomerCouponUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCoupons to update
     */
    where?: CustomerCouponWhereInput
  }

  /**
   * CustomerCoupon upsert
   */
  export type CustomerCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerCoupon to update in case it exists.
     */
    where: CustomerCouponWhereUniqueInput
    /**
     * In case the CustomerCoupon found by the `where` argument doesn't exist, create a new CustomerCoupon with this data.
     */
    create: XOR<CustomerCouponCreateInput, CustomerCouponUncheckedCreateInput>
    /**
     * In case the CustomerCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerCouponUpdateInput, CustomerCouponUncheckedUpdateInput>
  }

  /**
   * CustomerCoupon delete
   */
  export type CustomerCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
    /**
     * Filter which CustomerCoupon to delete.
     */
    where: CustomerCouponWhereUniqueInput
  }

  /**
   * CustomerCoupon deleteMany
   */
  export type CustomerCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCoupons to delete
     */
    where?: CustomerCouponWhereInput
  }

  /**
   * CustomerCoupon without action
   */
  export type CustomerCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCoupon
     */
    select?: CustomerCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCouponInclude<ExtArgs> | null
  }


  /**
   * Model CustomerPoint
   */

  export type AggregateCustomerPoint = {
    _count: CustomerPointCountAggregateOutputType | null
    _avg: CustomerPointAvgAggregateOutputType | null
    _sum: CustomerPointSumAggregateOutputType | null
    _min: CustomerPointMinAggregateOutputType | null
    _max: CustomerPointMaxAggregateOutputType | null
  }

  export type CustomerPointAvgAggregateOutputType = {
    id: number | null
    point: number | null
    customerId: number | null
  }

  export type CustomerPointSumAggregateOutputType = {
    id: number | null
    point: number | null
    customerId: number | null
  }

  export type CustomerPointMinAggregateOutputType = {
    id: number | null
    point: number | null
    isUsed: boolean | null
    customerId: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerPointMaxAggregateOutputType = {
    id: number | null
    point: number | null
    isUsed: boolean | null
    customerId: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerPointCountAggregateOutputType = {
    id: number
    point: number
    isUsed: number
    customerId: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerPointAvgAggregateInputType = {
    id?: true
    point?: true
    customerId?: true
  }

  export type CustomerPointSumAggregateInputType = {
    id?: true
    point?: true
    customerId?: true
  }

  export type CustomerPointMinAggregateInputType = {
    id?: true
    point?: true
    isUsed?: true
    customerId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerPointMaxAggregateInputType = {
    id?: true
    point?: true
    isUsed?: true
    customerId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerPointCountAggregateInputType = {
    id?: true
    point?: true
    isUsed?: true
    customerId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPoint to aggregate.
     */
    where?: CustomerPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPoints to fetch.
     */
    orderBy?: CustomerPointOrderByWithRelationInput | CustomerPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerPoints
    **/
    _count?: true | CustomerPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerPointMaxAggregateInputType
  }

  export type GetCustomerPointAggregateType<T extends CustomerPointAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerPoint[P]>
      : GetScalarType<T[P], AggregateCustomerPoint[P]>
  }




  export type CustomerPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPointWhereInput
    orderBy?: CustomerPointOrderByWithAggregationInput | CustomerPointOrderByWithAggregationInput[]
    by: CustomerPointScalarFieldEnum[] | CustomerPointScalarFieldEnum
    having?: CustomerPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerPointCountAggregateInputType | true
    _avg?: CustomerPointAvgAggregateInputType
    _sum?: CustomerPointSumAggregateInputType
    _min?: CustomerPointMinAggregateInputType
    _max?: CustomerPointMaxAggregateInputType
  }

  export type CustomerPointGroupByOutputType = {
    id: number
    point: number
    isUsed: boolean
    customerId: number
    expiredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CustomerPointCountAggregateOutputType | null
    _avg: CustomerPointAvgAggregateOutputType | null
    _sum: CustomerPointSumAggregateOutputType | null
    _min: CustomerPointMinAggregateOutputType | null
    _max: CustomerPointMaxAggregateOutputType | null
  }

  type GetCustomerPointGroupByPayload<T extends CustomerPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerPointGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerPointGroupByOutputType[P]>
        }
      >
    >


  export type CustomerPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    isUsed?: boolean
    customerId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerPoint"]>

  export type CustomerPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    isUsed?: boolean
    customerId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerPoint"]>

  export type CustomerPointSelectScalar = {
    id?: boolean
    point?: boolean
    isUsed?: boolean
    customerId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerPoint"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      point: number
      isUsed: boolean
      customerId: number
      expiredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerPoint"]>
    composites: {}
  }

  type CustomerPointGetPayload<S extends boolean | null | undefined | CustomerPointDefaultArgs> = $Result.GetResult<Prisma.$CustomerPointPayload, S>

  type CustomerPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerPointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerPointCountAggregateInputType | true
    }

  export interface CustomerPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerPoint'], meta: { name: 'CustomerPoint' } }
    /**
     * Find zero or one CustomerPoint that matches the filter.
     * @param {CustomerPointFindUniqueArgs} args - Arguments to find a CustomerPoint
     * @example
     * // Get one CustomerPoint
     * const customerPoint = await prisma.customerPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerPointFindUniqueArgs>(args: SelectSubset<T, CustomerPointFindUniqueArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerPoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerPointFindUniqueOrThrowArgs} args - Arguments to find a CustomerPoint
     * @example
     * // Get one CustomerPoint
     * const customerPoint = await prisma.customerPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerPointFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointFindFirstArgs} args - Arguments to find a CustomerPoint
     * @example
     * // Get one CustomerPoint
     * const customerPoint = await prisma.customerPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerPointFindFirstArgs>(args?: SelectSubset<T, CustomerPointFindFirstArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointFindFirstOrThrowArgs} args - Arguments to find a CustomerPoint
     * @example
     * // Get one CustomerPoint
     * const customerPoint = await prisma.customerPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerPointFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerPoints
     * const customerPoints = await prisma.customerPoint.findMany()
     * 
     * // Get first 10 CustomerPoints
     * const customerPoints = await prisma.customerPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerPointWithIdOnly = await prisma.customerPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerPointFindManyArgs>(args?: SelectSubset<T, CustomerPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerPoint.
     * @param {CustomerPointCreateArgs} args - Arguments to create a CustomerPoint.
     * @example
     * // Create one CustomerPoint
     * const CustomerPoint = await prisma.customerPoint.create({
     *   data: {
     *     // ... data to create a CustomerPoint
     *   }
     * })
     * 
     */
    create<T extends CustomerPointCreateArgs>(args: SelectSubset<T, CustomerPointCreateArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerPoints.
     * @param {CustomerPointCreateManyArgs} args - Arguments to create many CustomerPoints.
     * @example
     * // Create many CustomerPoints
     * const customerPoint = await prisma.customerPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerPointCreateManyArgs>(args?: SelectSubset<T, CustomerPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerPoints and returns the data saved in the database.
     * @param {CustomerPointCreateManyAndReturnArgs} args - Arguments to create many CustomerPoints.
     * @example
     * // Create many CustomerPoints
     * const customerPoint = await prisma.customerPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerPoints and only return the `id`
     * const customerPointWithIdOnly = await prisma.customerPoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerPointCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerPoint.
     * @param {CustomerPointDeleteArgs} args - Arguments to delete one CustomerPoint.
     * @example
     * // Delete one CustomerPoint
     * const CustomerPoint = await prisma.customerPoint.delete({
     *   where: {
     *     // ... filter to delete one CustomerPoint
     *   }
     * })
     * 
     */
    delete<T extends CustomerPointDeleteArgs>(args: SelectSubset<T, CustomerPointDeleteArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerPoint.
     * @param {CustomerPointUpdateArgs} args - Arguments to update one CustomerPoint.
     * @example
     * // Update one CustomerPoint
     * const customerPoint = await prisma.customerPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerPointUpdateArgs>(args: SelectSubset<T, CustomerPointUpdateArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerPoints.
     * @param {CustomerPointDeleteManyArgs} args - Arguments to filter CustomerPoints to delete.
     * @example
     * // Delete a few CustomerPoints
     * const { count } = await prisma.customerPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerPointDeleteManyArgs>(args?: SelectSubset<T, CustomerPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerPoints
     * const customerPoint = await prisma.customerPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerPointUpdateManyArgs>(args: SelectSubset<T, CustomerPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerPoint.
     * @param {CustomerPointUpsertArgs} args - Arguments to update or create a CustomerPoint.
     * @example
     * // Update or create a CustomerPoint
     * const customerPoint = await prisma.customerPoint.upsert({
     *   create: {
     *     // ... data to create a CustomerPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerPoint we want to update
     *   }
     * })
     */
    upsert<T extends CustomerPointUpsertArgs>(args: SelectSubset<T, CustomerPointUpsertArgs<ExtArgs>>): Prisma__CustomerPointClient<$Result.GetResult<Prisma.$CustomerPointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointCountArgs} args - Arguments to filter CustomerPoints to count.
     * @example
     * // Count the number of CustomerPoints
     * const count = await prisma.customerPoint.count({
     *   where: {
     *     // ... the filter for the CustomerPoints we want to count
     *   }
     * })
    **/
    count<T extends CustomerPointCountArgs>(
      args?: Subset<T, CustomerPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerPointAggregateArgs>(args: Subset<T, CustomerPointAggregateArgs>): Prisma.PrismaPromise<GetCustomerPointAggregateType<T>>

    /**
     * Group by CustomerPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerPointGroupByArgs['orderBy'] }
        : { orderBy?: CustomerPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerPoint model
   */
  readonly fields: CustomerPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerPoint model
   */ 
  interface CustomerPointFieldRefs {
    readonly id: FieldRef<"CustomerPoint", 'Int'>
    readonly point: FieldRef<"CustomerPoint", 'Int'>
    readonly isUsed: FieldRef<"CustomerPoint", 'Boolean'>
    readonly customerId: FieldRef<"CustomerPoint", 'Int'>
    readonly expiredAt: FieldRef<"CustomerPoint", 'DateTime'>
    readonly createdAt: FieldRef<"CustomerPoint", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerPoint findUnique
   */
  export type CustomerPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPoint to fetch.
     */
    where: CustomerPointWhereUniqueInput
  }

  /**
   * CustomerPoint findUniqueOrThrow
   */
  export type CustomerPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPoint to fetch.
     */
    where: CustomerPointWhereUniqueInput
  }

  /**
   * CustomerPoint findFirst
   */
  export type CustomerPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPoint to fetch.
     */
    where?: CustomerPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPoints to fetch.
     */
    orderBy?: CustomerPointOrderByWithRelationInput | CustomerPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPoints.
     */
    cursor?: CustomerPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPoints.
     */
    distinct?: CustomerPointScalarFieldEnum | CustomerPointScalarFieldEnum[]
  }

  /**
   * CustomerPoint findFirstOrThrow
   */
  export type CustomerPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPoint to fetch.
     */
    where?: CustomerPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPoints to fetch.
     */
    orderBy?: CustomerPointOrderByWithRelationInput | CustomerPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPoints.
     */
    cursor?: CustomerPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPoints.
     */
    distinct?: CustomerPointScalarFieldEnum | CustomerPointScalarFieldEnum[]
  }

  /**
   * CustomerPoint findMany
   */
  export type CustomerPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPoints to fetch.
     */
    where?: CustomerPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPoints to fetch.
     */
    orderBy?: CustomerPointOrderByWithRelationInput | CustomerPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerPoints.
     */
    cursor?: CustomerPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPoints.
     */
    skip?: number
    distinct?: CustomerPointScalarFieldEnum | CustomerPointScalarFieldEnum[]
  }

  /**
   * CustomerPoint create
   */
  export type CustomerPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerPoint.
     */
    data: XOR<CustomerPointCreateInput, CustomerPointUncheckedCreateInput>
  }

  /**
   * CustomerPoint createMany
   */
  export type CustomerPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerPoints.
     */
    data: CustomerPointCreateManyInput | CustomerPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerPoint createManyAndReturn
   */
  export type CustomerPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerPoints.
     */
    data: CustomerPointCreateManyInput | CustomerPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerPoint update
   */
  export type CustomerPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerPoint.
     */
    data: XOR<CustomerPointUpdateInput, CustomerPointUncheckedUpdateInput>
    /**
     * Choose, which CustomerPoint to update.
     */
    where: CustomerPointWhereUniqueInput
  }

  /**
   * CustomerPoint updateMany
   */
  export type CustomerPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerPoints.
     */
    data: XOR<CustomerPointUpdateManyMutationInput, CustomerPointUncheckedUpdateManyInput>
    /**
     * Filter which CustomerPoints to update
     */
    where?: CustomerPointWhereInput
  }

  /**
   * CustomerPoint upsert
   */
  export type CustomerPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerPoint to update in case it exists.
     */
    where: CustomerPointWhereUniqueInput
    /**
     * In case the CustomerPoint found by the `where` argument doesn't exist, create a new CustomerPoint with this data.
     */
    create: XOR<CustomerPointCreateInput, CustomerPointUncheckedCreateInput>
    /**
     * In case the CustomerPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerPointUpdateInput, CustomerPointUncheckedUpdateInput>
  }

  /**
   * CustomerPoint delete
   */
  export type CustomerPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
    /**
     * Filter which CustomerPoint to delete.
     */
    where: CustomerPointWhereUniqueInput
  }

  /**
   * CustomerPoint deleteMany
   */
  export type CustomerPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPoints to delete
     */
    where?: CustomerPointWhereInput
  }

  /**
   * CustomerPoint without action
   */
  export type CustomerPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPoint
     */
    select?: CustomerPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPointInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalPrice: number | null
    finalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalPrice: number | null
    finalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalPrice: number | null
    finalPrice: number | null
    status: $Enums.OrderStatus | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalPrice: number | null
    finalPrice: number | null
    status: $Enums.OrderStatus | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    totalPrice: number
    finalPrice: number
    status: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    finalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    finalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerId?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerId: number
    totalPrice: number
    finalPrice: number
    status: $Enums.OrderStatus
    expiredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    OrderDetail?: boolean | Order$OrderDetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    OrderDetail?: boolean | Order$OrderDetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      OrderDetail: Prisma.$OrderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      totalPrice: number
      finalPrice: number
      status: $Enums.OrderStatus
      expiredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    OrderDetail<T extends Order$OrderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly finalPrice: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly expiredAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.OrderDetail
   */
  export type Order$OrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetail
   */

  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  export type OrderDetailAvgAggregateOutputType = {
    orderId: number | null
    ticketId: number | null
    quantity: number | null
    subTotalPrice: number | null
  }

  export type OrderDetailSumAggregateOutputType = {
    orderId: number | null
    ticketId: number | null
    quantity: number | null
    subTotalPrice: number | null
  }

  export type OrderDetailMinAggregateOutputType = {
    orderId: number | null
    ticketId: number | null
    quantity: number | null
    subTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderDetailMaxAggregateOutputType = {
    orderId: number | null
    ticketId: number | null
    quantity: number | null
    subTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderDetailCountAggregateOutputType = {
    orderId: number
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderDetailAvgAggregateInputType = {
    orderId?: true
    ticketId?: true
    quantity?: true
    subTotalPrice?: true
  }

  export type OrderDetailSumAggregateInputType = {
    orderId?: true
    ticketId?: true
    quantity?: true
    subTotalPrice?: true
  }

  export type OrderDetailMinAggregateInputType = {
    orderId?: true
    ticketId?: true
    quantity?: true
    subTotalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderDetailMaxAggregateInputType = {
    orderId?: true
    ticketId?: true
    quantity?: true
    subTotalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderDetailCountAggregateInputType = {
    orderId?: true
    ticketId?: true
    quantity?: true
    subTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetail to aggregate.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailMaxAggregateInputType
  }

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetail[P]>
      : GetScalarType<T[P], AggregateOrderDetail[P]>
  }




  export type OrderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithAggregationInput | OrderDetailOrderByWithAggregationInput[]
    by: OrderDetailScalarFieldEnum[] | OrderDetailScalarFieldEnum
    having?: OrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailCountAggregateInputType | true
    _avg?: OrderDetailAvgAggregateInputType
    _sum?: OrderDetailSumAggregateInputType
    _min?: OrderDetailMinAggregateInputType
    _max?: OrderDetailMaxAggregateInputType
  }

  export type OrderDetailGroupByOutputType = {
    orderId: number
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt: Date
    updatedAt: Date
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    ticketId?: boolean
    quantity?: boolean
    subTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    ticketId?: boolean
    quantity?: boolean
    subTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectScalar = {
    orderId?: boolean
    ticketId?: boolean
    quantity?: boolean
    subTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type OrderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $OrderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      ticketId: number
      quantity: number
      subTotalPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderDetail"]>
    composites: {}
  }

  type OrderDetailGetPayload<S extends boolean | null | undefined | OrderDetailDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailPayload, S>

  type OrderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderDetailCountAggregateInputType | true
    }

  export interface OrderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetail'], meta: { name: 'OrderDetail' } }
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailFindUniqueArgs>(args: SelectSubset<T, OrderDetailFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailFindFirstArgs>(args?: SelectSubset<T, OrderDetailFindFirstArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderDetailWithOrderIdOnly = await prisma.orderDetail.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderDetailFindManyArgs>(args?: SelectSubset<T, OrderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     * 
     */
    create<T extends OrderDetailCreateArgs>(args: SelectSubset<T, OrderDetailCreateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailCreateManyArgs>(args?: SelectSubset<T, OrderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `orderId`
     * const orderDetailWithOrderIdOnly = await prisma.orderDetail.createManyAndReturn({ 
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailDeleteArgs>(args: SelectSubset<T, OrderDetailDeleteArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailUpdateArgs>(args: SelectSubset<T, OrderDetailUpdateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailDeleteManyArgs>(args?: SelectSubset<T, OrderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailUpdateManyArgs>(args: SelectSubset<T, OrderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailUpsertArgs>(args: SelectSubset<T, OrderDetailUpsertArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailAggregateArgs>(args: Subset<T, OrderDetailAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailAggregateType<T>>

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetail model
   */
  readonly fields: OrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetail model
   */ 
  interface OrderDetailFieldRefs {
    readonly orderId: FieldRef<"OrderDetail", 'Int'>
    readonly ticketId: FieldRef<"OrderDetail", 'Int'>
    readonly quantity: FieldRef<"OrderDetail", 'Int'>
    readonly subTotalPrice: FieldRef<"OrderDetail", 'Int'>
    readonly createdAt: FieldRef<"OrderDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetail findUnique
   */
  export type OrderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findFirst
   */
  export type OrderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetail.
     */
    data: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
  }

  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetail createManyAndReturn
   */
  export type OrderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetail.
     */
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
    /**
     * Choose, which OrderDetail to update.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
  }

  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     */
    where: OrderDetailWhereUniqueInput
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     */
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
  }

  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter which OrderDetail to delete.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailWhereInput
  }

  /**
   * OrderDetail without action
   */
  export type OrderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    customerId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    customerId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    customerId: number | null
    eventId: string | null
    review: string | null
    rating: $Enums.RatingRange | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    customerId: number | null
    eventId: string | null
    review: string | null
    rating: $Enums.RatingRange | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    customerId: number
    eventId: number
    review: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    customerId?: true
  }

  export type ReviewSumAggregateInputType = {
    customerId?: true
  }

  export type ReviewMinAggregateInputType = {
    customerId?: true
    eventId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    customerId?: true
    eventId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    customerId?: true
    eventId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    customerId: number
    eventId: string
    review: string
    rating: $Enums.RatingRange
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    eventId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    eventId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    customerId?: boolean
    eventId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      eventId: string
      review: string
      rating: $Enums.RatingRange
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const reviewWithCustomerIdOnly = await prisma.review.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `customerId`
     * const reviewWithCustomerIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly customerId: FieldRef<"Review", 'Int'>
    readonly eventId: FieldRef<"Review", 'String'>
    readonly review: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'RatingRange'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizerScalarFieldEnum = (typeof OrganizerScalarFieldEnum)[keyof typeof OrganizerScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    description: 'description',
    image: 'image',
    location: 'location',
    venue: 'venue',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    organizerId: 'organizerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    discountPercentage: 'discountPercentage',
    discountStartDate: 'discountStartDate',
    discountEndDate: 'discountEndDate',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerified: 'isVerified',
    referralCode: 'referralCode',
    referralCodeBy: 'referralCodeBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerCouponScalarFieldEnum: {
    customerId: 'customerId',
    percentage: 'percentage',
    isRedeem: 'isRedeem',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerCouponScalarFieldEnum = (typeof CustomerCouponScalarFieldEnum)[keyof typeof CustomerCouponScalarFieldEnum]


  export const CustomerPointScalarFieldEnum: {
    id: 'id',
    point: 'point',
    isUsed: 'isUsed',
    customerId: 'customerId',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerPointScalarFieldEnum = (typeof CustomerPointScalarFieldEnum)[keyof typeof CustomerPointScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    totalPrice: 'totalPrice',
    finalPrice: 'finalPrice',
    status: 'status',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDetailScalarFieldEnum: {
    orderId: 'orderId',
    ticketId: 'ticketId',
    quantity: 'quantity',
    subTotalPrice: 'subTotalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderDetailScalarFieldEnum = (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    customerId: 'customerId',
    eventId: 'eventId',
    review: 'review',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventCategory'
   */
  export type EnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory'>
    


  /**
   * Reference to a field of type 'EventCategory[]'
   */
  export type ListEnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory[]'>
    


  /**
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'RatingRange'
   */
  export type EnumRatingRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingRange'>
    


  /**
   * Reference to a field of type 'RatingRange[]'
   */
  export type ListEnumRatingRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingRange[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizerWhereInput = {
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    id?: IntFilter<"Organizer"> | number
    name?: StringFilter<"Organizer"> | string
    email?: StringFilter<"Organizer"> | string
    password?: StringFilter<"Organizer"> | string
    avatar?: StringNullableFilter<"Organizer"> | string | null
    isVerified?: BoolFilter<"Organizer"> | boolean
    createdAt?: DateTimeFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string
    Event?: EventListRelationFilter
  }

  export type OrganizerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Event?: EventOrderByRelationAggregateInput
  }

  export type OrganizerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    name?: StringFilter<"Organizer"> | string
    email?: StringFilter<"Organizer"> | string
    password?: StringFilter<"Organizer"> | string
    avatar?: StringNullableFilter<"Organizer"> | string | null
    isVerified?: BoolFilter<"Organizer"> | boolean
    createdAt?: DateTimeFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeFilter<"Organizer"> | Date | string
    Event?: EventListRelationFilter
  }, "id">

  export type OrganizerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizerCountOrderByAggregateInput
    _avg?: OrganizerAvgOrderByAggregateInput
    _max?: OrganizerMaxOrderByAggregateInput
    _min?: OrganizerMinOrderByAggregateInput
    _sum?: OrganizerSumOrderByAggregateInput
  }

  export type OrganizerScalarWhereWithAggregatesInput = {
    AND?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    OR?: OrganizerScalarWhereWithAggregatesInput[]
    NOT?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organizer"> | number
    name?: StringWithAggregatesFilter<"Organizer"> | string
    email?: StringWithAggregatesFilter<"Organizer"> | string
    password?: StringWithAggregatesFilter<"Organizer"> | string
    avatar?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Organizer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organizer"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    description?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    Ticket?: TicketListRelationFilter
    Review?: ReviewListRelationFilter
    organizer?: XOR<OrganizerScalarRelationFilter, OrganizerWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    image?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    organizer?: OrganizerOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    description?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    Ticket?: TicketListRelationFilter
    Review?: ReviewListRelationFilter
    organizer?: XOR<OrganizerScalarRelationFilter, OrganizerWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    image?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumEventCategoryWithAggregatesFilter<"Event"> | $Enums.EventCategory
    description?: StringWithAggregatesFilter<"Event"> | string
    image?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    venue?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    organizerId?: IntWithAggregatesFilter<"Event"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    quantity?: IntFilter<"Ticket"> | number
    discountPercentage?: IntNullableFilter<"Ticket"> | number | null
    discountStartDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    discountEndDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    eventId?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    OrderDetail?: OrderDetailListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    discountStartDate?: SortOrderInput | SortOrder
    discountEndDate?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    OrderDetail?: OrderDetailOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    quantity?: IntFilter<"Ticket"> | number
    discountPercentage?: IntNullableFilter<"Ticket"> | number | null
    discountStartDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    discountEndDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    eventId?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    OrderDetail?: OrderDetailListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    discountStartDate?: SortOrderInput | SortOrder
    discountEndDate?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringWithAggregatesFilter<"Ticket"> | string
    price?: IntWithAggregatesFilter<"Ticket"> | number
    quantity?: IntWithAggregatesFilter<"Ticket"> | number
    discountPercentage?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    discountStartDate?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    discountEndDate?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    eventId?: StringWithAggregatesFilter<"Ticket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    fullname?: StringFilter<"Customer"> | string
    username?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    referralCode?: StringFilter<"Customer"> | string
    referralCodeBy?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    CustomerCoupon?: XOR<CustomerCouponNullableScalarRelationFilter, CustomerCouponWhereInput> | null
    CustomerPoint?: CustomerPointListRelationFilter
    Order?: OrderListRelationFilter
    Review?: ReviewListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    referralCode?: SortOrder
    referralCodeBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CustomerCoupon?: CustomerCouponOrderByWithRelationInput
    CustomerPoint?: CustomerPointOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    fullname?: StringFilter<"Customer"> | string
    username?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    referralCode?: StringFilter<"Customer"> | string
    referralCodeBy?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    CustomerCoupon?: XOR<CustomerCouponNullableScalarRelationFilter, CustomerCouponWhereInput> | null
    CustomerPoint?: CustomerPointListRelationFilter
    Order?: OrderListRelationFilter
    Review?: ReviewListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    referralCode?: SortOrder
    referralCodeBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    fullname?: StringWithAggregatesFilter<"Customer"> | string
    username?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringWithAggregatesFilter<"Customer"> | string
    avatar?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Customer"> | boolean
    referralCode?: StringWithAggregatesFilter<"Customer"> | string
    referralCodeBy?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CustomerCouponWhereInput = {
    AND?: CustomerCouponWhereInput | CustomerCouponWhereInput[]
    OR?: CustomerCouponWhereInput[]
    NOT?: CustomerCouponWhereInput | CustomerCouponWhereInput[]
    customerId?: IntFilter<"CustomerCoupon"> | number
    percentage?: IntFilter<"CustomerCoupon"> | number
    isRedeem?: BoolFilter<"CustomerCoupon"> | boolean
    expiredAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    createdAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerCouponOrderByWithRelationInput = {
    customerId?: SortOrder
    percentage?: SortOrder
    isRedeem?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerCouponWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    AND?: CustomerCouponWhereInput | CustomerCouponWhereInput[]
    OR?: CustomerCouponWhereInput[]
    NOT?: CustomerCouponWhereInput | CustomerCouponWhereInput[]
    percentage?: IntFilter<"CustomerCoupon"> | number
    isRedeem?: BoolFilter<"CustomerCoupon"> | boolean
    expiredAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    createdAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCoupon"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "customerId">

  export type CustomerCouponOrderByWithAggregationInput = {
    customerId?: SortOrder
    percentage?: SortOrder
    isRedeem?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCouponCountOrderByAggregateInput
    _avg?: CustomerCouponAvgOrderByAggregateInput
    _max?: CustomerCouponMaxOrderByAggregateInput
    _min?: CustomerCouponMinOrderByAggregateInput
    _sum?: CustomerCouponSumOrderByAggregateInput
  }

  export type CustomerCouponScalarWhereWithAggregatesInput = {
    AND?: CustomerCouponScalarWhereWithAggregatesInput | CustomerCouponScalarWhereWithAggregatesInput[]
    OR?: CustomerCouponScalarWhereWithAggregatesInput[]
    NOT?: CustomerCouponScalarWhereWithAggregatesInput | CustomerCouponScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"CustomerCoupon"> | number
    percentage?: IntWithAggregatesFilter<"CustomerCoupon"> | number
    isRedeem?: BoolWithAggregatesFilter<"CustomerCoupon"> | boolean
    expiredAt?: DateTimeWithAggregatesFilter<"CustomerCoupon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerCoupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerCoupon"> | Date | string
  }

  export type CustomerPointWhereInput = {
    AND?: CustomerPointWhereInput | CustomerPointWhereInput[]
    OR?: CustomerPointWhereInput[]
    NOT?: CustomerPointWhereInput | CustomerPointWhereInput[]
    id?: IntFilter<"CustomerPoint"> | number
    point?: IntFilter<"CustomerPoint"> | number
    isUsed?: BoolFilter<"CustomerPoint"> | boolean
    customerId?: IntFilter<"CustomerPoint"> | number
    expiredAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    createdAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerPointOrderByWithRelationInput = {
    id?: SortOrder
    point?: SortOrder
    isUsed?: SortOrder
    customerId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerPointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerPointWhereInput | CustomerPointWhereInput[]
    OR?: CustomerPointWhereInput[]
    NOT?: CustomerPointWhereInput | CustomerPointWhereInput[]
    point?: IntFilter<"CustomerPoint"> | number
    isUsed?: BoolFilter<"CustomerPoint"> | boolean
    customerId?: IntFilter<"CustomerPoint"> | number
    expiredAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    createdAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerPointOrderByWithAggregationInput = {
    id?: SortOrder
    point?: SortOrder
    isUsed?: SortOrder
    customerId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerPointCountOrderByAggregateInput
    _avg?: CustomerPointAvgOrderByAggregateInput
    _max?: CustomerPointMaxOrderByAggregateInput
    _min?: CustomerPointMinOrderByAggregateInput
    _sum?: CustomerPointSumOrderByAggregateInput
  }

  export type CustomerPointScalarWhereWithAggregatesInput = {
    AND?: CustomerPointScalarWhereWithAggregatesInput | CustomerPointScalarWhereWithAggregatesInput[]
    OR?: CustomerPointScalarWhereWithAggregatesInput[]
    NOT?: CustomerPointScalarWhereWithAggregatesInput | CustomerPointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerPoint"> | number
    point?: IntWithAggregatesFilter<"CustomerPoint"> | number
    isUsed?: BoolWithAggregatesFilter<"CustomerPoint"> | boolean
    customerId?: IntWithAggregatesFilter<"CustomerPoint"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"CustomerPoint"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerPoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerPoint"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    OrderDetail?: OrderDetailListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    OrderDetail?: OrderDetailOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    OrderDetail?: OrderDetailListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    customerId?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    finalPrice?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    expiredAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderDetailWhereInput = {
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    ticketId?: IntFilter<"OrderDetail"> | number
    quantity?: IntFilter<"OrderDetail"> | number
    subTotalPrice?: IntFilter<"OrderDetail"> | number
    createdAt?: DateTimeFilter<"OrderDetail"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetail"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type OrderDetailOrderByWithRelationInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type OrderDetailWhereUniqueInput = Prisma.AtLeast<{
    ticketId_orderId?: OrderDetailTicketIdOrderIdCompoundUniqueInput
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    ticketId?: IntFilter<"OrderDetail"> | number
    quantity?: IntFilter<"OrderDetail"> | number
    subTotalPrice?: IntFilter<"OrderDetail"> | number
    createdAt?: DateTimeFilter<"OrderDetail"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetail"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "ticketId_orderId">

  export type OrderDetailOrderByWithAggregationInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderDetailCountOrderByAggregateInput
    _avg?: OrderDetailAvgOrderByAggregateInput
    _max?: OrderDetailMaxOrderByAggregateInput
    _min?: OrderDetailMinOrderByAggregateInput
    _sum?: OrderDetailSumOrderByAggregateInput
  }

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    OR?: OrderDetailScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"OrderDetail"> | number
    ticketId?: IntWithAggregatesFilter<"OrderDetail"> | number
    quantity?: IntWithAggregatesFilter<"OrderDetail"> | number
    subTotalPrice?: IntWithAggregatesFilter<"OrderDetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderDetail"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    customerId?: IntFilter<"Review"> | number
    eventId?: StringFilter<"Review"> | string
    review?: StringFilter<"Review"> | string
    rating?: EnumRatingRangeFilter<"Review"> | $Enums.RatingRange
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    customerId?: SortOrder
    eventId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    eventId_customerId?: ReviewEventIdCustomerIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    customerId?: IntFilter<"Review"> | number
    eventId?: StringFilter<"Review"> | string
    review?: StringFilter<"Review"> | string
    rating?: EnumRatingRangeFilter<"Review"> | $Enums.RatingRange
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "eventId_customerId">

  export type ReviewOrderByWithAggregationInput = {
    customerId?: SortOrder
    eventId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Review"> | number
    eventId?: StringWithAggregatesFilter<"Review"> | string
    review?: StringWithAggregatesFilter<"Review"> | string
    rating?: EnumRatingRangeWithAggregatesFilter<"Review"> | $Enums.RatingRange
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type OrganizerCreateInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    organizer: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    organizerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    organizer?: OrganizerUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    organizerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailCreateNestedManyWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUpdateManyWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutCustomerInput
    Review?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponUncheckedCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    Review?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUncheckedUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCouponCreateInput = {
    percentage?: number
    isRedeem: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerCouponInput
  }

  export type CustomerCouponUncheckedCreateInput = {
    customerId: number
    percentage?: number
    isRedeem: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCouponUpdateInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerCouponNestedInput
  }

  export type CustomerCouponUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCouponCreateManyInput = {
    customerId: number
    percentage?: number
    isRedeem: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCouponUpdateManyMutationInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCouponUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointCreateInput = {
    point?: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerPointInput
  }

  export type CustomerPointUncheckedCreateInput = {
    id?: number
    point?: number
    isUsed?: boolean
    customerId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPointUpdateInput = {
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerPointNestedInput
  }

  export type CustomerPointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    customerId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointCreateManyInput = {
    id?: number
    point?: number
    isUsed?: boolean
    customerId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPointUpdateManyMutationInput = {
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    customerId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrderInput
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerId: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput
    OrderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    customerId: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateInput = {
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderDetailInput
    ticket: TicketCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateInput = {
    orderId: number
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateManyInput = {
    orderId: number
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutReviewInput
    customer: CustomerCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    customerId: number
    eventId: string
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    customerId: number
    eventId: string
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type OrganizerScalarRelationFilter = {
    is?: OrganizerWhereInput
    isNot?: OrganizerWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    image?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    organizerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    image?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    image?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    organizerId?: SortOrder
  }

  export type EnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput
    some?: OrderDetailWhereInput
    none?: OrderDetailWhereInput
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrder
    discountStartDate?: SortOrder
    discountEndDate?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrder
    discountStartDate?: SortOrder
    discountEndDate?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrder
    discountStartDate?: SortOrder
    discountEndDate?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    discountPercentage?: SortOrder
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomerCouponNullableScalarRelationFilter = {
    is?: CustomerCouponWhereInput | null
    isNot?: CustomerCouponWhereInput | null
  }

  export type CustomerPointListRelationFilter = {
    every?: CustomerPointWhereInput
    some?: CustomerPointWhereInput
    none?: CustomerPointWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CustomerPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    referralCode?: SortOrder
    referralCodeBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    referralCode?: SortOrder
    referralCodeBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerified?: SortOrder
    referralCode?: SortOrder
    referralCodeBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerCouponCountOrderByAggregateInput = {
    customerId?: SortOrder
    percentage?: SortOrder
    isRedeem?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCouponAvgOrderByAggregateInput = {
    customerId?: SortOrder
    percentage?: SortOrder
  }

  export type CustomerCouponMaxOrderByAggregateInput = {
    customerId?: SortOrder
    percentage?: SortOrder
    isRedeem?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCouponMinOrderByAggregateInput = {
    customerId?: SortOrder
    percentage?: SortOrder
    isRedeem?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCouponSumOrderByAggregateInput = {
    customerId?: SortOrder
    percentage?: SortOrder
  }

  export type CustomerPointCountOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    isUsed?: SortOrder
    customerId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPointAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerPointMaxOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    isUsed?: SortOrder
    customerId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPointMinOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    isUsed?: SortOrder
    customerId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerPointSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    customerId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type OrderDetailTicketIdOrderIdCompoundUniqueInput = {
    ticketId: number
    orderId: number
  }

  export type OrderDetailCountOrderByAggregateInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderDetailAvgOrderByAggregateInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
  }

  export type OrderDetailMaxOrderByAggregateInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderDetailMinOrderByAggregateInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderDetailSumOrderByAggregateInput = {
    orderId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    subTotalPrice?: SortOrder
  }

  export type EnumRatingRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingRange | EnumRatingRangeFieldRefInput<$PrismaModel>
    in?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingRangeFilter<$PrismaModel> | $Enums.RatingRange
  }

  export type ReviewEventIdCustomerIdCompoundUniqueInput = {
    eventId: string
    customerId: number
  }

  export type ReviewCountOrderByAggregateInput = {
    customerId?: SortOrder
    eventId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    customerId?: SortOrder
    eventId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    customerId?: SortOrder
    eventId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type EnumRatingRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingRange | EnumRatingRangeFieldRefInput<$PrismaModel>
    in?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingRangeWithAggregatesFilter<$PrismaModel> | $Enums.RatingRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRatingRangeFilter<$PrismaModel>
    _max?: NestedEnumRatingRangeFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrganizerCreateNestedOneWithoutEventInput = {
    create?: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutEventInput
    connect?: OrganizerWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumEventCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EventCategory
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrganizerUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutEventInput
    upsert?: OrganizerUpsertWithoutEventInput
    connect?: OrganizerWhereUniqueInput
    update?: XOR<XOR<OrganizerUpdateToOneWithWhereWithoutEventInput, OrganizerUpdateWithoutEventInput>, OrganizerUncheckedUpdateWithoutEventInput>
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderDetailCreateNestedManyWithoutTicketInput = {
    create?: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput> | OrderDetailCreateWithoutTicketInput[] | OrderDetailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketInput | OrderDetailCreateOrConnectWithoutTicketInput[]
    createMany?: OrderDetailCreateManyTicketInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput> | OrderDetailCreateWithoutTicketInput[] | OrderDetailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketInput | OrderDetailCreateOrConnectWithoutTicketInput[]
    createMany?: OrderDetailCreateManyTicketInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderDetailUpdateManyWithoutTicketNestedInput = {
    create?: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput> | OrderDetailCreateWithoutTicketInput[] | OrderDetailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketInput | OrderDetailCreateOrConnectWithoutTicketInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutTicketInput | OrderDetailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: OrderDetailCreateManyTicketInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutTicketInput | OrderDetailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutTicketInput | OrderDetailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type OrderDetailUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput> | OrderDetailCreateWithoutTicketInput[] | OrderDetailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketInput | OrderDetailCreateOrConnectWithoutTicketInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutTicketInput | OrderDetailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: OrderDetailCreateManyTicketInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutTicketInput | OrderDetailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutTicketInput | OrderDetailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type CustomerCouponCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CustomerCouponCreateOrConnectWithoutCustomerInput
    connect?: CustomerCouponWhereUniqueInput
  }

  export type CustomerPointCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput> | CustomerPointCreateWithoutCustomerInput[] | CustomerPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPointCreateOrConnectWithoutCustomerInput | CustomerPointCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPointCreateManyCustomerInputEnvelope
    connect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CustomerCouponUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CustomerCouponCreateOrConnectWithoutCustomerInput
    connect?: CustomerCouponWhereUniqueInput
  }

  export type CustomerPointUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput> | CustomerPointCreateWithoutCustomerInput[] | CustomerPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPointCreateOrConnectWithoutCustomerInput | CustomerPointCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPointCreateManyCustomerInputEnvelope
    connect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CustomerCouponUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CustomerCouponCreateOrConnectWithoutCustomerInput
    upsert?: CustomerCouponUpsertWithoutCustomerInput
    disconnect?: CustomerCouponWhereInput | boolean
    delete?: CustomerCouponWhereInput | boolean
    connect?: CustomerCouponWhereUniqueInput
    update?: XOR<XOR<CustomerCouponUpdateToOneWithWhereWithoutCustomerInput, CustomerCouponUpdateWithoutCustomerInput>, CustomerCouponUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPointUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput> | CustomerPointCreateWithoutCustomerInput[] | CustomerPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPointCreateOrConnectWithoutCustomerInput | CustomerPointCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPointUpsertWithWhereUniqueWithoutCustomerInput | CustomerPointUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPointCreateManyCustomerInputEnvelope
    set?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    disconnect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    delete?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    connect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    update?: CustomerPointUpdateWithWhereUniqueWithoutCustomerInput | CustomerPointUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPointUpdateManyWithWhereWithoutCustomerInput | CustomerPointUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPointScalarWhereInput | CustomerPointScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CustomerCouponUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CustomerCouponCreateOrConnectWithoutCustomerInput
    upsert?: CustomerCouponUpsertWithoutCustomerInput
    disconnect?: CustomerCouponWhereInput | boolean
    delete?: CustomerCouponWhereInput | boolean
    connect?: CustomerCouponWhereUniqueInput
    update?: XOR<XOR<CustomerCouponUpdateToOneWithWhereWithoutCustomerInput, CustomerCouponUpdateWithoutCustomerInput>, CustomerCouponUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPointUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput> | CustomerPointCreateWithoutCustomerInput[] | CustomerPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPointCreateOrConnectWithoutCustomerInput | CustomerPointCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPointUpsertWithWhereUniqueWithoutCustomerInput | CustomerPointUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPointCreateManyCustomerInputEnvelope
    set?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    disconnect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    delete?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    connect?: CustomerPointWhereUniqueInput | CustomerPointWhereUniqueInput[]
    update?: CustomerPointUpdateWithWhereUniqueWithoutCustomerInput | CustomerPointUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPointUpdateManyWithWhereWithoutCustomerInput | CustomerPointUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPointScalarWhereInput | CustomerPointScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCustomerCouponInput = {
    create?: XOR<CustomerCreateWithoutCustomerCouponInput, CustomerUncheckedCreateWithoutCustomerCouponInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerCouponInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCustomerCouponNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomerCouponInput, CustomerUncheckedCreateWithoutCustomerCouponInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerCouponInput
    upsert?: CustomerUpsertWithoutCustomerCouponInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomerCouponInput, CustomerUpdateWithoutCustomerCouponInput>, CustomerUncheckedUpdateWithoutCustomerCouponInput>
  }

  export type CustomerCreateNestedOneWithoutCustomerPointInput = {
    create?: XOR<CustomerCreateWithoutCustomerPointInput, CustomerUncheckedCreateWithoutCustomerPointInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerPointInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCustomerPointNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomerPointInput, CustomerUncheckedCreateWithoutCustomerPointInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerPointInput
    upsert?: CustomerUpsertWithoutCustomerPointInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomerPointInput, CustomerUpdateWithoutCustomerPointInput>, CustomerUncheckedUpdateWithoutCustomerPointInput>
  }

  export type CustomerCreateNestedOneWithoutOrderInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type CustomerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    upsert?: CustomerUpsertWithoutOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrderInput, CustomerUpdateWithoutOrderInput>, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput
    connect?: TicketWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    upsert?: OrderUpsertWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderDetailInput, OrderUpdateWithoutOrderDetailInput>, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type TicketUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput
    upsert?: TicketUpsertWithoutOrderDetailInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutOrderDetailInput, TicketUpdateWithoutOrderDetailInput>, TicketUncheckedUpdateWithoutOrderDetailInput>
  }

  export type EventCreateNestedOneWithoutReviewInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    connect?: EventWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutReviewInput = {
    create?: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewInput
    connect?: CustomerWhereUniqueInput
  }

  export type EnumRatingRangeFieldUpdateOperationsInput = {
    set?: $Enums.RatingRange
  }

  export type EventUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    upsert?: EventUpsertWithoutReviewInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewInput, EventUpdateWithoutReviewInput>, EventUncheckedUpdateWithoutReviewInput>
  }

  export type CustomerUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewInput
    upsert?: CustomerUpsertWithoutReviewInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutReviewInput, CustomerUpdateWithoutReviewInput>, CustomerUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumRatingRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingRange | EnumRatingRangeFieldRefInput<$PrismaModel>
    in?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingRangeFilter<$PrismaModel> | $Enums.RatingRange
  }

  export type NestedEnumRatingRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingRange | EnumRatingRangeFieldRefInput<$PrismaModel>
    in?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingRange[] | ListEnumRatingRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingRangeWithAggregatesFilter<$PrismaModel> | $Enums.RatingRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRatingRangeFilter<$PrismaModel>
    _max?: NestedEnumRatingRangeFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    description?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketCreateWithoutEventInput = {
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    customerId: number
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrganizerCreateWithoutEventInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizerUncheckedCreateWithoutEventInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizerCreateOrConnectWithoutEventInput = {
    where: OrganizerWhereUniqueInput
    create: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    quantity?: IntFilter<"Ticket"> | number
    discountPercentage?: IntNullableFilter<"Ticket"> | number | null
    discountStartDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    discountEndDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    eventId?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    customerId?: IntFilter<"Review"> | number
    eventId?: StringFilter<"Review"> | string
    review?: StringFilter<"Review"> | string
    rating?: EnumRatingRangeFilter<"Review"> | $Enums.RatingRange
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type OrganizerUpsertWithoutEventInput = {
    update: XOR<OrganizerUpdateWithoutEventInput, OrganizerUncheckedUpdateWithoutEventInput>
    create: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    where?: OrganizerWhereInput
  }

  export type OrganizerUpdateToOneWithWhereWithoutEventInput = {
    where?: OrganizerWhereInput
    data: XOR<OrganizerUpdateWithoutEventInput, OrganizerUncheckedUpdateWithoutEventInput>
  }

  export type OrganizerUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizerUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateWithoutTicketInput = {
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutTicketInput = {
    orderId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailCreateOrConnectWithoutTicketInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput>
  }

  export type OrderDetailCreateManyTicketInputEnvelope = {
    data: OrderDetailCreateManyTicketInput | OrderDetailCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutTicketInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Review?: ReviewCreateNestedManyWithoutEventInput
    organizer: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    organizerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutTicketInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutTicketInput, OrderDetailUncheckedUpdateWithoutTicketInput>
    create: XOR<OrderDetailCreateWithoutTicketInput, OrderDetailUncheckedCreateWithoutTicketInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutTicketInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutTicketInput, OrderDetailUncheckedUpdateWithoutTicketInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutTicketInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutTicketInput>
  }

  export type OrderDetailScalarWhereInput = {
    AND?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    OR?: OrderDetailScalarWhereInput[]
    NOT?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    ticketId?: IntFilter<"OrderDetail"> | number
    quantity?: IntFilter<"OrderDetail"> | number
    subTotalPrice?: IntFilter<"OrderDetail"> | number
    createdAt?: DateTimeFilter<"OrderDetail"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetail"> | Date | string
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUpdateManyWithoutEventNestedInput
    organizer?: OrganizerUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CustomerCouponCreateWithoutCustomerInput = {
    percentage?: number
    isRedeem: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCouponUncheckedCreateWithoutCustomerInput = {
    percentage?: number
    isRedeem: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCouponCreateOrConnectWithoutCustomerInput = {
    where: CustomerCouponWhereUniqueInput
    create: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPointCreateWithoutCustomerInput = {
    point?: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPointUncheckedCreateWithoutCustomerInput = {
    id?: number
    point?: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPointCreateOrConnectWithoutCustomerInput = {
    where: CustomerPointWhereUniqueInput
    create: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPointCreateManyCustomerInputEnvelope = {
    data: CustomerPointCreateManyCustomerInput | CustomerPointCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCustomerInput = {
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutCustomerInput = {
    eventId: string
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewCreateManyCustomerInputEnvelope = {
    data: ReviewCreateManyCustomerInput | ReviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCouponUpsertWithoutCustomerInput = {
    update: XOR<CustomerCouponUpdateWithoutCustomerInput, CustomerCouponUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerCouponCreateWithoutCustomerInput, CustomerCouponUncheckedCreateWithoutCustomerInput>
    where?: CustomerCouponWhereInput
  }

  export type CustomerCouponUpdateToOneWithWhereWithoutCustomerInput = {
    where?: CustomerCouponWhereInput
    data: XOR<CustomerCouponUpdateWithoutCustomerInput, CustomerCouponUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerCouponUpdateWithoutCustomerInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCouponUncheckedUpdateWithoutCustomerInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPointWhereUniqueInput
    update: XOR<CustomerPointUpdateWithoutCustomerInput, CustomerPointUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerPointCreateWithoutCustomerInput, CustomerPointUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPointUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPointWhereUniqueInput
    data: XOR<CustomerPointUpdateWithoutCustomerInput, CustomerPointUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPointUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerPointScalarWhereInput
    data: XOR<CustomerPointUpdateManyMutationInput, CustomerPointUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerPointScalarWhereInput = {
    AND?: CustomerPointScalarWhereInput | CustomerPointScalarWhereInput[]
    OR?: CustomerPointScalarWhereInput[]
    NOT?: CustomerPointScalarWhereInput | CustomerPointScalarWhereInput[]
    id?: IntFilter<"CustomerPoint"> | number
    point?: IntFilter<"CustomerPoint"> | number
    isUsed?: BoolFilter<"CustomerPoint"> | boolean
    customerId?: IntFilter<"CustomerPoint"> | number
    expiredAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    createdAt?: DateTimeFilter<"CustomerPoint"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerPoint"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutCustomerCouponInput = {
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerPoint?: CustomerPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutCustomerInput
    Review?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomerCouponInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerPoint?: CustomerPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    Review?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCustomerCouponInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomerCouponInput, CustomerUncheckedCreateWithoutCustomerCouponInput>
  }

  export type CustomerUpsertWithoutCustomerCouponInput = {
    update: XOR<CustomerUpdateWithoutCustomerCouponInput, CustomerUncheckedUpdateWithoutCustomerCouponInput>
    create: XOR<CustomerCreateWithoutCustomerCouponInput, CustomerUncheckedCreateWithoutCustomerCouponInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomerCouponInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomerCouponInput, CustomerUncheckedUpdateWithoutCustomerCouponInput>
  }

  export type CustomerUpdateWithoutCustomerCouponInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerPoint?: CustomerPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomerCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerPoint?: CustomerPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutCustomerPointInput = {
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponCreateNestedOneWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutCustomerInput
    Review?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomerPointInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponUncheckedCreateNestedOneWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    Review?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCustomerPointInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomerPointInput, CustomerUncheckedCreateWithoutCustomerPointInput>
  }

  export type CustomerUpsertWithoutCustomerPointInput = {
    update: XOR<CustomerUpdateWithoutCustomerPointInput, CustomerUncheckedUpdateWithoutCustomerPointInput>
    create: XOR<CustomerCreateWithoutCustomerPointInput, CustomerUncheckedCreateWithoutCustomerPointInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomerPointInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomerPointInput, CustomerUncheckedUpdateWithoutCustomerPointInput>
  }

  export type CustomerUpdateWithoutCustomerPointInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUpdateOneWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomerPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUncheckedUpdateOneWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutOrderInput = {
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointCreateNestedManyWithoutCustomerInput
    Review?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrderInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponUncheckedCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointUncheckedCreateNestedManyWithoutCustomerInput
    Review?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailCreateWithoutOrderInput = {
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutOrderInput = {
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailCreateOrConnectWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailCreateManyOrderInputEnvelope = {
    data: OrderDetailCreateManyOrderInput | OrderDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrderInput = {
    update: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerUpdateWithoutOrderInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUncheckedUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUncheckedUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderDetailInput = {
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderDetailInput = {
    id?: number
    customerId: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderDetailInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
  }

  export type TicketCreateWithoutOrderDetailInput = {
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutOrderDetailInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutOrderDetailInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrderUpsertWithoutOrderDetailInput = {
    update: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type OrderUpdateWithoutOrderDetailInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutOrderDetailInput = {
    update: XOR<TicketUpdateWithoutOrderDetailInput, TicketUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutOrderDetailInput, TicketUncheckedUpdateWithoutOrderDetailInput>
  }

  export type TicketUpdateWithoutOrderDetailInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateWithoutReviewInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutEventInput
    organizer: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    organizerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
  }

  export type CustomerCreateWithoutReviewInput = {
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutReviewInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerified?: boolean
    referralCode: string
    referralCodeBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerCoupon?: CustomerCouponUncheckedCreateNestedOneWithoutCustomerInput
    CustomerPoint?: CustomerPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutReviewInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
  }

  export type EventUpsertWithoutReviewInput = {
    update: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    organizer?: OrganizerUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CustomerUpsertWithoutReviewInput = {
    update: XOR<CustomerUpdateWithoutReviewInput, CustomerUncheckedUpdateWithoutReviewInput>
    create: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutReviewInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutReviewInput, CustomerUncheckedUpdateWithoutReviewInput>
  }

  export type CustomerUpdateWithoutReviewInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referralCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerCoupon?: CustomerCouponUncheckedUpdateOneWithoutCustomerNestedInput
    CustomerPoint?: CustomerPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    category: $Enums.EventCategory
    description: string
    image: string
    location: string
    venue: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    price: number
    quantity: number
    discountPercentage?: number | null
    discountStartDate?: Date | string | null
    discountEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyEventInput = {
    customerId: number
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discountPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    discountStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutEventInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateManyTicketInput = {
    orderId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutTicketInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailUncheckedUpdateManyWithoutTicketInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointCreateManyCustomerInput = {
    id?: number
    point?: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.OrderStatus
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCustomerInput = {
    eventId: string
    review: string
    rating: $Enums.RatingRange
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPointUpdateWithoutCustomerInput = {
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPointUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCustomerInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCustomerInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingRangeFieldUpdateOperationsInput | $Enums.RatingRange
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateManyOrderInput = {
    ticketId: number
    quantity: number
    subTotalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutOrderInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subTotalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}