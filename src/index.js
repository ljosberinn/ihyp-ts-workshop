import React, { useEffect } from "react";
import { render } from "react-dom";

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
  Link,
  FullSizeImage,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <Heading>
        <i>TypeScript</i>
      </Heading>

      <Text textAlign="center">Basics to Intermediate</Text>
    </Slide>

    <Slide>
      <Heading>⚠ Requirements</Heading>
      <Text textAlign="center">
        please install Node.js via the Software Center
      </Text>

      <Notes>
        <p>
          - bitte versteht den Workshop als Meeting. Jeder kann was dazu
          beitragen oder fragen wann er möchte.
        </p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Getting Started</Heading>

      <HidePrismOverflow />
      <UnorderedList>
        <ListItem>
          create a new Next.js app by running
          <br />
          <CodePane language="sh">
            {indentNormalizer(`
          npx create-next-app ihyp-ts-workshop
          cd ihyp-ts-workshop
          mv pages/api/hello.js pages/api/hello.ts
          npm i -D typescript @types/react @types/node
          npm run start
          `)}
          </CodePane>
        </ListItem>
        <ListItem>
          edit <code>package.json</code>, add these to the <b>scripts</b>{" "}
          section:
          <br />
          <CodePane language="json">"lint:types": "tsc --noEmit"</CodePane>
        </ListItem>
        <ListItem>
          edit <code>tsconfig,json</code>, change property <code>strict</code>{" "}
          to <code>true</code>
          <br />
          <CodePane language="sh">
            {indentNormalizer(`
          "strict": true
          `)}
          </CodePane>
        </ListItem>
      </UnorderedList>
      <Notes>
        <p>- Schritte in Chat kopieren</p>
        <p>
          warum Next.js?
          <ul>
            <li>- full stack</li>
            <li>- simples setup mit TS</li>
          </ul>
        </p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Quick Facts</Heading>

      <UnorderedList>
        <ListItem>maintained by Microsoft</ListItem>

        <Appear elementNum={0}>
          <ListItem>first public release Oct 2012</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>in development since ~2010</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>currently on v4.1.2 (no semver)</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>touring complete since v2.2</ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem>TS itself is written in TS</ListItem>
        </Appear>
      </UnorderedList>

      <Notes>
        <p>
          - wer in den letzten ~2 Jahren in VSCode und/oder WebStorm JavaScript
          geschrieben hat, hat höchstwahrscheinlich schon von TS profitiert
        </p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Alternatives</Heading>
      <Text>- Flow (Facebook)</Text>
      <FlexBox>
        <Image src="/npm-downloads.png" height="350px" />
        <Image
          src="/stonks.jpg"
          height="250px"
          style={{
            marginLeft: "2em",
          }}
        />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>What</Heading>
      <UnorderedList>
        <ListItem>
          TypeScript is a <i>superset</i> of JavaScript
        </ListItem>
        <Appear elementNum={0}>
          <ListItem>any JavaScript is valid TypeScript</ListItem>
        </Appear>

        <Appear elementNum={1}>
          <ListItem>
            incrementally adoptable (per-file basis, via <code>allowJs</code>{" "}
            tsConfig property)
          </ListItem>
        </Appear>

        <Appear elementNum={2}>
          <ListItem>
            solely present in dev, no runtime impact<sup>*</sup>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <p>- `enum`</p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Advantages</Heading>

      <UnorderedList>
        <ListItem>robust refactoring</ListItem>

        <Appear elementNum={0}>
          <ListItem>incredible IDE/Editor support</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>types are self-documenting (to some degree)</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Downsides</Heading>

      <UnorderedList>
        <ListItem>
          TypeScript cannot be run natively<sup>*</sup> - a compile step is
          required
          <Appear elementNum={0}>
            <Text color="lightgreen">
              usually not an issue, just higher barrier of entry
            </Text>
          </Appear>
        </ListItem>

        <Appear elementNum={1}>
          <ListItem>
            3rd party types may be incomplete/outdated/wrong
            <br />
            <Text color="lightgreen">
              less and less of an issue thanks to larger adoption
            </Text>
            <Text color="lightgreen">
              when in doubt, use a different library
            </Text>
          </ListItem>
        </Appear>
      </UnorderedList>

      <Notes>
        <p>- * Deno als Node-Nachfolger unterstützt nativ TypeScript</p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Success Stories</Heading>

      <UnorderedList>
        <ListItem>
          <Link href="https://dropbox.tech/frontend/the-great-coffeescript-to-typescript-migration-of-2017">
            Dropbox - The Great CoffeeScript to Typescript Migration of 2017
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://slack.engineering/typescript-at-slack/">
            Slack - TypeScript at Slack
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Interhyp?</Heading>

      <UnorderedList>
        <ListItem>
          UI
          <UnorderedList>
            <ListItem>@platform/elements (multiple apps)</ListItem>
            <ListItem>module-documents (Interhyp Home /dokumente)</ListItem>
            <ListItem>module-intent-data (Interhyp Home /vorhaben)</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Interhyp!</Heading>

      <UnorderedList>
        <ListItem>
          Node
          <UnorderedList>
            <ListItem>variant-service</ListItem>
            <ListItem>financing-project-service</ListItem>
            <ListItem>variant-calculation-service</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>A Common Problem with JavaScript</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />
      <CodePane language="js" fontSize={25}>
        {indentNormalizer(`
export const getDateOfRegistration = (user) => user.registered;

const user = {
  name: 'power',
  registered: 1607517676
};

const registeredAt = new Date(getDateOfRegistration(user) \* 1000);`)}
      </CodePane>
      <Text>original implementation - no bugs yet!</Text>
    </Slide>

    <Slide>
      <Heading>A Common Problem with JavaScript</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="js" fontSize={25}>
        {indentNormalizer(`
/**
 * @returns {int}
 */
export const getDateOfRegistration = (user) => user.registered;

const user = {
  name: 'power',
  registered: 1607517676
};

const registeredAt = new Date(getDateOfRegistration(user) \* 1000);`)}
      </CodePane>
      <Text>improved as much as JS is capable without runtime checks</Text>
    </Slide>

    <Slide>
      <Heading>A Common Problem with JavaScript</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="js" fontSize={25}>
        {indentNormalizer(`
/**
 * @returns {int}
 */
export const getDateOfRegistration = (user) => user.registered * 1000;

const user = {
  name: 'power',
  registered: 1607517676
};

const registeredAt = new Date(getDateOfRegistration(user));`)}
      </CodePane>
      <Text>
        changing implementation - documentation still technically correct 😬
        <br />
        other consumers will silently see odd return values now though
      </Text>
    </Slide>

    <Slide>
      <Heading>A Common Problem with JavaScript</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="js" fontSize={25}>
        {indentNormalizer(`
/**
 * @returns {int}
 */
export const getDateOfRegistration = (user) => new Date(user.registered * 1000);

const user = {
  name: 'power',
  registered: 1607517676
};

const registeredAt = getDateOfRegistration(user);`)}
      </CodePane>
      <Text>
        worst case: documentation out of date, implementation differs, consumers
        likely see obscure production errors 😫
      </Text>
    </Slide>

    <Slide>
      <Heading>Meanwhile...</Heading>
      <iframe
        src="https://giphy.com/embed/l0IylOPCNkiqOgMyA"
        width="100%"
        height="75%"
        frameBorder="0"
        allowFullScreen
      />

      <Text textAlign="center">
        You, neck deep in the minified source code on the search for the error
      </Text>
    </Slide>

    <Slide>
      <Heading>... the dev who changed the implementation</Heading>
      <iframe
        src="https://giphy.com/embed/J53U5k4Yl2Ep7KrIzJ"
        width="100%"
        height="55%"
        frameBorder="0"
        allowFullScreen
      />
    </Slide>

    <Slide>
      <Heading>Using TypeScript</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" fontSize={22}>
        {indentNormalizer(`
interface User {
  name: string;
  registerd: number;
}

export const getDateOfRegistration = (user: User): number => user.registered;

const user: User = {
  name: 'power',
  registered: 1607517676
};

const registeredAt = new Date(getDateOfRegistration(user) * 1000);`)}
      </CodePane>
      <Text>
        types, even without comments, indicate what goes where and what receives
        which argument 🥰
      </Text>

      <Notes>
        <p>
          - <code>getDateOfRegistration</code> sollte eigentlich in{" "}
          <code>getRegistrationTimestamp</code> umbenannt werden, TypeScript
          verhindert natürlich nicht, dass aus Sekunden weiterhin Millisekunden
          werden könnten
        </p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>
        <code>
          <i>interface User</i>
        </code>
        ?{" "}
        <code>
          <i>user: User</i>
        </code>
        ?
      </Heading>

      <iframe
        src="https://giphy.com/embed/lkdH8FmImcGoylv3t3"
        width="100%"
        height="60%"
        frameBorder="0"
        allowFullScreen
      />
    </Slide>

    <Slide>
      <Heading>string</Heading>
      <HidePrismOverflow />

      <CodePane language="ts">
        {indentNormalizer(`
const ts = 'TypeScript';
                `)}
      </CodePane>

      <Appear elementNum={1}>
        <Text>...wait, that looks like JavaScript! 👀</Text>
      </Appear>

      <Appear elementNum={2}>
        <Text color="lightgreen">
          TypeScript is very good at finding out what type a certain variable
          is. You <b>do not</b> need to state the obvious in most cases!
        </Text>
      </Appear>

      <Appear elementNum={3}>
        <CodePane language="ts">
          {indentNormalizer(`
const ts: string = 'TypeScript'; // valid, but redundant
              `)}
        </CodePane>
      </Appear>
    </Slide>

    <Slide>
      <Heading>number | undefined | null | boolean</Heading>
      <HidePrismOverflow />

      <UnorderedList>
        <CodePane language="ts">
          {indentNormalizer(`
const one = 1;
const one: number = 1; // valid, but redundant
                `)}
        </CodePane>

        <Appear elementNum={0}>
          <Box marginTop={16}>
            <CodePane language="ts">
              {indentNormalizer(`
const impliticAbsence = undefined;
const impliticAbsence: undefined = undefined; // valid, but redundant
                `)}
            </CodePane>
          </Box>
        </Appear>

        <Appear elementNum={1}>
          <Box marginTop={16}>
            <CodePane language="ts">
              {indentNormalizer(`
const explicitAbsence = null;
const explicitAbsence: null = null; // valid, but redundant
                `)}
            </CodePane>
          </Box>
        </Appear>

        <Appear elementNum={2}>
          <Box marginTop={16}>
            <CodePane language="ts">
              {indentNormalizer(`
const valid = true;
const valid: boolean = true; // valid, but redundant
                `)}
            </CodePane>
          </Box>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>array</Heading>
      <HidePrismOverflow />

      <CodePane language="ts">
        {indentNormalizer(`
const arr = [];
const arr: [] = []; // valid, but redundant
                `)}
      </CodePane>

      <Appear elementNum={0}>
        <FlexBox alignItems="start" justifyContent="start" mt={16}>
          <Image src="/arr-never.png" width="1000px" />
        </FlexBox>
      </Appear>

      <Appear elementNum={1}>
        <Box mt={16} width="100%">
          <CodePane language="ts">
            {indentNormalizer(`
                const arr = [1, 2, 3]; // using inference
                const arr: number[] = []; // an array of numbers! 🎉
                const arr: Array<number> = []; // using the builtin Array generic
                `)}
          </CodePane>
        </Box>
      </Appear>
    </Slide>

    <Slide>
      <Heading>object</Heading>
      <HidePrismOverflow />

      <UnorderedList>
        <CodePane language="ts">
          {indentNormalizer(`
const obj = {};
const obj: object = {}; // valid, but redundant
                `)}
        </CodePane>

        <Appear elementNum={0}>
          <Box mt={16} width="100%">
            <Image src="/empty-obj.png" width="auto" />
          </Box>
        </Appear>

        <Appear elementNum={1}>
          <Box mt={16} width="100%">
            <CodePane language="ts">
              {indentNormalizer(`
const obj = {}; // using inference, still an empty object
const obj: { [key: string]: string } = {}; // declaring keys and values of an object as strings
const obj: Record<string, string> = {}; // using the builtin Record generic (preferred)
                `)}
            </CodePane>
          </Box>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>any</Heading>
      <HidePrismOverflow />

      <Text color="coral">
        ⚠ dangerous! use only as temporary fix or last resort
      </Text>

      <CodePane language="ts">
        {indentNormalizer(`
                const obj: any = {};
                `)}
      </CodePane>

      <Appear elementNum={0}>
        <Box mt={16} width="100%">
          <Image src="/any.png" width="auto" />
        </Box>
      </Appear>
    </Slide>

    <Slide>
      <Heading>unknown</Heading>
      <HidePrismOverflow />

      <FlexBox alignItems="start">
        <Box width="40%">
          <UnorderedList>
            <ListItem>
              the sane sibling of <code>any</code>
            </ListItem>

            <CodePane language="ts">
              {indentNormalizer(`
const obj: unknown = {};
                `)}
            </CodePane>

            <Appear elementNum={0}>
              <Box mt={16} width="100%">
                <Image src="/unknown.png" width="auto" />
              </Box>
            </Appear>
          </UnorderedList>
        </Box>
        <UnorderedList>
          <Appear elementNum={1}>
            <Box mt={16} width="100%">
              <Image src="/unknown-typeguard.png" width="auto" />
            </Box>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>interface & type</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />

      <FlexBox>
        <Box width="50%">
          <UnorderedList>
            <ListItem>
              <code>interface</code>
            </ListItem>

            <CodePane language="ts" fontSize={18}>
              {indentNormalizer(`
interface User {
  name: string;
}

const user: User = {
  name: 'interhyp'
};

// exportable
export interface User {}
// importable
import type { User, Moderator } from '...somewhere';

// extendable
interface Administrator extends User, Moderator {
  isAdmin: true
}
                `)}
            </CodePane>
          </UnorderedList>
        </Box>

        <Box width="50%">
          <Appear elementNum={0}>
            <UnorderedList>
              <ListItem>
                <code>type</code>
              </ListItem>

              <CodePane language="ts" fontSize={18}>
                {indentNormalizer(`
type User = {
  name: string;
}

const user: User = {
  name: 'interhyp'
};

// exportable
export type User = {}
// importable
import type { User, Moderator } from '...somewhere';

// extendable
type Administrator = User & Moderator & {
  isAdmin: true
}
                `)}
              </CodePane>
            </UnorderedList>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>interface & type</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />

      <FlexBox alignItems="start">
        <Box width="50%">
          <UnorderedList>
            <ListItem>
              <code>optional properties</code>
            </ListItem>

            <CodePane language="ts" fontSize={18}>
              {indentNormalizer(`
interface User {
  name: string;
  age?: number;
}

type User = {
  name: string;
  age?: number;
}
                `)}
            </CodePane>
          </UnorderedList>
        </Box>

        <Box width="50%">
          <Appear elementNum={0}>
            <UnorderedList>
              <ListItem>
                <code>nesting</code>
              </ListItem>

              <CodePane language="ts" fontSize={18}>
                {indentNormalizer(`
interface Name {
  firstName: string;
  middleName?: string;
  surName: string;
}

interface User {
  name: Name;
  age?: number;
}

type User = {
  name: Name;
  age?: number;
}
`)}
              </CodePane>
            </UnorderedList>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>unions</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />

      <FlexBox alignItems="start">
        <Box width="50%">
          <UnorderedList>
            <ListItem>
              <code>unions</code>
            </ListItem>

            <CodePane language="ts" indentSize={4}>
              {indentNormalizer(`
type Title = 'MD' | 'PhD';

type Name = {
  firstName: string;
  middleName?: string;
  surName: string;
  title?: Title;
}

type User = {
  name: Name;
  age?: number;
}
`)}
            </CodePane>
          </UnorderedList>
        </Box>
        <Box width="50%">
          <Appear elementNum={0}>
            <UnorderedList>
              <ListItem>narrow type autocompletion</ListItem>
            </UnorderedList>
            <Image src="./ts-autocomplete-string.png" />
          </Appear>

          <Appear elementNum={1}>
            <UnorderedList>
              <ListItem>nested type autocompletion</ListItem>
            </UnorderedList>
            <Image src="./ts-autocomplete-obj.png" width="100%" />
          </Appear>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>never</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
