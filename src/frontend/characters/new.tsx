import type { FC } from "hono/jsx";
import { Layout } from "../layout.js";

import { Description, Field, FieldGroup, Fieldset, Label, Legend } from '../../components/fieldset.js'
import { Select } from '../../components/select.js'
import { Text } from "../../components/text.js";
import { Input } from "../../components/input.js";
import { classesList } from "../../modules/alliance2_1/resources/class/index.js";
import { racesMap } from "../../modules/alliance2_1/resources/race/index.js";
import { Button } from "../../components/button.js";

export const NewCharacter: FC = (props) => {
  return (
    <Layout user={props.user} characters={props.characters}>
      <div class="container mx-auto sm:px-6 lg:px-8">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <form method="post" action="/characters">
              <Fieldset>
                <Legend>New Character</Legend>
                <Text>Tell us who you are!</Text>
                <FieldGroup>
                  <Field>
                    <Label>What is your character's name?</Label>
                    <Input name="name" type="text" placeholder="name" required/>
                  </Field>
                </FieldGroup>
                <FieldGroup>
                  <Field>
                    <Label>Chapter</Label>
                    <Select name="chapter">
                      {props.chapters.map((c: any) => {
                        return (<option value={c.id}>{c.name}</option>)
                      })}
                    </Select>
                    <Description>Choose your home chapter!</Description>
                  </Field>
                </FieldGroup>
                <FieldGroup>              
                  <Field>
                    <Label>Class</Label>
                    <Select name="characterClass">
                      {classesList.map((c) => {
                        return (<option>{c.name}</option>)
                      })}
                    </Select>
                    <Description>Select your starting class. Don't worry, this can be changed at any time.</Description>
                  </Field>
                </FieldGroup>

                <FieldGroup>              
                  <Field>
                    <Label>Character Race</Label>
                    <Select name="race">
                      {Object.keys(racesMap).map((c) => {
                        return (<option>{c}</option>)
                      })}
                    </Select>
                    <Description>Select your character's racial heritage.</Description>
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Button type='submit'>Submit</Button>
                </FieldGroup>
              </Fieldset>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
