{
  type Check<T> = T extends string? boolean : number;
  type Type = Check<string>

  type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'Function'
  : 'object';
}