const failWith = <Callback extends (...args: any) => any>(
  message: string,
  callback: Callback
): ReturnType<Callback> | never => {
  try {
    return callback();
  } catch {
    throw new Error(message);
  }
};

const add = (a: number, b: number) => a + b;

const result = failWith("nope", () => add(2, 2));

                `)}
      </CodePane>

      <Text>
        <code>never</code> expects some of the code path to never reach its end
      </Text>
    </Slide>

    <Slide>
      <Heading>Post-Compilation Comparison</Heading>
      <HidePrismOverflow />

      <FlexBox>
        <Image src="./interface-compilation-result.png" />
      </FlexBox>

      <Appear elementNum={0}>
        <FlexBox marginTop={16}>
          <Image src="./enum-transpilation-result.png" />
        </FlexBox>
      </Appear>
    </Slide>

    <Slide>
      <Heading>enum: the one exception</Heading>
      <HidePrismOverflow />
      <PrismSizeFix />

      <FlexBox alignItems="start">
        <Box width="45%">
          <UnorderedList>
            <CodePane language="ts" indentSize={4}>
              {indentNormalizer(`
enum EstateType {
  APARTMENT,
  DETACHED_HOUSE,
  SEMI_DETACHED_HOUSE,
  TWO_FAMILY_HOUSE
}

