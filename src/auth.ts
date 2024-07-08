import { pb } from './backend'
import type { AuthSystemFields, UsersRecord, UsersResponse } from './pocketbase-typegen'
import { ref } from 'vue'

type MaybeUser = UsersResponse | null

/** Permet de savoir si l'on est connecté ou pas
 * @prop {RecordIdString} id de l'utilisateur (utile pour relations)
 * @prop {string} username nom d'utilisateur
 */
export const estConnecté = ref(null as MaybeUser)

// Surveille la connecxion pour maintenir `estConnecté` à jour
pb.authStore.onChange(() => {
  estConnecté.value = pb.authStore.model as MaybeUser
}, true) //true pour le tester de suite

/**
 * Connexion par GitHub
 * Procédure : https://github.com/settings/developers
 *  - Faire une application
 *  - Noter l'ID et générer un secret
 *  - Callback URL : https://yourdomain.com/api/oauth2-redirect.
 *    - Tester avec (http://localhost:8090/api/oauth2-redirect)
 * Dans le backend de Pocketbase : saisir ID et secret
 */
export async function login() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' })
  console.log(authData)
  return authData
}
/** Deconnexion */
export function logout() {
  pb.authStore.clear()
}
