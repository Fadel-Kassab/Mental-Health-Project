import Realm from "realm"
import { createRealmContext } from "@realm/react"

const config: Realm.Configuration = {
  schema: [],
  schemaVersion: 1,
}

export const Database = {
}

export const { useRealm, useQuery, useObject, RealmProvider } =
  createRealmContext(config)

