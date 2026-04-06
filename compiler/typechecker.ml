type typ =
  | Real
  | Vec of int

type expr =
  | Var of string
  | Call of string * expr list

let check_model arg =
  match arg with
  | Var "normalized" -> Ok ()
  | _ -> Error "Expected normalized vector"

let check expr =
  match expr with
  | Call ("model", [arg]) -> check_model arg
  | _ -> Ok ()