// yields
{
  "0": "APARTMENT",
  "1": "DETACHED_HOUSE",
  "2": "SEMI_DETACHED_HOUSE",
  "3": "TWO_FAMILY_HOUSE",
  "APARTMENT": 0,
  "DETACHED_HOUSE": 1,
  "SEMI_DETACHED_HOUSE": 2,
  "TWO_FAMILY_HOUSE": 3
}
                `)}
            </CodePane>
          </UnorderedList>
        </Box>

        <Box width="55%">
          <Appear elementNum={0}>
            <UnorderedList>
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
enum EstateType {
  APARTMENT = "APARTMENT",
  DETACHED_HOUSE = "DETACHED_HOUSE",
  SEMI_DETACHED_HOUSE = "SEMI_DETACHED_HOUSE",
  TWO_FAMILY_HOUSE = "TWO_FAMILY_HOUSE"
}

// yields
{
  "APARTMENT": "APARTMENT",
  "DETACHED_HOUSE": "DETACHED_HOUSE",
  "SEMI_DETACHED_HOUSE": "SEMI_DETACHED_HOUSE",
  "TWO_FAMILY_HOUSE": "TWO_FAMILY_HOUSE"
}
                `)}
              </CodePane>
            </UnorderedList>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Function Arguments & Return Types</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
