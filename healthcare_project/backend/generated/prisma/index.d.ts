
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model MedicalCondition
 * 
 */
export type MedicalCondition = $Result.DefaultSelection<Prisma.$MedicalConditionPayload>
/**
 * Model HealthRecord
 * 
 */
export type HealthRecord = $Result.DefaultSelection<Prisma.$HealthRecordPayload>
/**
 * Model MedicationReminder
 * 
 */
export type MedicationReminder = $Result.DefaultSelection<Prisma.$MedicationReminderPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model DosAndDonts
 * 
 */
export type DosAndDonts = $Result.DefaultSelection<Prisma.$DosAndDontsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  RESCHEDULED: 'RESCHEDULED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const AppointmentType: {
  IN_PERSON: 'IN_PERSON',
  VIRTUAL: 'VIRTUAL'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalCondition`: Exposes CRUD operations for the **MedicalCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalConditions
    * const medicalConditions = await prisma.medicalCondition.findMany()
    * ```
    */
  get medicalCondition(): Prisma.MedicalConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthRecord`: Exposes CRUD operations for the **HealthRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthRecords
    * const healthRecords = await prisma.healthRecord.findMany()
    * ```
    */
  get healthRecord(): Prisma.HealthRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicationReminder`: Exposes CRUD operations for the **MedicationReminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationReminders
    * const medicationReminders = await prisma.medicationReminder.findMany()
    * ```
    */
  get medicationReminder(): Prisma.MedicationReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosAndDonts`: Exposes CRUD operations for the **DosAndDonts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DosAndDonts
    * const dosAndDonts = await prisma.dosAndDonts.findMany()
    * ```
    */
  get dosAndDonts(): Prisma.DosAndDontsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Profile: 'Profile',
    Hospital: 'Hospital',
    Doctor: 'Doctor',
    Patient: 'Patient',
    MedicalCondition: 'MedicalCondition',
    HealthRecord: 'HealthRecord',
    MedicationReminder: 'MedicationReminder',
    Appointment: 'Appointment',
    Message: 'Message',
    DosAndDonts: 'DosAndDonts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "hospital" | "doctor" | "patient" | "medicalCondition" | "healthRecord" | "medicationReminder" | "appointment" | "message" | "dosAndDonts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      MedicalCondition: {
        payload: Prisma.$MedicalConditionPayload<ExtArgs>
        fields: Prisma.MedicalConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          findFirst: {
            args: Prisma.MedicalConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          findMany: {
            args: Prisma.MedicalConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>[]
          }
          create: {
            args: Prisma.MedicalConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          createMany: {
            args: Prisma.MedicalConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>[]
          }
          delete: {
            args: Prisma.MedicalConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          update: {
            args: Prisma.MedicalConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          deleteMany: {
            args: Prisma.MedicalConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>[]
          }
          upsert: {
            args: Prisma.MedicalConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalConditionPayload>
          }
          aggregate: {
            args: Prisma.MedicalConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalCondition>
          }
          groupBy: {
            args: Prisma.MedicalConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalConditionCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalConditionCountAggregateOutputType> | number
          }
        }
      }
      HealthRecord: {
        payload: Prisma.$HealthRecordPayload<ExtArgs>
        fields: Prisma.HealthRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          findFirst: {
            args: Prisma.HealthRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          findMany: {
            args: Prisma.HealthRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          create: {
            args: Prisma.HealthRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          createMany: {
            args: Prisma.HealthRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          delete: {
            args: Prisma.HealthRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          update: {
            args: Prisma.HealthRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          deleteMany: {
            args: Prisma.HealthRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          upsert: {
            args: Prisma.HealthRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          aggregate: {
            args: Prisma.HealthRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthRecord>
          }
          groupBy: {
            args: Prisma.HealthRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthRecordCountArgs<ExtArgs>
            result: $Utils.Optional<HealthRecordCountAggregateOutputType> | number
          }
        }
      }
      MedicationReminder: {
        payload: Prisma.$MedicationReminderPayload<ExtArgs>
        fields: Prisma.MedicationReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          findFirst: {
            args: Prisma.MedicationReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          findMany: {
            args: Prisma.MedicationReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>[]
          }
          create: {
            args: Prisma.MedicationReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          createMany: {
            args: Prisma.MedicationReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>[]
          }
          delete: {
            args: Prisma.MedicationReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          update: {
            args: Prisma.MedicationReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          deleteMany: {
            args: Prisma.MedicationReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>[]
          }
          upsert: {
            args: Prisma.MedicationReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationReminderPayload>
          }
          aggregate: {
            args: Prisma.MedicationReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationReminder>
          }
          groupBy: {
            args: Prisma.MedicationReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationReminderCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationReminderCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      DosAndDonts: {
        payload: Prisma.$DosAndDontsPayload<ExtArgs>
        fields: Prisma.DosAndDontsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosAndDontsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosAndDontsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          findFirst: {
            args: Prisma.DosAndDontsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosAndDontsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          findMany: {
            args: Prisma.DosAndDontsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>[]
          }
          create: {
            args: Prisma.DosAndDontsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          createMany: {
            args: Prisma.DosAndDontsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DosAndDontsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>[]
          }
          delete: {
            args: Prisma.DosAndDontsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          update: {
            args: Prisma.DosAndDontsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          deleteMany: {
            args: Prisma.DosAndDontsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosAndDontsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DosAndDontsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>[]
          }
          upsert: {
            args: Prisma.DosAndDontsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosAndDontsPayload>
          }
          aggregate: {
            args: Prisma.DosAndDontsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosAndDonts>
          }
          groupBy: {
            args: Prisma.DosAndDontsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosAndDontsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosAndDontsCountArgs<ExtArgs>
            result: $Utils.Optional<DosAndDontsCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    hospital?: HospitalOmit
    doctor?: DoctorOmit
    patient?: PatientOmit
    medicalCondition?: MedicalConditionOmit
    healthRecord?: HealthRecordOmit
    medicationReminder?: MedicationReminderOmit
    appointment?: AppointmentOmit
    message?: MessageOmit
    dosAndDonts?: DosAndDontsOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    doctors: number
    appointments: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | HospitalCountOutputTypeCountDoctorsArgs
    appointments?: boolean | HospitalCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointments: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    healthRecords: number
    medicalConditions: number
    medicationReminders: number
    dosAndDonts: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    healthRecords?: boolean | PatientCountOutputTypeCountHealthRecordsArgs
    medicalConditions?: boolean | PatientCountOutputTypeCountMedicalConditionsArgs
    medicationReminders?: boolean | PatientCountOutputTypeCountMedicationRemindersArgs
    dosAndDonts?: boolean | PatientCountOutputTypeCountDosAndDontsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountHealthRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalConditionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicationRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationReminderWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountDosAndDontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosAndDontsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      doctorProfile: Prisma.$DoctorPayload<ExtArgs> | null
      patientProfile: Prisma.$PatientPayload<ExtArgs> | null
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctorProfile<T extends User$doctorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfileArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patientProfile<T extends User$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$patientProfileArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.doctorProfile
   */
  export type User$doctorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.patientProfile
   */
  export type User$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatar: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatar: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    avatar: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatar?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatar?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatar?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    phone: string | null
    avatar: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatar?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatar?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatar?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatar?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "avatar" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      phone: string | null
      avatar: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    id: number | null
  }

  export type HospitalSumAggregateOutputType = {
    id: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    zipCode: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    id?: true
  }

  export type HospitalSumAggregateInputType = {
    id?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: number
    name: string
    address: string
    city: string
    state: string | null
    zipCode: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctors?: boolean | Hospital$doctorsArgs<ExtArgs>
    appointments?: boolean | Hospital$appointmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "state" | "zipCode" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | Hospital$doctorsArgs<ExtArgs>
    appointments?: boolean | Hospital$appointmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      doctors: Prisma.$DoctorPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      city: string
      state: string | null
      zipCode: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends Hospital$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Hospital$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'Int'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly city: FieldRef<"Hospital", 'String'>
    readonly state: FieldRef<"Hospital", 'String'>
    readonly zipCode: FieldRef<"Hospital", 'String'>
    readonly phone: FieldRef<"Hospital", 'String'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.doctors
   */
  export type Hospital$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Hospital.appointments
   */
  export type Hospital$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
    hospitalId: number | null
    userId: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
    hospitalId: number | null
    userId: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    specialization: string | null
    licenseNumber: string | null
    hospitalId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    specialization: string | null
    licenseNumber: string | null
    hospitalId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    specialization: number
    licenseNumber: number
    hospitalId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    specialization?: true
    licenseNumber?: true
    hospitalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    specialization?: true
    licenseNumber?: true
    hospitalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    specialization?: true
    licenseNumber?: true
    hospitalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    specialization: string
    licenseNumber: string
    hospitalId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    hospitalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    hospitalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    hospitalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    hospitalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specialization" | "licenseNumber" | "hospitalId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      specialization: string
      licenseNumber: string
      hospitalId: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly specialization: FieldRef<"Doctor", 'String'>
    readonly licenseNumber: FieldRef<"Doctor", 'String'>
    readonly hospitalId: FieldRef<"Doctor", 'Int'>
    readonly userId: FieldRef<"Doctor", 'Int'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    dateOfBirth: Date | null
    gender: string | null
    emergencyContact: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    dateOfBirth: Date | null
    gender: string | null
    emergencyContact: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    dateOfBirth: number
    gender: number
    emergencyContact: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    dateOfBirth?: true
    gender?: true
    emergencyContact?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    dateOfBirth?: true
    gender?: true
    emergencyContact?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    dateOfBirth?: true
    gender?: true
    emergencyContact?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    dateOfBirth: Date | null
    gender: string | null
    emergencyContact: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    emergencyContact?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    healthRecords?: boolean | Patient$healthRecordsArgs<ExtArgs>
    medicalConditions?: boolean | Patient$medicalConditionsArgs<ExtArgs>
    medicationReminders?: boolean | Patient$medicationRemindersArgs<ExtArgs>
    dosAndDonts?: boolean | Patient$dosAndDontsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    emergencyContact?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    emergencyContact?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    emergencyContact?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateOfBirth" | "gender" | "emergencyContact" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    healthRecords?: boolean | Patient$healthRecordsArgs<ExtArgs>
    medicalConditions?: boolean | Patient$medicalConditionsArgs<ExtArgs>
    medicationReminders?: boolean | Patient$medicationRemindersArgs<ExtArgs>
    dosAndDonts?: boolean | Patient$dosAndDontsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      healthRecords: Prisma.$HealthRecordPayload<ExtArgs>[]
      medicalConditions: Prisma.$MedicalConditionPayload<ExtArgs>[]
      medicationReminders: Prisma.$MedicationReminderPayload<ExtArgs>[]
      dosAndDonts: Prisma.$DosAndDontsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateOfBirth: Date | null
      gender: string | null
      emergencyContact: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    healthRecords<T extends Patient$healthRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$healthRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalConditions<T extends Patient$medicalConditionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalConditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicationReminders<T extends Patient$medicationRemindersArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicationRemindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dosAndDonts<T extends Patient$dosAndDontsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$dosAndDontsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
    readonly userId: FieldRef<"Patient", 'Int'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.healthRecords
   */
  export type Patient$healthRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    where?: HealthRecordWhereInput
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    cursor?: HealthRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * Patient.medicalConditions
   */
  export type Patient$medicalConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    where?: MedicalConditionWhereInput
    orderBy?: MedicalConditionOrderByWithRelationInput | MedicalConditionOrderByWithRelationInput[]
    cursor?: MedicalConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalConditionScalarFieldEnum | MedicalConditionScalarFieldEnum[]
  }

  /**
   * Patient.medicationReminders
   */
  export type Patient$medicationRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    where?: MedicationReminderWhereInput
    orderBy?: MedicationReminderOrderByWithRelationInput | MedicationReminderOrderByWithRelationInput[]
    cursor?: MedicationReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationReminderScalarFieldEnum | MedicationReminderScalarFieldEnum[]
  }

  /**
   * Patient.dosAndDonts
   */
  export type Patient$dosAndDontsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    where?: DosAndDontsWhereInput
    orderBy?: DosAndDontsOrderByWithRelationInput | DosAndDontsOrderByWithRelationInput[]
    cursor?: DosAndDontsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DosAndDontsScalarFieldEnum | DosAndDontsScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model MedicalCondition
   */

  export type AggregateMedicalCondition = {
    _count: MedicalConditionCountAggregateOutputType | null
    _avg: MedicalConditionAvgAggregateOutputType | null
    _sum: MedicalConditionSumAggregateOutputType | null
    _min: MedicalConditionMinAggregateOutputType | null
    _max: MedicalConditionMaxAggregateOutputType | null
  }

  export type MedicalConditionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicalConditionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicalConditionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    diagnosedAt: Date | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalConditionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    diagnosedAt: Date | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalConditionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    diagnosedAt: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalConditionAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicalConditionSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicalConditionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    diagnosedAt?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalConditionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    diagnosedAt?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalConditionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    diagnosedAt?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCondition to aggregate.
     */
    where?: MedicalConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalConditions to fetch.
     */
    orderBy?: MedicalConditionOrderByWithRelationInput | MedicalConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalConditions
    **/
    _count?: true | MedicalConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalConditionMaxAggregateInputType
  }

  export type GetMedicalConditionAggregateType<T extends MedicalConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalCondition[P]>
      : GetScalarType<T[P], AggregateMedicalCondition[P]>
  }




  export type MedicalConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalConditionWhereInput
    orderBy?: MedicalConditionOrderByWithAggregationInput | MedicalConditionOrderByWithAggregationInput[]
    by: MedicalConditionScalarFieldEnum[] | MedicalConditionScalarFieldEnum
    having?: MedicalConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalConditionCountAggregateInputType | true
    _avg?: MedicalConditionAvgAggregateInputType
    _sum?: MedicalConditionSumAggregateInputType
    _min?: MedicalConditionMinAggregateInputType
    _max?: MedicalConditionMaxAggregateInputType
  }

  export type MedicalConditionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    diagnosedAt: Date | null
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: MedicalConditionCountAggregateOutputType | null
    _avg: MedicalConditionAvgAggregateOutputType | null
    _sum: MedicalConditionSumAggregateOutputType | null
    _min: MedicalConditionMinAggregateOutputType | null
    _max: MedicalConditionMaxAggregateOutputType | null
  }

  type GetMedicalConditionGroupByPayload<T extends MedicalConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalConditionGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalConditionGroupByOutputType[P]>
        }
      >
    >


  export type MedicalConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    diagnosedAt?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCondition"]>

  export type MedicalConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    diagnosedAt?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCondition"]>

  export type MedicalConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    diagnosedAt?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCondition"]>

  export type MedicalConditionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    diagnosedAt?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "diagnosedAt" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalCondition"]>
  export type MedicalConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicalConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalCondition"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      diagnosedAt: Date | null
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalCondition"]>
    composites: {}
  }

  type MedicalConditionGetPayload<S extends boolean | null | undefined | MedicalConditionDefaultArgs> = $Result.GetResult<Prisma.$MedicalConditionPayload, S>

  type MedicalConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalConditionCountAggregateInputType | true
    }

  export interface MedicalConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalCondition'], meta: { name: 'MedicalCondition' } }
    /**
     * Find zero or one MedicalCondition that matches the filter.
     * @param {MedicalConditionFindUniqueArgs} args - Arguments to find a MedicalCondition
     * @example
     * // Get one MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalConditionFindUniqueArgs>(args: SelectSubset<T, MedicalConditionFindUniqueArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalConditionFindUniqueOrThrowArgs} args - Arguments to find a MedicalCondition
     * @example
     * // Get one MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionFindFirstArgs} args - Arguments to find a MedicalCondition
     * @example
     * // Get one MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalConditionFindFirstArgs>(args?: SelectSubset<T, MedicalConditionFindFirstArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionFindFirstOrThrowArgs} args - Arguments to find a MedicalCondition
     * @example
     * // Get one MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalConditions
     * const medicalConditions = await prisma.medicalCondition.findMany()
     * 
     * // Get first 10 MedicalConditions
     * const medicalConditions = await prisma.medicalCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalConditionWithIdOnly = await prisma.medicalCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalConditionFindManyArgs>(args?: SelectSubset<T, MedicalConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalCondition.
     * @param {MedicalConditionCreateArgs} args - Arguments to create a MedicalCondition.
     * @example
     * // Create one MedicalCondition
     * const MedicalCondition = await prisma.medicalCondition.create({
     *   data: {
     *     // ... data to create a MedicalCondition
     *   }
     * })
     * 
     */
    create<T extends MedicalConditionCreateArgs>(args: SelectSubset<T, MedicalConditionCreateArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalConditions.
     * @param {MedicalConditionCreateManyArgs} args - Arguments to create many MedicalConditions.
     * @example
     * // Create many MedicalConditions
     * const medicalCondition = await prisma.medicalCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalConditionCreateManyArgs>(args?: SelectSubset<T, MedicalConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalConditions and returns the data saved in the database.
     * @param {MedicalConditionCreateManyAndReturnArgs} args - Arguments to create many MedicalConditions.
     * @example
     * // Create many MedicalConditions
     * const medicalCondition = await prisma.medicalCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalConditions and only return the `id`
     * const medicalConditionWithIdOnly = await prisma.medicalCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalCondition.
     * @param {MedicalConditionDeleteArgs} args - Arguments to delete one MedicalCondition.
     * @example
     * // Delete one MedicalCondition
     * const MedicalCondition = await prisma.medicalCondition.delete({
     *   where: {
     *     // ... filter to delete one MedicalCondition
     *   }
     * })
     * 
     */
    delete<T extends MedicalConditionDeleteArgs>(args: SelectSubset<T, MedicalConditionDeleteArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalCondition.
     * @param {MedicalConditionUpdateArgs} args - Arguments to update one MedicalCondition.
     * @example
     * // Update one MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalConditionUpdateArgs>(args: SelectSubset<T, MedicalConditionUpdateArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalConditions.
     * @param {MedicalConditionDeleteManyArgs} args - Arguments to filter MedicalConditions to delete.
     * @example
     * // Delete a few MedicalConditions
     * const { count } = await prisma.medicalCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalConditionDeleteManyArgs>(args?: SelectSubset<T, MedicalConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalConditions
     * const medicalCondition = await prisma.medicalCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalConditionUpdateManyArgs>(args: SelectSubset<T, MedicalConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalConditions and returns the data updated in the database.
     * @param {MedicalConditionUpdateManyAndReturnArgs} args - Arguments to update many MedicalConditions.
     * @example
     * // Update many MedicalConditions
     * const medicalCondition = await prisma.medicalCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalConditions and only return the `id`
     * const medicalConditionWithIdOnly = await prisma.medicalCondition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalCondition.
     * @param {MedicalConditionUpsertArgs} args - Arguments to update or create a MedicalCondition.
     * @example
     * // Update or create a MedicalCondition
     * const medicalCondition = await prisma.medicalCondition.upsert({
     *   create: {
     *     // ... data to create a MedicalCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalCondition we want to update
     *   }
     * })
     */
    upsert<T extends MedicalConditionUpsertArgs>(args: SelectSubset<T, MedicalConditionUpsertArgs<ExtArgs>>): Prisma__MedicalConditionClient<$Result.GetResult<Prisma.$MedicalConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionCountArgs} args - Arguments to filter MedicalConditions to count.
     * @example
     * // Count the number of MedicalConditions
     * const count = await prisma.medicalCondition.count({
     *   where: {
     *     // ... the filter for the MedicalConditions we want to count
     *   }
     * })
    **/
    count<T extends MedicalConditionCountArgs>(
      args?: Subset<T, MedicalConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalConditionAggregateArgs>(args: Subset<T, MedicalConditionAggregateArgs>): Prisma.PrismaPromise<GetMedicalConditionAggregateType<T>>

    /**
     * Group by MedicalCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalConditionGroupByArgs} args - Group by arguments.
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
      T extends MedicalConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalConditionGroupByArgs['orderBy'] }
        : { orderBy?: MedicalConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalCondition model
   */
  readonly fields: MedicalConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalCondition model
   */
  interface MedicalConditionFieldRefs {
    readonly id: FieldRef<"MedicalCondition", 'Int'>
    readonly name: FieldRef<"MedicalCondition", 'String'>
    readonly description: FieldRef<"MedicalCondition", 'String'>
    readonly diagnosedAt: FieldRef<"MedicalCondition", 'DateTime'>
    readonly patientId: FieldRef<"MedicalCondition", 'Int'>
    readonly createdAt: FieldRef<"MedicalCondition", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalCondition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalCondition findUnique
   */
  export type MedicalConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCondition to fetch.
     */
    where: MedicalConditionWhereUniqueInput
  }

  /**
   * MedicalCondition findUniqueOrThrow
   */
  export type MedicalConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCondition to fetch.
     */
    where: MedicalConditionWhereUniqueInput
  }

  /**
   * MedicalCondition findFirst
   */
  export type MedicalConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCondition to fetch.
     */
    where?: MedicalConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalConditions to fetch.
     */
    orderBy?: MedicalConditionOrderByWithRelationInput | MedicalConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalConditions.
     */
    cursor?: MedicalConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalConditions.
     */
    distinct?: MedicalConditionScalarFieldEnum | MedicalConditionScalarFieldEnum[]
  }

  /**
   * MedicalCondition findFirstOrThrow
   */
  export type MedicalConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCondition to fetch.
     */
    where?: MedicalConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalConditions to fetch.
     */
    orderBy?: MedicalConditionOrderByWithRelationInput | MedicalConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalConditions.
     */
    cursor?: MedicalConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalConditions.
     */
    distinct?: MedicalConditionScalarFieldEnum | MedicalConditionScalarFieldEnum[]
  }

  /**
   * MedicalCondition findMany
   */
  export type MedicalConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter, which MedicalConditions to fetch.
     */
    where?: MedicalConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalConditions to fetch.
     */
    orderBy?: MedicalConditionOrderByWithRelationInput | MedicalConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalConditions.
     */
    cursor?: MedicalConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalConditions.
     */
    skip?: number
    distinct?: MedicalConditionScalarFieldEnum | MedicalConditionScalarFieldEnum[]
  }

  /**
   * MedicalCondition create
   */
  export type MedicalConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalCondition.
     */
    data: XOR<MedicalConditionCreateInput, MedicalConditionUncheckedCreateInput>
  }

  /**
   * MedicalCondition createMany
   */
  export type MedicalConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalConditions.
     */
    data: MedicalConditionCreateManyInput | MedicalConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalCondition createManyAndReturn
   */
  export type MedicalConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalConditions.
     */
    data: MedicalConditionCreateManyInput | MedicalConditionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalCondition update
   */
  export type MedicalConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalCondition.
     */
    data: XOR<MedicalConditionUpdateInput, MedicalConditionUncheckedUpdateInput>
    /**
     * Choose, which MedicalCondition to update.
     */
    where: MedicalConditionWhereUniqueInput
  }

  /**
   * MedicalCondition updateMany
   */
  export type MedicalConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalConditions.
     */
    data: XOR<MedicalConditionUpdateManyMutationInput, MedicalConditionUncheckedUpdateManyInput>
    /**
     * Filter which MedicalConditions to update
     */
    where?: MedicalConditionWhereInput
    /**
     * Limit how many MedicalConditions to update.
     */
    limit?: number
  }

  /**
   * MedicalCondition updateManyAndReturn
   */
  export type MedicalConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * The data used to update MedicalConditions.
     */
    data: XOR<MedicalConditionUpdateManyMutationInput, MedicalConditionUncheckedUpdateManyInput>
    /**
     * Filter which MedicalConditions to update
     */
    where?: MedicalConditionWhereInput
    /**
     * Limit how many MedicalConditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalCondition upsert
   */
  export type MedicalConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalCondition to update in case it exists.
     */
    where: MedicalConditionWhereUniqueInput
    /**
     * In case the MedicalCondition found by the `where` argument doesn't exist, create a new MedicalCondition with this data.
     */
    create: XOR<MedicalConditionCreateInput, MedicalConditionUncheckedCreateInput>
    /**
     * In case the MedicalCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalConditionUpdateInput, MedicalConditionUncheckedUpdateInput>
  }

  /**
   * MedicalCondition delete
   */
  export type MedicalConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
    /**
     * Filter which MedicalCondition to delete.
     */
    where: MedicalConditionWhereUniqueInput
  }

  /**
   * MedicalCondition deleteMany
   */
  export type MedicalConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalConditions to delete
     */
    where?: MedicalConditionWhereInput
    /**
     * Limit how many MedicalConditions to delete.
     */
    limit?: number
  }

  /**
   * MedicalCondition without action
   */
  export type MedicalConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCondition
     */
    select?: MedicalConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCondition
     */
    omit?: MedicalConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalConditionInclude<ExtArgs> | null
  }


  /**
   * Model HealthRecord
   */

  export type AggregateHealthRecord = {
    _count: HealthRecordCountAggregateOutputType | null
    _avg: HealthRecordAvgAggregateOutputType | null
    _sum: HealthRecordSumAggregateOutputType | null
    _min: HealthRecordMinAggregateOutputType | null
    _max: HealthRecordMaxAggregateOutputType | null
  }

  export type HealthRecordAvgAggregateOutputType = {
    id: number | null
    heartRate: number | null
    bloodGlucose: number | null
    patientId: number | null
  }

  export type HealthRecordSumAggregateOutputType = {
    id: number | null
    heartRate: number | null
    bloodGlucose: number | null
    patientId: number | null
  }

  export type HealthRecordMinAggregateOutputType = {
    id: number | null
    date: Date | null
    bloodPressure: string | null
    heartRate: number | null
    bloodGlucose: number | null
    notes: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HealthRecordMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    bloodPressure: string | null
    heartRate: number | null
    bloodGlucose: number | null
    notes: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HealthRecordCountAggregateOutputType = {
    id: number
    date: number
    bloodPressure: number
    heartRate: number
    bloodGlucose: number
    notes: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HealthRecordAvgAggregateInputType = {
    id?: true
    heartRate?: true
    bloodGlucose?: true
    patientId?: true
  }

  export type HealthRecordSumAggregateInputType = {
    id?: true
    heartRate?: true
    bloodGlucose?: true
    patientId?: true
  }

  export type HealthRecordMinAggregateInputType = {
    id?: true
    date?: true
    bloodPressure?: true
    heartRate?: true
    bloodGlucose?: true
    notes?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HealthRecordMaxAggregateInputType = {
    id?: true
    date?: true
    bloodPressure?: true
    heartRate?: true
    bloodGlucose?: true
    notes?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HealthRecordCountAggregateInputType = {
    id?: true
    date?: true
    bloodPressure?: true
    heartRate?: true
    bloodGlucose?: true
    notes?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HealthRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecord to aggregate.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthRecords
    **/
    _count?: true | HealthRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthRecordMaxAggregateInputType
  }

  export type GetHealthRecordAggregateType<T extends HealthRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthRecord[P]>
      : GetScalarType<T[P], AggregateHealthRecord[P]>
  }




  export type HealthRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthRecordWhereInput
    orderBy?: HealthRecordOrderByWithAggregationInput | HealthRecordOrderByWithAggregationInput[]
    by: HealthRecordScalarFieldEnum[] | HealthRecordScalarFieldEnum
    having?: HealthRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthRecordCountAggregateInputType | true
    _avg?: HealthRecordAvgAggregateInputType
    _sum?: HealthRecordSumAggregateInputType
    _min?: HealthRecordMinAggregateInputType
    _max?: HealthRecordMaxAggregateInputType
  }

  export type HealthRecordGroupByOutputType = {
    id: number
    date: Date
    bloodPressure: string | null
    heartRate: number | null
    bloodGlucose: number | null
    notes: string | null
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: HealthRecordCountAggregateOutputType | null
    _avg: HealthRecordAvgAggregateOutputType | null
    _sum: HealthRecordSumAggregateOutputType | null
    _min: HealthRecordMinAggregateOutputType | null
    _max: HealthRecordMaxAggregateOutputType | null
  }

  type GetHealthRecordGroupByPayload<T extends HealthRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HealthRecordGroupByOutputType[P]>
        }
      >
    >


  export type HealthRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    bloodGlucose?: boolean
    notes?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    bloodGlucose?: boolean
    notes?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    bloodGlucose?: boolean
    notes?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectScalar = {
    id?: boolean
    date?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    bloodGlucose?: boolean
    notes?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HealthRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "bloodPressure" | "heartRate" | "bloodGlucose" | "notes" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["healthRecord"]>
  export type HealthRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type HealthRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type HealthRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $HealthRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      bloodPressure: string | null
      heartRate: number | null
      bloodGlucose: number | null
      notes: string | null
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["healthRecord"]>
    composites: {}
  }

  type HealthRecordGetPayload<S extends boolean | null | undefined | HealthRecordDefaultArgs> = $Result.GetResult<Prisma.$HealthRecordPayload, S>

  type HealthRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthRecordCountAggregateInputType | true
    }

  export interface HealthRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthRecord'], meta: { name: 'HealthRecord' } }
    /**
     * Find zero or one HealthRecord that matches the filter.
     * @param {HealthRecordFindUniqueArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthRecordFindUniqueArgs>(args: SelectSubset<T, HealthRecordFindUniqueArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthRecordFindUniqueOrThrowArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindFirstArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthRecordFindFirstArgs>(args?: SelectSubset<T, HealthRecordFindFirstArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindFirstOrThrowArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthRecords
     * const healthRecords = await prisma.healthRecord.findMany()
     * 
     * // Get first 10 HealthRecords
     * const healthRecords = await prisma.healthRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthRecordFindManyArgs>(args?: SelectSubset<T, HealthRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthRecord.
     * @param {HealthRecordCreateArgs} args - Arguments to create a HealthRecord.
     * @example
     * // Create one HealthRecord
     * const HealthRecord = await prisma.healthRecord.create({
     *   data: {
     *     // ... data to create a HealthRecord
     *   }
     * })
     * 
     */
    create<T extends HealthRecordCreateArgs>(args: SelectSubset<T, HealthRecordCreateArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthRecords.
     * @param {HealthRecordCreateManyArgs} args - Arguments to create many HealthRecords.
     * @example
     * // Create many HealthRecords
     * const healthRecord = await prisma.healthRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthRecordCreateManyArgs>(args?: SelectSubset<T, HealthRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthRecords and returns the data saved in the database.
     * @param {HealthRecordCreateManyAndReturnArgs} args - Arguments to create many HealthRecords.
     * @example
     * // Create many HealthRecords
     * const healthRecord = await prisma.healthRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthRecords and only return the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthRecord.
     * @param {HealthRecordDeleteArgs} args - Arguments to delete one HealthRecord.
     * @example
     * // Delete one HealthRecord
     * const HealthRecord = await prisma.healthRecord.delete({
     *   where: {
     *     // ... filter to delete one HealthRecord
     *   }
     * })
     * 
     */
    delete<T extends HealthRecordDeleteArgs>(args: SelectSubset<T, HealthRecordDeleteArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthRecord.
     * @param {HealthRecordUpdateArgs} args - Arguments to update one HealthRecord.
     * @example
     * // Update one HealthRecord
     * const healthRecord = await prisma.healthRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthRecordUpdateArgs>(args: SelectSubset<T, HealthRecordUpdateArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthRecords.
     * @param {HealthRecordDeleteManyArgs} args - Arguments to filter HealthRecords to delete.
     * @example
     * // Delete a few HealthRecords
     * const { count } = await prisma.healthRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthRecordDeleteManyArgs>(args?: SelectSubset<T, HealthRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthRecords
     * const healthRecord = await prisma.healthRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthRecordUpdateManyArgs>(args: SelectSubset<T, HealthRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthRecords and returns the data updated in the database.
     * @param {HealthRecordUpdateManyAndReturnArgs} args - Arguments to update many HealthRecords.
     * @example
     * // Update many HealthRecords
     * const healthRecord = await prisma.healthRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthRecords and only return the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HealthRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthRecord.
     * @param {HealthRecordUpsertArgs} args - Arguments to update or create a HealthRecord.
     * @example
     * // Update or create a HealthRecord
     * const healthRecord = await prisma.healthRecord.upsert({
     *   create: {
     *     // ... data to create a HealthRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthRecord we want to update
     *   }
     * })
     */
    upsert<T extends HealthRecordUpsertArgs>(args: SelectSubset<T, HealthRecordUpsertArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordCountArgs} args - Arguments to filter HealthRecords to count.
     * @example
     * // Count the number of HealthRecords
     * const count = await prisma.healthRecord.count({
     *   where: {
     *     // ... the filter for the HealthRecords we want to count
     *   }
     * })
    **/
    count<T extends HealthRecordCountArgs>(
      args?: Subset<T, HealthRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthRecordAggregateArgs>(args: Subset<T, HealthRecordAggregateArgs>): Prisma.PrismaPromise<GetHealthRecordAggregateType<T>>

    /**
     * Group by HealthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordGroupByArgs} args - Group by arguments.
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
      T extends HealthRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthRecordGroupByArgs['orderBy'] }
        : { orderBy?: HealthRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthRecord model
   */
  readonly fields: HealthRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HealthRecord model
   */
  interface HealthRecordFieldRefs {
    readonly id: FieldRef<"HealthRecord", 'Int'>
    readonly date: FieldRef<"HealthRecord", 'DateTime'>
    readonly bloodPressure: FieldRef<"HealthRecord", 'String'>
    readonly heartRate: FieldRef<"HealthRecord", 'Int'>
    readonly bloodGlucose: FieldRef<"HealthRecord", 'Float'>
    readonly notes: FieldRef<"HealthRecord", 'String'>
    readonly patientId: FieldRef<"HealthRecord", 'Int'>
    readonly createdAt: FieldRef<"HealthRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"HealthRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthRecord findUnique
   */
  export type HealthRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord findUniqueOrThrow
   */
  export type HealthRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord findFirst
   */
  export type HealthRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord findFirstOrThrow
   */
  export type HealthRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord findMany
   */
  export type HealthRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecords to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord create
   */
  export type HealthRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthRecord.
     */
    data: XOR<HealthRecordCreateInput, HealthRecordUncheckedCreateInput>
  }

  /**
   * HealthRecord createMany
   */
  export type HealthRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthRecords.
     */
    data: HealthRecordCreateManyInput | HealthRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthRecord createManyAndReturn
   */
  export type HealthRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * The data used to create many HealthRecords.
     */
    data: HealthRecordCreateManyInput | HealthRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthRecord update
   */
  export type HealthRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthRecord.
     */
    data: XOR<HealthRecordUpdateInput, HealthRecordUncheckedUpdateInput>
    /**
     * Choose, which HealthRecord to update.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord updateMany
   */
  export type HealthRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthRecords.
     */
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyInput>
    /**
     * Filter which HealthRecords to update
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number
  }

  /**
   * HealthRecord updateManyAndReturn
   */
  export type HealthRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * The data used to update HealthRecords.
     */
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyInput>
    /**
     * Filter which HealthRecords to update
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthRecord upsert
   */
  export type HealthRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthRecord to update in case it exists.
     */
    where: HealthRecordWhereUniqueInput
    /**
     * In case the HealthRecord found by the `where` argument doesn't exist, create a new HealthRecord with this data.
     */
    create: XOR<HealthRecordCreateInput, HealthRecordUncheckedCreateInput>
    /**
     * In case the HealthRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthRecordUpdateInput, HealthRecordUncheckedUpdateInput>
  }

  /**
   * HealthRecord delete
   */
  export type HealthRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter which HealthRecord to delete.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord deleteMany
   */
  export type HealthRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecords to delete
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to delete.
     */
    limit?: number
  }

  /**
   * HealthRecord without action
   */
  export type HealthRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
  }


  /**
   * Model MedicationReminder
   */

  export type AggregateMedicationReminder = {
    _count: MedicationReminderCountAggregateOutputType | null
    _avg: MedicationReminderAvgAggregateOutputType | null
    _sum: MedicationReminderSumAggregateOutputType | null
    _min: MedicationReminderMinAggregateOutputType | null
    _max: MedicationReminderMaxAggregateOutputType | null
  }

  export type MedicationReminderAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicationReminderSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type MedicationReminderMinAggregateOutputType = {
    id: number | null
    medication: string | null
    dosage: string | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationReminderMaxAggregateOutputType = {
    id: number | null
    medication: string | null
    dosage: string | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationReminderCountAggregateOutputType = {
    id: number
    medication: number
    dosage: number
    frequency: number
    startDate: number
    endDate: number
    time: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationReminderAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicationReminderSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type MedicationReminderMinAggregateInputType = {
    id?: true
    medication?: true
    dosage?: true
    frequency?: true
    startDate?: true
    endDate?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationReminderMaxAggregateInputType = {
    id?: true
    medication?: true
    dosage?: true
    frequency?: true
    startDate?: true
    endDate?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationReminderCountAggregateInputType = {
    id?: true
    medication?: true
    dosage?: true
    frequency?: true
    startDate?: true
    endDate?: true
    time?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationReminder to aggregate.
     */
    where?: MedicationReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationReminders to fetch.
     */
    orderBy?: MedicationReminderOrderByWithRelationInput | MedicationReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationReminders
    **/
    _count?: true | MedicationReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationReminderMaxAggregateInputType
  }

  export type GetMedicationReminderAggregateType<T extends MedicationReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationReminder[P]>
      : GetScalarType<T[P], AggregateMedicationReminder[P]>
  }




  export type MedicationReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationReminderWhereInput
    orderBy?: MedicationReminderOrderByWithAggregationInput | MedicationReminderOrderByWithAggregationInput[]
    by: MedicationReminderScalarFieldEnum[] | MedicationReminderScalarFieldEnum
    having?: MedicationReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationReminderCountAggregateInputType | true
    _avg?: MedicationReminderAvgAggregateInputType
    _sum?: MedicationReminderSumAggregateInputType
    _min?: MedicationReminderMinAggregateInputType
    _max?: MedicationReminderMaxAggregateInputType
  }

  export type MedicationReminderGroupByOutputType = {
    id: number
    medication: string
    dosage: string | null
    frequency: string
    startDate: Date
    endDate: Date | null
    time: Date[]
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: MedicationReminderCountAggregateOutputType | null
    _avg: MedicationReminderAvgAggregateOutputType | null
    _sum: MedicationReminderSumAggregateOutputType | null
    _min: MedicationReminderMinAggregateOutputType | null
    _max: MedicationReminderMaxAggregateOutputType | null
  }

  type GetMedicationReminderGroupByPayload<T extends MedicationReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationReminderGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationReminderGroupByOutputType[P]>
        }
      >
    >


  export type MedicationReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medication?: boolean
    dosage?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    time?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationReminder"]>

  export type MedicationReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medication?: boolean
    dosage?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    time?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationReminder"]>

  export type MedicationReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medication?: boolean
    dosage?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    time?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationReminder"]>

  export type MedicationReminderSelectScalar = {
    id?: boolean
    medication?: boolean
    dosage?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    time?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medication" | "dosage" | "frequency" | "startDate" | "endDate" | "time" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["medicationReminder"]>
  export type MedicationReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicationReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicationReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicationReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationReminder"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medication: string
      dosage: string | null
      frequency: string
      startDate: Date
      endDate: Date | null
      time: Date[]
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationReminder"]>
    composites: {}
  }

  type MedicationReminderGetPayload<S extends boolean | null | undefined | MedicationReminderDefaultArgs> = $Result.GetResult<Prisma.$MedicationReminderPayload, S>

  type MedicationReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationReminderCountAggregateInputType | true
    }

  export interface MedicationReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationReminder'], meta: { name: 'MedicationReminder' } }
    /**
     * Find zero or one MedicationReminder that matches the filter.
     * @param {MedicationReminderFindUniqueArgs} args - Arguments to find a MedicationReminder
     * @example
     * // Get one MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationReminderFindUniqueArgs>(args: SelectSubset<T, MedicationReminderFindUniqueArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicationReminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationReminderFindUniqueOrThrowArgs} args - Arguments to find a MedicationReminder
     * @example
     * // Get one MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationReminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderFindFirstArgs} args - Arguments to find a MedicationReminder
     * @example
     * // Get one MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationReminderFindFirstArgs>(args?: SelectSubset<T, MedicationReminderFindFirstArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationReminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderFindFirstOrThrowArgs} args - Arguments to find a MedicationReminder
     * @example
     * // Get one MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationReminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationReminders
     * const medicationReminders = await prisma.medicationReminder.findMany()
     * 
     * // Get first 10 MedicationReminders
     * const medicationReminders = await prisma.medicationReminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationReminderWithIdOnly = await prisma.medicationReminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationReminderFindManyArgs>(args?: SelectSubset<T, MedicationReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicationReminder.
     * @param {MedicationReminderCreateArgs} args - Arguments to create a MedicationReminder.
     * @example
     * // Create one MedicationReminder
     * const MedicationReminder = await prisma.medicationReminder.create({
     *   data: {
     *     // ... data to create a MedicationReminder
     *   }
     * })
     * 
     */
    create<T extends MedicationReminderCreateArgs>(args: SelectSubset<T, MedicationReminderCreateArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicationReminders.
     * @param {MedicationReminderCreateManyArgs} args - Arguments to create many MedicationReminders.
     * @example
     * // Create many MedicationReminders
     * const medicationReminder = await prisma.medicationReminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationReminderCreateManyArgs>(args?: SelectSubset<T, MedicationReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationReminders and returns the data saved in the database.
     * @param {MedicationReminderCreateManyAndReturnArgs} args - Arguments to create many MedicationReminders.
     * @example
     * // Create many MedicationReminders
     * const medicationReminder = await prisma.medicationReminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationReminders and only return the `id`
     * const medicationReminderWithIdOnly = await prisma.medicationReminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicationReminder.
     * @param {MedicationReminderDeleteArgs} args - Arguments to delete one MedicationReminder.
     * @example
     * // Delete one MedicationReminder
     * const MedicationReminder = await prisma.medicationReminder.delete({
     *   where: {
     *     // ... filter to delete one MedicationReminder
     *   }
     * })
     * 
     */
    delete<T extends MedicationReminderDeleteArgs>(args: SelectSubset<T, MedicationReminderDeleteArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicationReminder.
     * @param {MedicationReminderUpdateArgs} args - Arguments to update one MedicationReminder.
     * @example
     * // Update one MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationReminderUpdateArgs>(args: SelectSubset<T, MedicationReminderUpdateArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicationReminders.
     * @param {MedicationReminderDeleteManyArgs} args - Arguments to filter MedicationReminders to delete.
     * @example
     * // Delete a few MedicationReminders
     * const { count } = await prisma.medicationReminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationReminderDeleteManyArgs>(args?: SelectSubset<T, MedicationReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationReminders
     * const medicationReminder = await prisma.medicationReminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationReminderUpdateManyArgs>(args: SelectSubset<T, MedicationReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationReminders and returns the data updated in the database.
     * @param {MedicationReminderUpdateManyAndReturnArgs} args - Arguments to update many MedicationReminders.
     * @example
     * // Update many MedicationReminders
     * const medicationReminder = await prisma.medicationReminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicationReminders and only return the `id`
     * const medicationReminderWithIdOnly = await prisma.medicationReminder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicationReminder.
     * @param {MedicationReminderUpsertArgs} args - Arguments to update or create a MedicationReminder.
     * @example
     * // Update or create a MedicationReminder
     * const medicationReminder = await prisma.medicationReminder.upsert({
     *   create: {
     *     // ... data to create a MedicationReminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationReminder we want to update
     *   }
     * })
     */
    upsert<T extends MedicationReminderUpsertArgs>(args: SelectSubset<T, MedicationReminderUpsertArgs<ExtArgs>>): Prisma__MedicationReminderClient<$Result.GetResult<Prisma.$MedicationReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicationReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderCountArgs} args - Arguments to filter MedicationReminders to count.
     * @example
     * // Count the number of MedicationReminders
     * const count = await prisma.medicationReminder.count({
     *   where: {
     *     // ... the filter for the MedicationReminders we want to count
     *   }
     * })
    **/
    count<T extends MedicationReminderCountArgs>(
      args?: Subset<T, MedicationReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationReminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationReminderAggregateArgs>(args: Subset<T, MedicationReminderAggregateArgs>): Prisma.PrismaPromise<GetMedicationReminderAggregateType<T>>

    /**
     * Group by MedicationReminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationReminderGroupByArgs} args - Group by arguments.
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
      T extends MedicationReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationReminderGroupByArgs['orderBy'] }
        : { orderBy?: MedicationReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationReminder model
   */
  readonly fields: MedicationReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationReminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicationReminder model
   */
  interface MedicationReminderFieldRefs {
    readonly id: FieldRef<"MedicationReminder", 'Int'>
    readonly medication: FieldRef<"MedicationReminder", 'String'>
    readonly dosage: FieldRef<"MedicationReminder", 'String'>
    readonly frequency: FieldRef<"MedicationReminder", 'String'>
    readonly startDate: FieldRef<"MedicationReminder", 'DateTime'>
    readonly endDate: FieldRef<"MedicationReminder", 'DateTime'>
    readonly time: FieldRef<"MedicationReminder", 'DateTime[]'>
    readonly patientId: FieldRef<"MedicationReminder", 'Int'>
    readonly createdAt: FieldRef<"MedicationReminder", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationReminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationReminder findUnique
   */
  export type MedicationReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter, which MedicationReminder to fetch.
     */
    where: MedicationReminderWhereUniqueInput
  }

  /**
   * MedicationReminder findUniqueOrThrow
   */
  export type MedicationReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter, which MedicationReminder to fetch.
     */
    where: MedicationReminderWhereUniqueInput
  }

  /**
   * MedicationReminder findFirst
   */
  export type MedicationReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter, which MedicationReminder to fetch.
     */
    where?: MedicationReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationReminders to fetch.
     */
    orderBy?: MedicationReminderOrderByWithRelationInput | MedicationReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationReminders.
     */
    cursor?: MedicationReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationReminders.
     */
    distinct?: MedicationReminderScalarFieldEnum | MedicationReminderScalarFieldEnum[]
  }

  /**
   * MedicationReminder findFirstOrThrow
   */
  export type MedicationReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter, which MedicationReminder to fetch.
     */
    where?: MedicationReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationReminders to fetch.
     */
    orderBy?: MedicationReminderOrderByWithRelationInput | MedicationReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationReminders.
     */
    cursor?: MedicationReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationReminders.
     */
    distinct?: MedicationReminderScalarFieldEnum | MedicationReminderScalarFieldEnum[]
  }

  /**
   * MedicationReminder findMany
   */
  export type MedicationReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter, which MedicationReminders to fetch.
     */
    where?: MedicationReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationReminders to fetch.
     */
    orderBy?: MedicationReminderOrderByWithRelationInput | MedicationReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationReminders.
     */
    cursor?: MedicationReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationReminders.
     */
    skip?: number
    distinct?: MedicationReminderScalarFieldEnum | MedicationReminderScalarFieldEnum[]
  }

  /**
   * MedicationReminder create
   */
  export type MedicationReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationReminder.
     */
    data: XOR<MedicationReminderCreateInput, MedicationReminderUncheckedCreateInput>
  }

  /**
   * MedicationReminder createMany
   */
  export type MedicationReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationReminders.
     */
    data: MedicationReminderCreateManyInput | MedicationReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationReminder createManyAndReturn
   */
  export type MedicationReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * The data used to create many MedicationReminders.
     */
    data: MedicationReminderCreateManyInput | MedicationReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationReminder update
   */
  export type MedicationReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationReminder.
     */
    data: XOR<MedicationReminderUpdateInput, MedicationReminderUncheckedUpdateInput>
    /**
     * Choose, which MedicationReminder to update.
     */
    where: MedicationReminderWhereUniqueInput
  }

  /**
   * MedicationReminder updateMany
   */
  export type MedicationReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationReminders.
     */
    data: XOR<MedicationReminderUpdateManyMutationInput, MedicationReminderUncheckedUpdateManyInput>
    /**
     * Filter which MedicationReminders to update
     */
    where?: MedicationReminderWhereInput
    /**
     * Limit how many MedicationReminders to update.
     */
    limit?: number
  }

  /**
   * MedicationReminder updateManyAndReturn
   */
  export type MedicationReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * The data used to update MedicationReminders.
     */
    data: XOR<MedicationReminderUpdateManyMutationInput, MedicationReminderUncheckedUpdateManyInput>
    /**
     * Filter which MedicationReminders to update
     */
    where?: MedicationReminderWhereInput
    /**
     * Limit how many MedicationReminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationReminder upsert
   */
  export type MedicationReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationReminder to update in case it exists.
     */
    where: MedicationReminderWhereUniqueInput
    /**
     * In case the MedicationReminder found by the `where` argument doesn't exist, create a new MedicationReminder with this data.
     */
    create: XOR<MedicationReminderCreateInput, MedicationReminderUncheckedCreateInput>
    /**
     * In case the MedicationReminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationReminderUpdateInput, MedicationReminderUncheckedUpdateInput>
  }

  /**
   * MedicationReminder delete
   */
  export type MedicationReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
    /**
     * Filter which MedicationReminder to delete.
     */
    where: MedicationReminderWhereUniqueInput
  }

  /**
   * MedicationReminder deleteMany
   */
  export type MedicationReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationReminders to delete
     */
    where?: MedicationReminderWhereInput
    /**
     * Limit how many MedicationReminders to delete.
     */
    limit?: number
  }

  /**
   * MedicationReminder without action
   */
  export type MedicationReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationReminder
     */
    select?: MedicationReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationReminder
     */
    omit?: MedicationReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationReminderInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    hospitalId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    hospitalId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    preferredTime: string | null
    location: string | null
    type: $Enums.AppointmentType | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
    patientId: number | null
    doctorId: number | null
    hospitalId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    preferredTime: string | null
    location: string | null
    type: $Enums.AppointmentType | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
    patientId: number | null
    doctorId: number | null
    hospitalId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    preferredTime: number
    location: number
    type: number
    reason: number
    status: number
    patientId: number
    doctorId: number
    hospitalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    hospitalId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    hospitalId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    preferredTime?: true
    location?: true
    type?: true
    reason?: true
    status?: true
    patientId?: true
    doctorId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    preferredTime?: true
    location?: true
    type?: true
    reason?: true
    status?: true
    patientId?: true
    doctorId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    preferredTime?: true
    location?: true
    type?: true
    reason?: true
    status?: true
    patientId?: true
    doctorId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    date: Date
    preferredTime: string | null
    location: string | null
    type: $Enums.AppointmentType
    reason: string | null
    status: $Enums.AppointmentStatus
    patientId: number
    doctorId: number
    hospitalId: number
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    preferredTime?: boolean
    location?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    patientId?: boolean
    doctorId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    preferredTime?: boolean
    location?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    patientId?: boolean
    doctorId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    preferredTime?: boolean
    location?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    patientId?: boolean
    doctorId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    preferredTime?: boolean
    location?: boolean
    type?: boolean
    reason?: boolean
    status?: boolean
    patientId?: boolean
    doctorId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "preferredTime" | "location" | "type" | "reason" | "status" | "patientId" | "doctorId" | "hospitalId" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      preferredTime: string | null
      location: string | null
      type: $Enums.AppointmentType
      reason: string | null
      status: $Enums.AppointmentStatus
      patientId: number
      doctorId: number
      hospitalId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly preferredTime: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly hospitalId: FieldRef<"Appointment", 'Int'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    receiverId: number | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    receiverId: number | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    receiverId: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    senderId: number
    receiverId: number
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "receiverId" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      senderId: number
      receiverId: number
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model DosAndDonts
   */

  export type AggregateDosAndDonts = {
    _count: DosAndDontsCountAggregateOutputType | null
    _avg: DosAndDontsAvgAggregateOutputType | null
    _sum: DosAndDontsSumAggregateOutputType | null
    _min: DosAndDontsMinAggregateOutputType | null
    _max: DosAndDontsMaxAggregateOutputType | null
  }

  export type DosAndDontsAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type DosAndDontsSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type DosAndDontsMinAggregateOutputType = {
    id: number | null
    type: string | null
    description: string | null
    isAutoGenerated: boolean | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosAndDontsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    description: string | null
    isAutoGenerated: boolean | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosAndDontsCountAggregateOutputType = {
    id: number
    type: number
    description: number
    isAutoGenerated: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DosAndDontsAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type DosAndDontsSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type DosAndDontsMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    isAutoGenerated?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosAndDontsMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    isAutoGenerated?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosAndDontsCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    isAutoGenerated?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DosAndDontsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DosAndDonts to aggregate.
     */
    where?: DosAndDontsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DosAndDonts to fetch.
     */
    orderBy?: DosAndDontsOrderByWithRelationInput | DosAndDontsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosAndDontsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DosAndDonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DosAndDonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DosAndDonts
    **/
    _count?: true | DosAndDontsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DosAndDontsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DosAndDontsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosAndDontsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosAndDontsMaxAggregateInputType
  }

  export type GetDosAndDontsAggregateType<T extends DosAndDontsAggregateArgs> = {
        [P in keyof T & keyof AggregateDosAndDonts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosAndDonts[P]>
      : GetScalarType<T[P], AggregateDosAndDonts[P]>
  }




  export type DosAndDontsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosAndDontsWhereInput
    orderBy?: DosAndDontsOrderByWithAggregationInput | DosAndDontsOrderByWithAggregationInput[]
    by: DosAndDontsScalarFieldEnum[] | DosAndDontsScalarFieldEnum
    having?: DosAndDontsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosAndDontsCountAggregateInputType | true
    _avg?: DosAndDontsAvgAggregateInputType
    _sum?: DosAndDontsSumAggregateInputType
    _min?: DosAndDontsMinAggregateInputType
    _max?: DosAndDontsMaxAggregateInputType
  }

  export type DosAndDontsGroupByOutputType = {
    id: number
    type: string
    description: string
    isAutoGenerated: boolean
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: DosAndDontsCountAggregateOutputType | null
    _avg: DosAndDontsAvgAggregateOutputType | null
    _sum: DosAndDontsSumAggregateOutputType | null
    _min: DosAndDontsMinAggregateOutputType | null
    _max: DosAndDontsMaxAggregateOutputType | null
  }

  type GetDosAndDontsGroupByPayload<T extends DosAndDontsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosAndDontsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosAndDontsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosAndDontsGroupByOutputType[P]>
            : GetScalarType<T[P], DosAndDontsGroupByOutputType[P]>
        }
      >
    >


  export type DosAndDontsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    isAutoGenerated?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosAndDonts"]>

  export type DosAndDontsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    isAutoGenerated?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosAndDonts"]>

  export type DosAndDontsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    isAutoGenerated?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosAndDonts"]>

  export type DosAndDontsSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    isAutoGenerated?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DosAndDontsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "isAutoGenerated" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["dosAndDonts"]>
  export type DosAndDontsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type DosAndDontsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type DosAndDontsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $DosAndDontsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DosAndDonts"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      description: string
      isAutoGenerated: boolean
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dosAndDonts"]>
    composites: {}
  }

  type DosAndDontsGetPayload<S extends boolean | null | undefined | DosAndDontsDefaultArgs> = $Result.GetResult<Prisma.$DosAndDontsPayload, S>

  type DosAndDontsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DosAndDontsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosAndDontsCountAggregateInputType | true
    }

  export interface DosAndDontsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DosAndDonts'], meta: { name: 'DosAndDonts' } }
    /**
     * Find zero or one DosAndDonts that matches the filter.
     * @param {DosAndDontsFindUniqueArgs} args - Arguments to find a DosAndDonts
     * @example
     * // Get one DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosAndDontsFindUniqueArgs>(args: SelectSubset<T, DosAndDontsFindUniqueArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DosAndDonts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DosAndDontsFindUniqueOrThrowArgs} args - Arguments to find a DosAndDonts
     * @example
     * // Get one DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosAndDontsFindUniqueOrThrowArgs>(args: SelectSubset<T, DosAndDontsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DosAndDonts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsFindFirstArgs} args - Arguments to find a DosAndDonts
     * @example
     * // Get one DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosAndDontsFindFirstArgs>(args?: SelectSubset<T, DosAndDontsFindFirstArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DosAndDonts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsFindFirstOrThrowArgs} args - Arguments to find a DosAndDonts
     * @example
     * // Get one DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosAndDontsFindFirstOrThrowArgs>(args?: SelectSubset<T, DosAndDontsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DosAndDonts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findMany()
     * 
     * // Get first 10 DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dosAndDontsWithIdOnly = await prisma.dosAndDonts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DosAndDontsFindManyArgs>(args?: SelectSubset<T, DosAndDontsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DosAndDonts.
     * @param {DosAndDontsCreateArgs} args - Arguments to create a DosAndDonts.
     * @example
     * // Create one DosAndDonts
     * const DosAndDonts = await prisma.dosAndDonts.create({
     *   data: {
     *     // ... data to create a DosAndDonts
     *   }
     * })
     * 
     */
    create<T extends DosAndDontsCreateArgs>(args: SelectSubset<T, DosAndDontsCreateArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DosAndDonts.
     * @param {DosAndDontsCreateManyArgs} args - Arguments to create many DosAndDonts.
     * @example
     * // Create many DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosAndDontsCreateManyArgs>(args?: SelectSubset<T, DosAndDontsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DosAndDonts and returns the data saved in the database.
     * @param {DosAndDontsCreateManyAndReturnArgs} args - Arguments to create many DosAndDonts.
     * @example
     * // Create many DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DosAndDonts and only return the `id`
     * const dosAndDontsWithIdOnly = await prisma.dosAndDonts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DosAndDontsCreateManyAndReturnArgs>(args?: SelectSubset<T, DosAndDontsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DosAndDonts.
     * @param {DosAndDontsDeleteArgs} args - Arguments to delete one DosAndDonts.
     * @example
     * // Delete one DosAndDonts
     * const DosAndDonts = await prisma.dosAndDonts.delete({
     *   where: {
     *     // ... filter to delete one DosAndDonts
     *   }
     * })
     * 
     */
    delete<T extends DosAndDontsDeleteArgs>(args: SelectSubset<T, DosAndDontsDeleteArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DosAndDonts.
     * @param {DosAndDontsUpdateArgs} args - Arguments to update one DosAndDonts.
     * @example
     * // Update one DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosAndDontsUpdateArgs>(args: SelectSubset<T, DosAndDontsUpdateArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DosAndDonts.
     * @param {DosAndDontsDeleteManyArgs} args - Arguments to filter DosAndDonts to delete.
     * @example
     * // Delete a few DosAndDonts
     * const { count } = await prisma.dosAndDonts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosAndDontsDeleteManyArgs>(args?: SelectSubset<T, DosAndDontsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DosAndDonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosAndDontsUpdateManyArgs>(args: SelectSubset<T, DosAndDontsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DosAndDonts and returns the data updated in the database.
     * @param {DosAndDontsUpdateManyAndReturnArgs} args - Arguments to update many DosAndDonts.
     * @example
     * // Update many DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DosAndDonts and only return the `id`
     * const dosAndDontsWithIdOnly = await prisma.dosAndDonts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DosAndDontsUpdateManyAndReturnArgs>(args: SelectSubset<T, DosAndDontsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DosAndDonts.
     * @param {DosAndDontsUpsertArgs} args - Arguments to update or create a DosAndDonts.
     * @example
     * // Update or create a DosAndDonts
     * const dosAndDonts = await prisma.dosAndDonts.upsert({
     *   create: {
     *     // ... data to create a DosAndDonts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DosAndDonts we want to update
     *   }
     * })
     */
    upsert<T extends DosAndDontsUpsertArgs>(args: SelectSubset<T, DosAndDontsUpsertArgs<ExtArgs>>): Prisma__DosAndDontsClient<$Result.GetResult<Prisma.$DosAndDontsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DosAndDonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsCountArgs} args - Arguments to filter DosAndDonts to count.
     * @example
     * // Count the number of DosAndDonts
     * const count = await prisma.dosAndDonts.count({
     *   where: {
     *     // ... the filter for the DosAndDonts we want to count
     *   }
     * })
    **/
    count<T extends DosAndDontsCountArgs>(
      args?: Subset<T, DosAndDontsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosAndDontsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DosAndDonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosAndDontsAggregateArgs>(args: Subset<T, DosAndDontsAggregateArgs>): Prisma.PrismaPromise<GetDosAndDontsAggregateType<T>>

    /**
     * Group by DosAndDonts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosAndDontsGroupByArgs} args - Group by arguments.
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
      T extends DosAndDontsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosAndDontsGroupByArgs['orderBy'] }
        : { orderBy?: DosAndDontsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DosAndDontsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosAndDontsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DosAndDonts model
   */
  readonly fields: DosAndDontsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DosAndDonts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosAndDontsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DosAndDonts model
   */
  interface DosAndDontsFieldRefs {
    readonly id: FieldRef<"DosAndDonts", 'Int'>
    readonly type: FieldRef<"DosAndDonts", 'String'>
    readonly description: FieldRef<"DosAndDonts", 'String'>
    readonly isAutoGenerated: FieldRef<"DosAndDonts", 'Boolean'>
    readonly patientId: FieldRef<"DosAndDonts", 'Int'>
    readonly createdAt: FieldRef<"DosAndDonts", 'DateTime'>
    readonly updatedAt: FieldRef<"DosAndDonts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DosAndDonts findUnique
   */
  export type DosAndDontsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter, which DosAndDonts to fetch.
     */
    where: DosAndDontsWhereUniqueInput
  }

  /**
   * DosAndDonts findUniqueOrThrow
   */
  export type DosAndDontsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter, which DosAndDonts to fetch.
     */
    where: DosAndDontsWhereUniqueInput
  }

  /**
   * DosAndDonts findFirst
   */
  export type DosAndDontsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter, which DosAndDonts to fetch.
     */
    where?: DosAndDontsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DosAndDonts to fetch.
     */
    orderBy?: DosAndDontsOrderByWithRelationInput | DosAndDontsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DosAndDonts.
     */
    cursor?: DosAndDontsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DosAndDonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DosAndDonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DosAndDonts.
     */
    distinct?: DosAndDontsScalarFieldEnum | DosAndDontsScalarFieldEnum[]
  }

  /**
   * DosAndDonts findFirstOrThrow
   */
  export type DosAndDontsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter, which DosAndDonts to fetch.
     */
    where?: DosAndDontsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DosAndDonts to fetch.
     */
    orderBy?: DosAndDontsOrderByWithRelationInput | DosAndDontsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DosAndDonts.
     */
    cursor?: DosAndDontsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DosAndDonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DosAndDonts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DosAndDonts.
     */
    distinct?: DosAndDontsScalarFieldEnum | DosAndDontsScalarFieldEnum[]
  }

  /**
   * DosAndDonts findMany
   */
  export type DosAndDontsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter, which DosAndDonts to fetch.
     */
    where?: DosAndDontsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DosAndDonts to fetch.
     */
    orderBy?: DosAndDontsOrderByWithRelationInput | DosAndDontsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DosAndDonts.
     */
    cursor?: DosAndDontsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DosAndDonts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DosAndDonts.
     */
    skip?: number
    distinct?: DosAndDontsScalarFieldEnum | DosAndDontsScalarFieldEnum[]
  }

  /**
   * DosAndDonts create
   */
  export type DosAndDontsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * The data needed to create a DosAndDonts.
     */
    data: XOR<DosAndDontsCreateInput, DosAndDontsUncheckedCreateInput>
  }

  /**
   * DosAndDonts createMany
   */
  export type DosAndDontsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DosAndDonts.
     */
    data: DosAndDontsCreateManyInput | DosAndDontsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DosAndDonts createManyAndReturn
   */
  export type DosAndDontsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * The data used to create many DosAndDonts.
     */
    data: DosAndDontsCreateManyInput | DosAndDontsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DosAndDonts update
   */
  export type DosAndDontsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * The data needed to update a DosAndDonts.
     */
    data: XOR<DosAndDontsUpdateInput, DosAndDontsUncheckedUpdateInput>
    /**
     * Choose, which DosAndDonts to update.
     */
    where: DosAndDontsWhereUniqueInput
  }

  /**
   * DosAndDonts updateMany
   */
  export type DosAndDontsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DosAndDonts.
     */
    data: XOR<DosAndDontsUpdateManyMutationInput, DosAndDontsUncheckedUpdateManyInput>
    /**
     * Filter which DosAndDonts to update
     */
    where?: DosAndDontsWhereInput
    /**
     * Limit how many DosAndDonts to update.
     */
    limit?: number
  }

  /**
   * DosAndDonts updateManyAndReturn
   */
  export type DosAndDontsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * The data used to update DosAndDonts.
     */
    data: XOR<DosAndDontsUpdateManyMutationInput, DosAndDontsUncheckedUpdateManyInput>
    /**
     * Filter which DosAndDonts to update
     */
    where?: DosAndDontsWhereInput
    /**
     * Limit how many DosAndDonts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DosAndDonts upsert
   */
  export type DosAndDontsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * The filter to search for the DosAndDonts to update in case it exists.
     */
    where: DosAndDontsWhereUniqueInput
    /**
     * In case the DosAndDonts found by the `where` argument doesn't exist, create a new DosAndDonts with this data.
     */
    create: XOR<DosAndDontsCreateInput, DosAndDontsUncheckedCreateInput>
    /**
     * In case the DosAndDonts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosAndDontsUpdateInput, DosAndDontsUncheckedUpdateInput>
  }

  /**
   * DosAndDonts delete
   */
  export type DosAndDontsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
    /**
     * Filter which DosAndDonts to delete.
     */
    where: DosAndDontsWhereUniqueInput
  }

  /**
   * DosAndDonts deleteMany
   */
  export type DosAndDontsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DosAndDonts to delete
     */
    where?: DosAndDontsWhereInput
    /**
     * Limit how many DosAndDonts to delete.
     */
    limit?: number
  }

  /**
   * DosAndDonts without action
   */
  export type DosAndDontsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosAndDonts
     */
    select?: DosAndDontsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DosAndDonts
     */
    omit?: DosAndDontsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosAndDontsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    avatar: 'avatar',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    specialization: 'specialization',
    licenseNumber: 'licenseNumber',
    hospitalId: 'hospitalId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    emergencyContact: 'emergencyContact',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MedicalConditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    diagnosedAt: 'diagnosedAt',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalConditionScalarFieldEnum = (typeof MedicalConditionScalarFieldEnum)[keyof typeof MedicalConditionScalarFieldEnum]


  export const HealthRecordScalarFieldEnum: {
    id: 'id',
    date: 'date',
    bloodPressure: 'bloodPressure',
    heartRate: 'heartRate',
    bloodGlucose: 'bloodGlucose',
    notes: 'notes',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HealthRecordScalarFieldEnum = (typeof HealthRecordScalarFieldEnum)[keyof typeof HealthRecordScalarFieldEnum]


  export const MedicationReminderScalarFieldEnum: {
    id: 'id',
    medication: 'medication',
    dosage: 'dosage',
    frequency: 'frequency',
    startDate: 'startDate',
    endDate: 'endDate',
    time: 'time',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationReminderScalarFieldEnum = (typeof MedicationReminderScalarFieldEnum)[keyof typeof MedicationReminderScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    preferredTime: 'preferredTime',
    location: 'location',
    type: 'type',
    reason: 'reason',
    status: 'status',
    patientId: 'patientId',
    doctorId: 'doctorId',
    hospitalId: 'hospitalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    receiverId: 'receiverId',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const DosAndDontsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    isAutoGenerated: 'isAutoGenerated',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DosAndDontsScalarFieldEnum = (typeof DosAndDontsScalarFieldEnum)[keyof typeof DosAndDontsScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    doctorProfile?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    doctorProfile?: DoctorOrderByWithRelationInput
    patientProfile?: PatientOrderByWithRelationInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    doctorProfile?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    phone?: StringNullableFilter<"Profile"> | string | null
    avatar?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    phone?: StringNullableFilter<"Profile"> | string | null
    avatar?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringNullableFilter<"Hospital"> | string | null
    zipCode?: StringNullableFilter<"Hospital"> | string | null
    phone?: StringNullableFilter<"Hospital"> | string | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    doctors?: DoctorListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctors?: DoctorOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringNullableFilter<"Hospital"> | string | null
    zipCode?: StringNullableFilter<"Hospital"> | string | null
    phone?: StringNullableFilter<"Hospital"> | string | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    doctors?: DoctorListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospital"> | number
    name?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    city?: StringWithAggregatesFilter<"Hospital"> | string
    state?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    specialization?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
    hospitalId?: IntFilter<"Doctor"> | number
    userId?: IntFilter<"Doctor"> | number
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    licenseNumber?: string
    userId?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringFilter<"Doctor"> | string
    hospitalId?: IntFilter<"Doctor"> | number
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }, "id" | "licenseNumber" | "userId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
    licenseNumber?: StringWithAggregatesFilter<"Doctor"> | string
    hospitalId?: IntWithAggregatesFilter<"Doctor"> | number
    userId?: IntWithAggregatesFilter<"Doctor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    userId?: IntFilter<"Patient"> | number
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    healthRecords?: HealthRecordListRelationFilter
    medicalConditions?: MedicalConditionListRelationFilter
    medicationReminders?: MedicationReminderListRelationFilter
    dosAndDonts?: DosAndDontsListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    healthRecords?: HealthRecordOrderByRelationAggregateInput
    medicalConditions?: MedicalConditionOrderByRelationAggregateInput
    medicationReminders?: MedicationReminderOrderByRelationAggregateInput
    dosAndDonts?: DosAndDontsOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    healthRecords?: HealthRecordListRelationFilter
    medicalConditions?: MedicalConditionListRelationFilter
    medicationReminders?: MedicationReminderListRelationFilter
    dosAndDonts?: DosAndDontsListRelationFilter
  }, "id" | "userId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    userId?: IntWithAggregatesFilter<"Patient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type MedicalConditionWhereInput = {
    AND?: MedicalConditionWhereInput | MedicalConditionWhereInput[]
    OR?: MedicalConditionWhereInput[]
    NOT?: MedicalConditionWhereInput | MedicalConditionWhereInput[]
    id?: IntFilter<"MedicalCondition"> | number
    name?: StringFilter<"MedicalCondition"> | string
    description?: StringNullableFilter<"MedicalCondition"> | string | null
    diagnosedAt?: DateTimeNullableFilter<"MedicalCondition"> | Date | string | null
    patientId?: IntFilter<"MedicalCondition"> | number
    createdAt?: DateTimeFilter<"MedicalCondition"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCondition"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicalConditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    diagnosedAt?: SortOrderInput | SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalConditionWhereInput | MedicalConditionWhereInput[]
    OR?: MedicalConditionWhereInput[]
    NOT?: MedicalConditionWhereInput | MedicalConditionWhereInput[]
    name?: StringFilter<"MedicalCondition"> | string
    description?: StringNullableFilter<"MedicalCondition"> | string | null
    diagnosedAt?: DateTimeNullableFilter<"MedicalCondition"> | Date | string | null
    patientId?: IntFilter<"MedicalCondition"> | number
    createdAt?: DateTimeFilter<"MedicalCondition"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCondition"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type MedicalConditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    diagnosedAt?: SortOrderInput | SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalConditionCountOrderByAggregateInput
    _avg?: MedicalConditionAvgOrderByAggregateInput
    _max?: MedicalConditionMaxOrderByAggregateInput
    _min?: MedicalConditionMinOrderByAggregateInput
    _sum?: MedicalConditionSumOrderByAggregateInput
  }

  export type MedicalConditionScalarWhereWithAggregatesInput = {
    AND?: MedicalConditionScalarWhereWithAggregatesInput | MedicalConditionScalarWhereWithAggregatesInput[]
    OR?: MedicalConditionScalarWhereWithAggregatesInput[]
    NOT?: MedicalConditionScalarWhereWithAggregatesInput | MedicalConditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalCondition"> | number
    name?: StringWithAggregatesFilter<"MedicalCondition"> | string
    description?: StringNullableWithAggregatesFilter<"MedicalCondition"> | string | null
    diagnosedAt?: DateTimeNullableWithAggregatesFilter<"MedicalCondition"> | Date | string | null
    patientId?: IntWithAggregatesFilter<"MedicalCondition"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicalCondition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalCondition"> | Date | string
  }

  export type HealthRecordWhereInput = {
    AND?: HealthRecordWhereInput | HealthRecordWhereInput[]
    OR?: HealthRecordWhereInput[]
    NOT?: HealthRecordWhereInput | HealthRecordWhereInput[]
    id?: IntFilter<"HealthRecord"> | number
    date?: DateTimeFilter<"HealthRecord"> | Date | string
    bloodPressure?: StringNullableFilter<"HealthRecord"> | string | null
    heartRate?: IntNullableFilter<"HealthRecord"> | number | null
    bloodGlucose?: FloatNullableFilter<"HealthRecord"> | number | null
    notes?: StringNullableFilter<"HealthRecord"> | string | null
    patientId?: IntFilter<"HealthRecord"> | number
    createdAt?: DateTimeFilter<"HealthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HealthRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type HealthRecordOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    bloodGlucose?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type HealthRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthRecordWhereInput | HealthRecordWhereInput[]
    OR?: HealthRecordWhereInput[]
    NOT?: HealthRecordWhereInput | HealthRecordWhereInput[]
    date?: DateTimeFilter<"HealthRecord"> | Date | string
    bloodPressure?: StringNullableFilter<"HealthRecord"> | string | null
    heartRate?: IntNullableFilter<"HealthRecord"> | number | null
    bloodGlucose?: FloatNullableFilter<"HealthRecord"> | number | null
    notes?: StringNullableFilter<"HealthRecord"> | string | null
    patientId?: IntFilter<"HealthRecord"> | number
    createdAt?: DateTimeFilter<"HealthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HealthRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type HealthRecordOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    bloodGlucose?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HealthRecordCountOrderByAggregateInput
    _avg?: HealthRecordAvgOrderByAggregateInput
    _max?: HealthRecordMaxOrderByAggregateInput
    _min?: HealthRecordMinOrderByAggregateInput
    _sum?: HealthRecordSumOrderByAggregateInput
  }

  export type HealthRecordScalarWhereWithAggregatesInput = {
    AND?: HealthRecordScalarWhereWithAggregatesInput | HealthRecordScalarWhereWithAggregatesInput[]
    OR?: HealthRecordScalarWhereWithAggregatesInput[]
    NOT?: HealthRecordScalarWhereWithAggregatesInput | HealthRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthRecord"> | number
    date?: DateTimeWithAggregatesFilter<"HealthRecord"> | Date | string
    bloodPressure?: StringNullableWithAggregatesFilter<"HealthRecord"> | string | null
    heartRate?: IntNullableWithAggregatesFilter<"HealthRecord"> | number | null
    bloodGlucose?: FloatNullableWithAggregatesFilter<"HealthRecord"> | number | null
    notes?: StringNullableWithAggregatesFilter<"HealthRecord"> | string | null
    patientId?: IntWithAggregatesFilter<"HealthRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HealthRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HealthRecord"> | Date | string
  }

  export type MedicationReminderWhereInput = {
    AND?: MedicationReminderWhereInput | MedicationReminderWhereInput[]
    OR?: MedicationReminderWhereInput[]
    NOT?: MedicationReminderWhereInput | MedicationReminderWhereInput[]
    id?: IntFilter<"MedicationReminder"> | number
    medication?: StringFilter<"MedicationReminder"> | string
    dosage?: StringNullableFilter<"MedicationReminder"> | string | null
    frequency?: StringFilter<"MedicationReminder"> | string
    startDate?: DateTimeFilter<"MedicationReminder"> | Date | string
    endDate?: DateTimeNullableFilter<"MedicationReminder"> | Date | string | null
    time?: DateTimeNullableListFilter<"MedicationReminder">
    patientId?: IntFilter<"MedicationReminder"> | number
    createdAt?: DateTimeFilter<"MedicationReminder"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationReminder"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicationReminderOrderByWithRelationInput = {
    id?: SortOrder
    medication?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    time?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicationReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicationReminderWhereInput | MedicationReminderWhereInput[]
    OR?: MedicationReminderWhereInput[]
    NOT?: MedicationReminderWhereInput | MedicationReminderWhereInput[]
    medication?: StringFilter<"MedicationReminder"> | string
    dosage?: StringNullableFilter<"MedicationReminder"> | string | null
    frequency?: StringFilter<"MedicationReminder"> | string
    startDate?: DateTimeFilter<"MedicationReminder"> | Date | string
    endDate?: DateTimeNullableFilter<"MedicationReminder"> | Date | string | null
    time?: DateTimeNullableListFilter<"MedicationReminder">
    patientId?: IntFilter<"MedicationReminder"> | number
    createdAt?: DateTimeFilter<"MedicationReminder"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationReminder"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type MedicationReminderOrderByWithAggregationInput = {
    id?: SortOrder
    medication?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    time?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationReminderCountOrderByAggregateInput
    _avg?: MedicationReminderAvgOrderByAggregateInput
    _max?: MedicationReminderMaxOrderByAggregateInput
    _min?: MedicationReminderMinOrderByAggregateInput
    _sum?: MedicationReminderSumOrderByAggregateInput
  }

  export type MedicationReminderScalarWhereWithAggregatesInput = {
    AND?: MedicationReminderScalarWhereWithAggregatesInput | MedicationReminderScalarWhereWithAggregatesInput[]
    OR?: MedicationReminderScalarWhereWithAggregatesInput[]
    NOT?: MedicationReminderScalarWhereWithAggregatesInput | MedicationReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicationReminder"> | number
    medication?: StringWithAggregatesFilter<"MedicationReminder"> | string
    dosage?: StringNullableWithAggregatesFilter<"MedicationReminder"> | string | null
    frequency?: StringWithAggregatesFilter<"MedicationReminder"> | string
    startDate?: DateTimeWithAggregatesFilter<"MedicationReminder"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"MedicationReminder"> | Date | string | null
    time?: DateTimeNullableListFilter<"MedicationReminder">
    patientId?: IntWithAggregatesFilter<"MedicationReminder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicationReminder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationReminder"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    preferredTime?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    hospitalId?: IntFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    preferredTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    preferredTime?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    hospitalId?: IntFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    preferredTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    preferredTime?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    hospitalId?: IntWithAggregatesFilter<"Appointment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type DosAndDontsWhereInput = {
    AND?: DosAndDontsWhereInput | DosAndDontsWhereInput[]
    OR?: DosAndDontsWhereInput[]
    NOT?: DosAndDontsWhereInput | DosAndDontsWhereInput[]
    id?: IntFilter<"DosAndDonts"> | number
    type?: StringFilter<"DosAndDonts"> | string
    description?: StringFilter<"DosAndDonts"> | string
    isAutoGenerated?: BoolFilter<"DosAndDonts"> | boolean
    patientId?: IntFilter<"DosAndDonts"> | number
    createdAt?: DateTimeFilter<"DosAndDonts"> | Date | string
    updatedAt?: DateTimeFilter<"DosAndDonts"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type DosAndDontsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isAutoGenerated?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type DosAndDontsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DosAndDontsWhereInput | DosAndDontsWhereInput[]
    OR?: DosAndDontsWhereInput[]
    NOT?: DosAndDontsWhereInput | DosAndDontsWhereInput[]
    type?: StringFilter<"DosAndDonts"> | string
    description?: StringFilter<"DosAndDonts"> | string
    isAutoGenerated?: BoolFilter<"DosAndDonts"> | boolean
    patientId?: IntFilter<"DosAndDonts"> | number
    createdAt?: DateTimeFilter<"DosAndDonts"> | Date | string
    updatedAt?: DateTimeFilter<"DosAndDonts"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type DosAndDontsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isAutoGenerated?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DosAndDontsCountOrderByAggregateInput
    _avg?: DosAndDontsAvgOrderByAggregateInput
    _max?: DosAndDontsMaxOrderByAggregateInput
    _min?: DosAndDontsMinOrderByAggregateInput
    _sum?: DosAndDontsSumOrderByAggregateInput
  }

  export type DosAndDontsScalarWhereWithAggregatesInput = {
    AND?: DosAndDontsScalarWhereWithAggregatesInput | DosAndDontsScalarWhereWithAggregatesInput[]
    OR?: DosAndDontsScalarWhereWithAggregatesInput[]
    NOT?: DosAndDontsScalarWhereWithAggregatesInput | DosAndDontsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DosAndDonts"> | number
    type?: StringWithAggregatesFilter<"DosAndDonts"> | string
    description?: StringWithAggregatesFilter<"DosAndDonts"> | string
    isAutoGenerated?: BoolWithAggregatesFilter<"DosAndDonts"> | boolean
    patientId?: IntWithAggregatesFilter<"DosAndDonts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DosAndDonts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DosAndDonts"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    firstName: string
    lastName: string
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    phone?: string | null
    avatar?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    phone?: string | null
    avatar?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateInput = {
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorCreateNestedManyWithoutHospitalInput
    appointments?: AppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorUncheckedCreateNestedManyWithoutHospitalInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorUpdateManyWithoutHospitalNestedInput
    appointments?: AppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorUncheckedUpdateManyWithoutHospitalNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: number
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    specialization: string
    licenseNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutDoctorsInput
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    specialization: string
    licenseNumber: string
    hospitalId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutDoctorsNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    hospitalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    specialization: string
    licenseNumber: string
    hospitalId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    hospitalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionCreateInput = {
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalConditionsInput
  }

  export type MedicalConditionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalConditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalConditionsNestedInput
  }

  export type MedicalConditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalConditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordCreateInput = {
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutHealthRecordsInput
  }

  export type HealthRecordUncheckedCreateInput = {
    id?: number
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthRecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutHealthRecordsNestedInput
  }

  export type HealthRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordCreateManyInput = {
    id?: number
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthRecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderCreateInput = {
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicationRemindersInput
  }

  export type MedicationReminderUncheckedCreateInput = {
    id?: number
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationReminderUpdateInput = {
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicationRemindersNestedInput
  }

  export type MedicationReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderCreateManyInput = {
    id?: number
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationReminderUpdateManyMutationInput = {
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    hospital: HospitalCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    doctorId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    doctorId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    senderId: number
    receiverId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    senderId: number
    receiverId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsCreateInput = {
    type: string
    description: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutDosAndDontsInput
  }

  export type DosAndDontsUncheckedCreateInput = {
    id?: number
    type: string
    description: string
    isAutoGenerated?: boolean
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosAndDontsUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDosAndDontsNestedInput
  }

  export type DosAndDontsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsCreateManyInput = {
    id?: number
    type: string
    description: string
    isAutoGenerated?: boolean
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosAndDontsUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    patientId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospitalScalarRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
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

  export type HealthRecordListRelationFilter = {
    every?: HealthRecordWhereInput
    some?: HealthRecordWhereInput
    none?: HealthRecordWhereInput
  }

  export type MedicalConditionListRelationFilter = {
    every?: MedicalConditionWhereInput
    some?: MedicalConditionWhereInput
    none?: MedicalConditionWhereInput
  }

  export type MedicationReminderListRelationFilter = {
    every?: MedicationReminderWhereInput
    some?: MedicationReminderWhereInput
    none?: MedicationReminderWhereInput
  }

  export type DosAndDontsListRelationFilter = {
    every?: DosAndDontsWhereInput
    some?: DosAndDontsWhereInput
    none?: DosAndDontsWhereInput
  }

  export type HealthRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosAndDontsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    emergencyContact?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    emergencyContact?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    emergencyContact?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type MedicalConditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    diagnosedAt?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalConditionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type MedicalConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    diagnosedAt?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalConditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    diagnosedAt?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalConditionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HealthRecordCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    bloodGlucose?: SortOrder
    notes?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    heartRate?: SortOrder
    bloodGlucose?: SortOrder
    patientId?: SortOrder
  }

  export type HealthRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    bloodGlucose?: SortOrder
    notes?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthRecordMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    bloodGlucose?: SortOrder
    notes?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HealthRecordSumOrderByAggregateInput = {
    id?: SortOrder
    heartRate?: SortOrder
    bloodGlucose?: SortOrder
    patientId?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableListFilter<$PrismaModel = never> = {
    equals?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    has?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    hasEvery?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    hasSome?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MedicationReminderCountOrderByAggregateInput = {
    id?: SortOrder
    medication?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    time?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationReminderAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type MedicationReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    medication?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationReminderMinOrderByAggregateInput = {
    id?: SortOrder
    medication?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationReminderSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    preferredTime?: SortOrder
    location?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    preferredTime?: SortOrder
    location?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    preferredTime?: SortOrder
    location?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DosAndDontsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isAutoGenerated?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosAndDontsAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type DosAndDontsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isAutoGenerated?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosAndDontsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isAutoGenerated?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosAndDontsSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type DoctorCreateNestedManyWithoutHospitalInput = {
    create?: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput> | DoctorCreateWithoutHospitalInput[] | DoctorUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalInput | DoctorCreateOrConnectWithoutHospitalInput[]
    createMany?: DoctorCreateManyHospitalInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutHospitalInput = {
    create?: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput> | AppointmentCreateWithoutHospitalInput[] | AppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutHospitalInput | AppointmentCreateOrConnectWithoutHospitalInput[]
    createMany?: AppointmentCreateManyHospitalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput> | DoctorCreateWithoutHospitalInput[] | DoctorUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalInput | DoctorCreateOrConnectWithoutHospitalInput[]
    createMany?: DoctorCreateManyHospitalInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput> | AppointmentCreateWithoutHospitalInput[] | AppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutHospitalInput | AppointmentCreateOrConnectWithoutHospitalInput[]
    createMany?: AppointmentCreateManyHospitalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput> | DoctorCreateWithoutHospitalInput[] | DoctorUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalInput | DoctorCreateOrConnectWithoutHospitalInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutHospitalInput | DoctorUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: DoctorCreateManyHospitalInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutHospitalInput | DoctorUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutHospitalInput | DoctorUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput> | AppointmentCreateWithoutHospitalInput[] | AppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutHospitalInput | AppointmentCreateOrConnectWithoutHospitalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutHospitalInput | AppointmentUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: AppointmentCreateManyHospitalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutHospitalInput | AppointmentUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutHospitalInput | AppointmentUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput> | DoctorCreateWithoutHospitalInput[] | DoctorUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutHospitalInput | DoctorCreateOrConnectWithoutHospitalInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutHospitalInput | DoctorUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: DoctorCreateManyHospitalInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutHospitalInput | DoctorUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutHospitalInput | DoctorUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput> | AppointmentCreateWithoutHospitalInput[] | AppointmentUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutHospitalInput | AppointmentCreateOrConnectWithoutHospitalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutHospitalInput | AppointmentUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: AppointmentCreateManyHospitalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutHospitalInput | AppointmentUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutHospitalInput | AppointmentUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutDoctorsInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type HospitalUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutDoctorsInput
    upsert?: HospitalUpsertWithoutDoctorsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutDoctorsInput, HospitalUpdateWithoutDoctorsInput>, HospitalUncheckedUpdateWithoutDoctorsInput>
  }

  export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    upsert?: UserUpsertWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfileInput, UserUpdateWithoutDoctorProfileInput>, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type HealthRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput> | HealthRecordCreateWithoutPatientInput[] | HealthRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPatientInput | HealthRecordCreateOrConnectWithoutPatientInput[]
    createMany?: HealthRecordCreateManyPatientInputEnvelope
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
  }

  export type MedicalConditionCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput> | MedicalConditionCreateWithoutPatientInput[] | MedicalConditionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalConditionCreateOrConnectWithoutPatientInput | MedicalConditionCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalConditionCreateManyPatientInputEnvelope
    connect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
  }

  export type MedicationReminderCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput> | MedicationReminderCreateWithoutPatientInput[] | MedicationReminderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationReminderCreateOrConnectWithoutPatientInput | MedicationReminderCreateOrConnectWithoutPatientInput[]
    createMany?: MedicationReminderCreateManyPatientInputEnvelope
    connect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
  }

  export type DosAndDontsCreateNestedManyWithoutPatientInput = {
    create?: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput> | DosAndDontsCreateWithoutPatientInput[] | DosAndDontsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DosAndDontsCreateOrConnectWithoutPatientInput | DosAndDontsCreateOrConnectWithoutPatientInput[]
    createMany?: DosAndDontsCreateManyPatientInputEnvelope
    connect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type HealthRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput> | HealthRecordCreateWithoutPatientInput[] | HealthRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPatientInput | HealthRecordCreateOrConnectWithoutPatientInput[]
    createMany?: HealthRecordCreateManyPatientInputEnvelope
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
  }

  export type MedicalConditionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput> | MedicalConditionCreateWithoutPatientInput[] | MedicalConditionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalConditionCreateOrConnectWithoutPatientInput | MedicalConditionCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalConditionCreateManyPatientInputEnvelope
    connect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
  }

  export type MedicationReminderUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput> | MedicationReminderCreateWithoutPatientInput[] | MedicationReminderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationReminderCreateOrConnectWithoutPatientInput | MedicationReminderCreateOrConnectWithoutPatientInput[]
    createMany?: MedicationReminderCreateManyPatientInputEnvelope
    connect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
  }

  export type DosAndDontsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput> | DosAndDontsCreateWithoutPatientInput[] | DosAndDontsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DosAndDontsCreateOrConnectWithoutPatientInput | DosAndDontsCreateOrConnectWithoutPatientInput[]
    createMany?: DosAndDontsCreateManyPatientInputEnvelope
    connect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    upsert?: UserUpsertWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientProfileInput, UserUpdateWithoutPatientProfileInput>, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type HealthRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput> | HealthRecordCreateWithoutPatientInput[] | HealthRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPatientInput | HealthRecordCreateOrConnectWithoutPatientInput[]
    upsert?: HealthRecordUpsertWithWhereUniqueWithoutPatientInput | HealthRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthRecordCreateManyPatientInputEnvelope
    set?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    disconnect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    delete?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    update?: HealthRecordUpdateWithWhereUniqueWithoutPatientInput | HealthRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthRecordUpdateManyWithWhereWithoutPatientInput | HealthRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
  }

  export type MedicalConditionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput> | MedicalConditionCreateWithoutPatientInput[] | MedicalConditionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalConditionCreateOrConnectWithoutPatientInput | MedicalConditionCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalConditionUpsertWithWhereUniqueWithoutPatientInput | MedicalConditionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalConditionCreateManyPatientInputEnvelope
    set?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    disconnect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    delete?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    connect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    update?: MedicalConditionUpdateWithWhereUniqueWithoutPatientInput | MedicalConditionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalConditionUpdateManyWithWhereWithoutPatientInput | MedicalConditionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalConditionScalarWhereInput | MedicalConditionScalarWhereInput[]
  }

  export type MedicationReminderUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput> | MedicationReminderCreateWithoutPatientInput[] | MedicationReminderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationReminderCreateOrConnectWithoutPatientInput | MedicationReminderCreateOrConnectWithoutPatientInput[]
    upsert?: MedicationReminderUpsertWithWhereUniqueWithoutPatientInput | MedicationReminderUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicationReminderCreateManyPatientInputEnvelope
    set?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    disconnect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    delete?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    connect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    update?: MedicationReminderUpdateWithWhereUniqueWithoutPatientInput | MedicationReminderUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicationReminderUpdateManyWithWhereWithoutPatientInput | MedicationReminderUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicationReminderScalarWhereInput | MedicationReminderScalarWhereInput[]
  }

  export type DosAndDontsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput> | DosAndDontsCreateWithoutPatientInput[] | DosAndDontsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DosAndDontsCreateOrConnectWithoutPatientInput | DosAndDontsCreateOrConnectWithoutPatientInput[]
    upsert?: DosAndDontsUpsertWithWhereUniqueWithoutPatientInput | DosAndDontsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DosAndDontsCreateManyPatientInputEnvelope
    set?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    disconnect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    delete?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    connect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    update?: DosAndDontsUpdateWithWhereUniqueWithoutPatientInput | DosAndDontsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DosAndDontsUpdateManyWithWhereWithoutPatientInput | DosAndDontsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DosAndDontsScalarWhereInput | DosAndDontsScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type HealthRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput> | HealthRecordCreateWithoutPatientInput[] | HealthRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPatientInput | HealthRecordCreateOrConnectWithoutPatientInput[]
    upsert?: HealthRecordUpsertWithWhereUniqueWithoutPatientInput | HealthRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthRecordCreateManyPatientInputEnvelope
    set?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    disconnect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    delete?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    update?: HealthRecordUpdateWithWhereUniqueWithoutPatientInput | HealthRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthRecordUpdateManyWithWhereWithoutPatientInput | HealthRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
  }

  export type MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput> | MedicalConditionCreateWithoutPatientInput[] | MedicalConditionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalConditionCreateOrConnectWithoutPatientInput | MedicalConditionCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalConditionUpsertWithWhereUniqueWithoutPatientInput | MedicalConditionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalConditionCreateManyPatientInputEnvelope
    set?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    disconnect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    delete?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    connect?: MedicalConditionWhereUniqueInput | MedicalConditionWhereUniqueInput[]
    update?: MedicalConditionUpdateWithWhereUniqueWithoutPatientInput | MedicalConditionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalConditionUpdateManyWithWhereWithoutPatientInput | MedicalConditionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalConditionScalarWhereInput | MedicalConditionScalarWhereInput[]
  }

  export type MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput> | MedicationReminderCreateWithoutPatientInput[] | MedicationReminderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationReminderCreateOrConnectWithoutPatientInput | MedicationReminderCreateOrConnectWithoutPatientInput[]
    upsert?: MedicationReminderUpsertWithWhereUniqueWithoutPatientInput | MedicationReminderUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicationReminderCreateManyPatientInputEnvelope
    set?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    disconnect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    delete?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    connect?: MedicationReminderWhereUniqueInput | MedicationReminderWhereUniqueInput[]
    update?: MedicationReminderUpdateWithWhereUniqueWithoutPatientInput | MedicationReminderUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicationReminderUpdateManyWithWhereWithoutPatientInput | MedicationReminderUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicationReminderScalarWhereInput | MedicationReminderScalarWhereInput[]
  }

  export type DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput> | DosAndDontsCreateWithoutPatientInput[] | DosAndDontsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DosAndDontsCreateOrConnectWithoutPatientInput | DosAndDontsCreateOrConnectWithoutPatientInput[]
    upsert?: DosAndDontsUpsertWithWhereUniqueWithoutPatientInput | DosAndDontsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DosAndDontsCreateManyPatientInputEnvelope
    set?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    disconnect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    delete?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    connect?: DosAndDontsWhereUniqueInput | DosAndDontsWhereUniqueInput[]
    update?: DosAndDontsUpdateWithWhereUniqueWithoutPatientInput | DosAndDontsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DosAndDontsUpdateManyWithWhereWithoutPatientInput | DosAndDontsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DosAndDontsScalarWhereInput | DosAndDontsScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutMedicalConditionsInput = {
    create?: XOR<PatientCreateWithoutMedicalConditionsInput, PatientUncheckedCreateWithoutMedicalConditionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalConditionsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutMedicalConditionsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalConditionsInput, PatientUncheckedCreateWithoutMedicalConditionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalConditionsInput
    upsert?: PatientUpsertWithoutMedicalConditionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalConditionsInput, PatientUpdateWithoutMedicalConditionsInput>, PatientUncheckedUpdateWithoutMedicalConditionsInput>
  }

  export type PatientCreateNestedOneWithoutHealthRecordsInput = {
    create?: XOR<PatientCreateWithoutHealthRecordsInput, PatientUncheckedCreateWithoutHealthRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHealthRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUpdateOneRequiredWithoutHealthRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutHealthRecordsInput, PatientUncheckedCreateWithoutHealthRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHealthRecordsInput
    upsert?: PatientUpsertWithoutHealthRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutHealthRecordsInput, PatientUpdateWithoutHealthRecordsInput>, PatientUncheckedUpdateWithoutHealthRecordsInput>
  }

  export type MedicationReminderCreatetimeInput = {
    set: Date[] | string[]
  }

  export type PatientCreateNestedOneWithoutMedicationRemindersInput = {
    create?: XOR<PatientCreateWithoutMedicationRemindersInput, PatientUncheckedCreateWithoutMedicationRemindersInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicationRemindersInput
    connect?: PatientWhereUniqueInput
  }

  export type MedicationReminderUpdatetimeInput = {
    set?: Date[] | string[]
    push?: Date | string | Date[] | string[]
  }

  export type PatientUpdateOneRequiredWithoutMedicationRemindersNestedInput = {
    create?: XOR<PatientCreateWithoutMedicationRemindersInput, PatientUncheckedCreateWithoutMedicationRemindersInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicationRemindersInput
    upsert?: PatientUpsertWithoutMedicationRemindersInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicationRemindersInput, PatientUpdateWithoutMedicationRemindersInput>, PatientUncheckedUpdateWithoutMedicationRemindersInput>
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<HospitalCreateWithoutAppointmentsInput, HospitalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutAppointmentsInput
    connect?: HospitalWhereUniqueInput
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type HospitalUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<HospitalCreateWithoutAppointmentsInput, HospitalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutAppointmentsInput
    upsert?: HospitalUpsertWithoutAppointmentsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutAppointmentsInput, HospitalUpdateWithoutAppointmentsInput>, HospitalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type PatientCreateNestedOneWithoutDosAndDontsInput = {
    create?: XOR<PatientCreateWithoutDosAndDontsInput, PatientUncheckedCreateWithoutDosAndDontsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDosAndDontsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutDosAndDontsNestedInput = {
    create?: XOR<PatientCreateWithoutDosAndDontsInput, PatientUncheckedCreateWithoutDosAndDontsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDosAndDontsInput
    upsert?: PatientUpsertWithoutDosAndDontsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutDosAndDontsInput, PatientUpdateWithoutDosAndDontsInput>, PatientUncheckedUpdateWithoutDosAndDontsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    firstName: string
    lastName: string
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    specialization: string
    licenseNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutDoctorsInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: number
    specialization: string
    licenseNumber: string
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    receiverId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    content: string
    senderId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutDoctorsNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type DoctorCreateWithoutHospitalInput = {
    specialization: string
    licenseNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutHospitalInput = {
    id?: number
    specialization: string
    licenseNumber: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutHospitalInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput>
  }

  export type DoctorCreateManyHospitalInputEnvelope = {
    data: DoctorCreateManyHospitalInput | DoctorCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutHospitalInput = {
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutHospitalInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutHospitalInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput>
  }

  export type AppointmentCreateManyHospitalInputEnvelope = {
    data: AppointmentCreateManyHospitalInput | AppointmentCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type DoctorUpsertWithWhereUniqueWithoutHospitalInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutHospitalInput, DoctorUncheckedUpdateWithoutHospitalInput>
    create: XOR<DoctorCreateWithoutHospitalInput, DoctorUncheckedCreateWithoutHospitalInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutHospitalInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutHospitalInput, DoctorUncheckedUpdateWithoutHospitalInput>
  }

  export type DoctorUpdateManyWithWhereWithoutHospitalInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutHospitalInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    OR?: DoctorScalarWhereInput[]
    NOT?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    id?: IntFilter<"Doctor"> | number
    specialization?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
    hospitalId?: IntFilter<"Doctor"> | number
    userId?: IntFilter<"Doctor"> | number
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutHospitalInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutHospitalInput, AppointmentUncheckedUpdateWithoutHospitalInput>
    create: XOR<AppointmentCreateWithoutHospitalInput, AppointmentUncheckedCreateWithoutHospitalInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutHospitalInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutHospitalInput, AppointmentUncheckedUpdateWithoutHospitalInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutHospitalInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutHospitalInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    preferredTime?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    hospitalId?: IntFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type HospitalCreateWithoutDoctorsInput = {
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutDoctorsInput = {
    id?: number
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutDoctorsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
  }

  export type UserCreateWithoutDoctorProfileInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    hospital: HospitalCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type HospitalUpsertWithoutDoctorsInput = {
    update: XOR<HospitalUpdateWithoutDoctorsInput, HospitalUncheckedUpdateWithoutDoctorsInput>
    create: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutDoctorsInput, HospitalUncheckedUpdateWithoutDoctorsInput>
  }

  export type HospitalUpdateWithoutDoctorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutDoctorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserUpsertWithoutDoctorProfileInput = {
    update: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type UserUpdateWithoutDoctorProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type UserCreateWithoutPatientProfileInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    hospital: HospitalCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    doctorId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type HealthRecordCreateWithoutPatientInput = {
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthRecordUncheckedCreateWithoutPatientInput = {
    id?: number
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthRecordCreateOrConnectWithoutPatientInput = {
    where: HealthRecordWhereUniqueInput
    create: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput>
  }

  export type HealthRecordCreateManyPatientInputEnvelope = {
    data: HealthRecordCreateManyPatientInput | HealthRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalConditionCreateWithoutPatientInput = {
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalConditionUncheckedCreateWithoutPatientInput = {
    id?: number
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalConditionCreateOrConnectWithoutPatientInput = {
    where: MedicalConditionWhereUniqueInput
    create: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput>
  }

  export type MedicalConditionCreateManyPatientInputEnvelope = {
    data: MedicalConditionCreateManyPatientInput | MedicalConditionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicationReminderCreateWithoutPatientInput = {
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationReminderUncheckedCreateWithoutPatientInput = {
    id?: number
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationReminderCreateOrConnectWithoutPatientInput = {
    where: MedicationReminderWhereUniqueInput
    create: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput>
  }

  export type MedicationReminderCreateManyPatientInputEnvelope = {
    data: MedicationReminderCreateManyPatientInput | MedicationReminderCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type DosAndDontsCreateWithoutPatientInput = {
    type: string
    description: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosAndDontsUncheckedCreateWithoutPatientInput = {
    id?: number
    type: string
    description: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosAndDontsCreateOrConnectWithoutPatientInput = {
    where: DosAndDontsWhereUniqueInput
    create: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput>
  }

  export type DosAndDontsCreateManyPatientInputEnvelope = {
    data: DosAndDontsCreateManyPatientInput | DosAndDontsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientProfileInput = {
    update: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type UserUpdateWithoutPatientProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type HealthRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: HealthRecordWhereUniqueInput
    update: XOR<HealthRecordUpdateWithoutPatientInput, HealthRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<HealthRecordCreateWithoutPatientInput, HealthRecordUncheckedCreateWithoutPatientInput>
  }

  export type HealthRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: HealthRecordWhereUniqueInput
    data: XOR<HealthRecordUpdateWithoutPatientInput, HealthRecordUncheckedUpdateWithoutPatientInput>
  }

  export type HealthRecordUpdateManyWithWhereWithoutPatientInput = {
    where: HealthRecordScalarWhereInput
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type HealthRecordScalarWhereInput = {
    AND?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
    OR?: HealthRecordScalarWhereInput[]
    NOT?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
    id?: IntFilter<"HealthRecord"> | number
    date?: DateTimeFilter<"HealthRecord"> | Date | string
    bloodPressure?: StringNullableFilter<"HealthRecord"> | string | null
    heartRate?: IntNullableFilter<"HealthRecord"> | number | null
    bloodGlucose?: FloatNullableFilter<"HealthRecord"> | number | null
    notes?: StringNullableFilter<"HealthRecord"> | string | null
    patientId?: IntFilter<"HealthRecord"> | number
    createdAt?: DateTimeFilter<"HealthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HealthRecord"> | Date | string
  }

  export type MedicalConditionUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalConditionWhereUniqueInput
    update: XOR<MedicalConditionUpdateWithoutPatientInput, MedicalConditionUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalConditionCreateWithoutPatientInput, MedicalConditionUncheckedCreateWithoutPatientInput>
  }

  export type MedicalConditionUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalConditionWhereUniqueInput
    data: XOR<MedicalConditionUpdateWithoutPatientInput, MedicalConditionUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalConditionUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalConditionScalarWhereInput
    data: XOR<MedicalConditionUpdateManyMutationInput, MedicalConditionUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalConditionScalarWhereInput = {
    AND?: MedicalConditionScalarWhereInput | MedicalConditionScalarWhereInput[]
    OR?: MedicalConditionScalarWhereInput[]
    NOT?: MedicalConditionScalarWhereInput | MedicalConditionScalarWhereInput[]
    id?: IntFilter<"MedicalCondition"> | number
    name?: StringFilter<"MedicalCondition"> | string
    description?: StringNullableFilter<"MedicalCondition"> | string | null
    diagnosedAt?: DateTimeNullableFilter<"MedicalCondition"> | Date | string | null
    patientId?: IntFilter<"MedicalCondition"> | number
    createdAt?: DateTimeFilter<"MedicalCondition"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCondition"> | Date | string
  }

  export type MedicationReminderUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicationReminderWhereUniqueInput
    update: XOR<MedicationReminderUpdateWithoutPatientInput, MedicationReminderUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicationReminderCreateWithoutPatientInput, MedicationReminderUncheckedCreateWithoutPatientInput>
  }

  export type MedicationReminderUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicationReminderWhereUniqueInput
    data: XOR<MedicationReminderUpdateWithoutPatientInput, MedicationReminderUncheckedUpdateWithoutPatientInput>
  }

  export type MedicationReminderUpdateManyWithWhereWithoutPatientInput = {
    where: MedicationReminderScalarWhereInput
    data: XOR<MedicationReminderUpdateManyMutationInput, MedicationReminderUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicationReminderScalarWhereInput = {
    AND?: MedicationReminderScalarWhereInput | MedicationReminderScalarWhereInput[]
    OR?: MedicationReminderScalarWhereInput[]
    NOT?: MedicationReminderScalarWhereInput | MedicationReminderScalarWhereInput[]
    id?: IntFilter<"MedicationReminder"> | number
    medication?: StringFilter<"MedicationReminder"> | string
    dosage?: StringNullableFilter<"MedicationReminder"> | string | null
    frequency?: StringFilter<"MedicationReminder"> | string
    startDate?: DateTimeFilter<"MedicationReminder"> | Date | string
    endDate?: DateTimeNullableFilter<"MedicationReminder"> | Date | string | null
    time?: DateTimeNullableListFilter<"MedicationReminder">
    patientId?: IntFilter<"MedicationReminder"> | number
    createdAt?: DateTimeFilter<"MedicationReminder"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationReminder"> | Date | string
  }

  export type DosAndDontsUpsertWithWhereUniqueWithoutPatientInput = {
    where: DosAndDontsWhereUniqueInput
    update: XOR<DosAndDontsUpdateWithoutPatientInput, DosAndDontsUncheckedUpdateWithoutPatientInput>
    create: XOR<DosAndDontsCreateWithoutPatientInput, DosAndDontsUncheckedCreateWithoutPatientInput>
  }

  export type DosAndDontsUpdateWithWhereUniqueWithoutPatientInput = {
    where: DosAndDontsWhereUniqueInput
    data: XOR<DosAndDontsUpdateWithoutPatientInput, DosAndDontsUncheckedUpdateWithoutPatientInput>
  }

  export type DosAndDontsUpdateManyWithWhereWithoutPatientInput = {
    where: DosAndDontsScalarWhereInput
    data: XOR<DosAndDontsUpdateManyMutationInput, DosAndDontsUncheckedUpdateManyWithoutPatientInput>
  }

  export type DosAndDontsScalarWhereInput = {
    AND?: DosAndDontsScalarWhereInput | DosAndDontsScalarWhereInput[]
    OR?: DosAndDontsScalarWhereInput[]
    NOT?: DosAndDontsScalarWhereInput | DosAndDontsScalarWhereInput[]
    id?: IntFilter<"DosAndDonts"> | number
    type?: StringFilter<"DosAndDonts"> | string
    description?: StringFilter<"DosAndDonts"> | string
    isAutoGenerated?: BoolFilter<"DosAndDonts"> | boolean
    patientId?: IntFilter<"DosAndDonts"> | number
    createdAt?: DateTimeFilter<"DosAndDonts"> | Date | string
    updatedAt?: DateTimeFilter<"DosAndDonts"> | Date | string
  }

  export type PatientCreateWithoutMedicalConditionsInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalConditionsInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalConditionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalConditionsInput, PatientUncheckedCreateWithoutMedicalConditionsInput>
  }

  export type PatientUpsertWithoutMedicalConditionsInput = {
    update: XOR<PatientUpdateWithoutMedicalConditionsInput, PatientUncheckedUpdateWithoutMedicalConditionsInput>
    create: XOR<PatientCreateWithoutMedicalConditionsInput, PatientUncheckedCreateWithoutMedicalConditionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalConditionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalConditionsInput, PatientUncheckedUpdateWithoutMedicalConditionsInput>
  }

  export type PatientUpdateWithoutMedicalConditionsInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalConditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutHealthRecordsInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutHealthRecordsInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutHealthRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutHealthRecordsInput, PatientUncheckedCreateWithoutHealthRecordsInput>
  }

  export type PatientUpsertWithoutHealthRecordsInput = {
    update: XOR<PatientUpdateWithoutHealthRecordsInput, PatientUncheckedUpdateWithoutHealthRecordsInput>
    create: XOR<PatientCreateWithoutHealthRecordsInput, PatientUncheckedCreateWithoutHealthRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutHealthRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutHealthRecordsInput, PatientUncheckedUpdateWithoutHealthRecordsInput>
  }

  export type PatientUpdateWithoutHealthRecordsInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutHealthRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutMedicationRemindersInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicationRemindersInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicationRemindersInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicationRemindersInput, PatientUncheckedCreateWithoutMedicationRemindersInput>
  }

  export type PatientUpsertWithoutMedicationRemindersInput = {
    update: XOR<PatientUpdateWithoutMedicationRemindersInput, PatientUncheckedUpdateWithoutMedicationRemindersInput>
    create: XOR<PatientCreateWithoutMedicationRemindersInput, PatientUncheckedCreateWithoutMedicationRemindersInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicationRemindersInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicationRemindersInput, PatientUncheckedUpdateWithoutMedicationRemindersInput>
  }

  export type PatientUpdateWithoutMedicationRemindersInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicationRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutAppointmentsInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
    dosAndDonts?: DosAndDontsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    specialization: string
    licenseNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutDoctorsInput
    user: UserCreateNestedOneWithoutDoctorProfileInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    specialization: string
    licenseNumber: string
    hospitalId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type HospitalCreateWithoutAppointmentsInput = {
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    address: string
    city: string
    state?: string | null
    zipCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutAppointmentsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutAppointmentsInput, HospitalUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
    dosAndDonts?: DosAndDontsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutDoctorsNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    hospitalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUpsertWithoutAppointmentsInput = {
    update: XOR<HospitalUpdateWithoutAppointmentsInput, HospitalUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<HospitalCreateWithoutAppointmentsInput, HospitalUncheckedCreateWithoutAppointmentsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutAppointmentsInput, HospitalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type HospitalUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PatientCreateWithoutDosAndDontsInput = {
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDosAndDontsInput = {
    id?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    emergencyContact?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    healthRecords?: HealthRecordUncheckedCreateNestedManyWithoutPatientInput
    medicalConditions?: MedicalConditionUncheckedCreateNestedManyWithoutPatientInput
    medicationReminders?: MedicationReminderUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDosAndDontsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDosAndDontsInput, PatientUncheckedCreateWithoutDosAndDontsInput>
  }

  export type PatientUpsertWithoutDosAndDontsInput = {
    update: XOR<PatientUpdateWithoutDosAndDontsInput, PatientUncheckedUpdateWithoutDosAndDontsInput>
    create: XOR<PatientCreateWithoutDosAndDontsInput, PatientUncheckedCreateWithoutDosAndDontsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutDosAndDontsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutDosAndDontsInput, PatientUncheckedUpdateWithoutDosAndDontsInput>
  }

  export type PatientUpdateWithoutDosAndDontsInput = {
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDosAndDontsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    healthRecords?: HealthRecordUncheckedUpdateManyWithoutPatientNestedInput
    medicalConditions?: MedicalConditionUncheckedUpdateManyWithoutPatientNestedInput
    medicationReminders?: MedicationReminderUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: number
    content: string
    receiverId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    content: string
    senderId: number
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateManyHospitalInput = {
    id?: number
    specialization: string
    licenseNumber: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyHospitalInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateWithoutHospitalInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutHospitalInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patientId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patientId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    date: Date | string
    preferredTime?: string | null
    location?: string | null
    type?: $Enums.AppointmentType
    reason?: string | null
    status?: $Enums.AppointmentStatus
    doctorId: number
    hospitalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthRecordCreateManyPatientInput = {
    id?: number
    date?: Date | string
    bloodPressure?: string | null
    heartRate?: number | null
    bloodGlucose?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalConditionCreateManyPatientInput = {
    id?: number
    name: string
    description?: string | null
    diagnosedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationReminderCreateManyPatientInput = {
    id?: number
    medication: string
    dosage?: string | null
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    time?: MedicationReminderCreatetimeInput | Date[] | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosAndDontsCreateManyPatientInput = {
    id?: number
    type: string
    description: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    doctorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    doctorId?: IntFieldUpdateOperationsInput | number
    hospitalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionUpdateWithoutPatientInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalConditionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderUpdateWithoutPatientInput = {
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationReminderUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medication?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: MedicationReminderUpdatetimeInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsUpdateWithoutPatientInput = {
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosAndDontsUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
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