import React from "react"
import { NextUIProvider, Text, Table } from "@nextui-org/react"
import Contacts from "../phoneContacts"

export default function Home() {
  console.log(Contacts.length)
  var data = Contacts
  return (
    <NextUIProvider>
      <Text
        h1
        css={{
          textAlign: "center"
        }}
      >
        Phonebook
      </Text>
      <div style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <Table
          css={{
            height: "auto"
          }}
          selectionMode="single"
        >
          <Table.Header
            aria-label="Phonebook"
          >
            <Table.Column
              css={{
                display: "none"
              }}>
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {Contacts.map((contact, index) => {
              return (
                <Table.Row>
                  <Table.Cell key={index}>
                    {contact["firstName"] + " " + contact["lastName"]}
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </NextUIProvider>
  )
}