interface LoginServiceDefinition {
  login: (username: string, password: string) => User;
}
              
class LoginService implements LoginServiceDefinition {
  login = (username: string, password: string): User => {
    return {
      id: 1,
      username,
    }
  }
}
        `)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Function Arguments & Return Types</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
interface User {
  id: number;
  username: string;
}
      
const login = (username: string, password: string): User => {
  return {
    id: 1,
    username
  }
}`)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Generics</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
interface User {
  id: number;
  username: string;
}
      
const login = (username: string, password: string): User => {
  return {
    id: 1,
    username
  }
}`)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Generics...?</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
interface User {
  id: number;
  username: string;
}
      
const login = async (username: string, password: string): Promise ???? => {
  try {
    const response = await fetch(ENDPOINT, {
      body: JSON.stringify({ username, password }),
      method: 'POST'
    });

    return response.json();
  } catch {
    return null;
  }
}`)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Generics!</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
interface User {
  id: number;
  username: string;
}
      
const login = async (username: string, password: string): Promise<User | null> => {
  try {
    const response = await fetch(ENDPOINT, {
      body: JSON.stringify({ username, password }),
      method: 'POST'
    });

    return response.json();
  } catch {
    return null;
  }
}`)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Generics can end up being the Wild West</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <FlexBox style={{ gap: 15 }}>
        <Box width="25%">
          <Image src="./generics-meme.jpg" height="350px" width="100%" />
        </Box>

        <Box width="50%">
          <Appear elementNum={0}>
            <CodePane language="ts">
              {indentNormalizer(
                `
