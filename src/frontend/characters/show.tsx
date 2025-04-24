import type { FC } from "hono/jsx";
import { Layout } from "../layout.js";
import { allSkills } from '../../modules/alliance2_1/resources/skill/index.js';
import type { Skill } from "../../modules/alliance2_1/resources/skill/skill.js";
import { Heading } from "../../components/heading.js";

export const ShowCharacter: FC = (props) => {
  return (
    <Layout user={props.user} characters={props.characters}>
      <div class="container mx-auto sm:px-6 lg:px-8">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            {props.character.discardedAt ? <div>
              <Heading>This character was deleted as of {new Date(props.character.discardedAt).toDateString()} and can no loger be used</Heading>
            </div> : <div>
              <Heading level={1}>View Character: {props.character.name}</Heading>
              <Heading level={2}>{props.character.raceName} {props.character.characterClass}</Heading>
              <Heading level={3}>{props.totalXp - props.usedXp} points free of {Number(props.totalXp)} total experience</Heading>
              {allSkills.map((skill: Skill) => {
                if (props.character && props.character.characterClass && skill.canBuyForCharacter(props.character)) {
                  return <div>
                    {/* @ts-ignore */}
                    <h5>{`${skill.friendlyName} - ${skill.skillCategory} - ${skill.skillCosts[props.character.characterClass]}`}</h5>
                  </div>
                }
              })}
            </div>}
          </div>
        </div>
      </div>
    </Layout>
  );
}
