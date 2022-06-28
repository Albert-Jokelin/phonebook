import Localbase from 'localbase'
import Contacts, { version } from "../phoneContacts"

let db = new Localbase('db')
const localVersion = localStorage.getItem("phoneBookVersion")
window.db = db
window.localVersion = localVersion;
window.version = version;

export function insertData(callback){
  Contacts.forEach((contact, index) => {
    db.collection("phoneBookContacts").add(contact)
  })

  // getData
}