type MergeObjects<A, B> = {
  [K in keyof B]: undefined extends B[K]
    ? K extends keyof A
      ? Exclude<B[K], undefined> | A[K]
      : B[K]
    : B[K]
} & {
  [K in keyof A]: K extends keyof B
    ? undefined extends B[K]
      ? Exclude<B[K], undefined> | A[K]
      : B[K]
    : A[K]
  };`
              )}
            </CodePane>

            <Link
              href="https://gist.github.com/ClickerMonkey/a081b990b9b14215141fb6248cef4dc4"
              fontSize="16"
            >
              via TypeScript Helper Types
            </Link>
          </Appear>
        </Box>

        <Box width="25%">
          <Appear elementNum={1}>
            <Image src="./generics-too-much.jpg" height="350px" width="100%" />
          </Appear>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Generic Functions</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
type Estate = {
  constructionYear: number
};

const estate: Estate = {
  constructionYear: 2019
};

const toArray = (dataset: unknown) => Array.isArray(dataset) ? dataset : [dataset];

// should be type-safe Estate[]
const estates = toArray(estate);
`)}
      </CodePane>

      <Appear elementNum={0}>
        <FlexBox marginTop={16}>
          <Image src="./to-array.png" />
        </FlexBox>
      </Appear>

      <Notes>
        <p>- weiß jemand die Lösung?</p>
        <p>
          https://www.typescriptlang.org/play?#code/C4TwDgpgBAogzsAhsaBeKBvAUFKBjAewDsEAnAVz2AEtiBNCRUgLiiPIFsAjCUrAXyxZCJYFAgJkEVvCQoo6bLhFlKNeoxZQATAAYAjAE4BQlWOAEAgqVKIQCqAAoAJskRwIwVuSIBrIgQA7kQAlAoAfFDWtiAAdNRw0XYubh7AYQD8UK5IaVCsANo57p4AugDcQgD0VVBwABYE5AA2zlA8UKCQALRwiABm0LJSBaXCxAjikihwDhZJII4SchAh5UA{" "}
        </p>
        <p>
          {indentNormalizer(`
const toArray = <T extends unknown>(dataset: T): T[] => Array.isArray(dataset) ? dataset : [dataset];`)}
        </p>
      </Notes>
    </Slide>

    <Slide>
      <Heading>Generic Functions</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
