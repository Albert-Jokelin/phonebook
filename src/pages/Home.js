import React, { useState } from "react"
import { NextUIProvider, Text, Table, Button, Grid, Modal } from "@nextui-org/react"
import Contacts from "../phoneContacts"

var visibility = []
for (var i = 0; i < Contacts.length; i++) {
  visibility[i] = false;
}

export default function Home() {
  console.log(Contacts.length)
  const [visibleModal, setVisibleModal] = useState(false)

  var data = Contacts

  function closeHandler(index) {
    visibility[index] = false;
    setVisibleModal(!visibleModal)
    console.log("Close Handler")
  }
  function handleClick(index) {
    visibility[index] = true;
    console.log("Visibility index Handle Click: ", visibility[index])
    setVisibleModal(!visibleModal)
    console.log("Handle click")
  }
  function checkVisibility(index) {
    console.log("Check Visibility")
    console.log(visibility[index])
    // setVisibleModal(!visibleModal)
    return visibility[index]
  }
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
                    <Grid.Container css={{ justifyContent: "space-between" }}>
                      <Grid>
                        {contact["firstName"] + " " + contact["lastName"]}
                      </Grid>
                      <Grid>
                        <Button ghost flat size="sm" css={{ marginRight: "0px", marginLeft: "auto" }} onClick={handleClick}>
                          Details
                        </Button>
                      </Grid>
                      <Modal
                        closeButton
                        aria-labelledby="modal-title"
                        open={checkVisibility(contact["index"])}
                        onClose={closeHandler}
                      >
                        This is the Modal
                      </Modal>
                    </Grid.Container>
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