type Estate = {
  constructionYear: number
};

const estate: Estate = {
  constructionYear: 2019
};

const toArray = <T extends unknown>(dataset: T): T[] => Array.isArray(dataset) ? dataset : [dataset];

// should be type-safe Estate[]
const estates = toArray(estate);
`)}
      </CodePane>

      <FlexBox marginTop={16}>
        <Image src="./to-array-fixed.png" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
const arr = [
  { name: 'foo', value: 1 },
  { name: 'bar', value: 2 },
  { name: 'baz', value: 3 },
];

const asObject = arr.reduce((carry, dataset) => {
  carry[dataset.name] = carry[dataset.value];

  return carry;
}, {});
`)}
      </CodePane>

      <FlexBox marginTop={16}>
        <Image src="./reduce.png" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src="./reduce-generic.png" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src="./reduce-generic-highlighted.png" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src="./reduce-generic-highlighted-2.png" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <CodePane language="ts" indentSize={4}>
        {indentNormalizer(`
const arr = [
  { name: 'foo', value: 1 },
  { name: 'bar', value: 2 },
  { name: 'baz', value: 3 },
];

type Result = Record<
  typeof arr[number]['name'],
  typeof arr[number]['value']
>;

const asObject = arr.reduce<Result>((carry, dataset) => {
  carry[dataset.name] = carry[dataset.value];

  return carry;
}, {});
`)}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>
        Workshop?
        <br />
        More like presentation, am I right 🥱
      </Heading>

      <FlexBox>
        <Image src="/code-meme.png" height="350px" />
      </FlexBox>
    </Slide>
  </Deck>
);

render(<Presentation />, document.getElementById("root"));

function PrismSizeFix() {
  useEffect(() => {
    const sheet = Object.assign(document.createElement("style"), {
      textContent: `
    pre.prism-code {
      max-height: initial !important;
    }
  `,
    });

    document.head.append(sheet);

    return () => sheet.remove();
  }, []);

  return null;
}

function HidePrismOverflow() {
  useEffect(() => {
    const sheet = Object.assign(document.createElement("style"), {
      textContent: `
    pre.prism-code {
      overflow: hidden !important;
    }
  `,
    });

    document.head.append(sheet);

    return () => sheet.remove();
  }, []);

  return null;
}
