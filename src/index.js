import React, { useEffect } from "react";
import { render } from "react-dom";
import CodeMeme from "./img/code-meme.png";
import toArray from "./img/to-array.png";
import toArrayFixed from "./img/to-array-fixed.png";
import ReduceGeneric from "./img/reduce-generic.png";
import reduce from "./img/reduce.png";
import ReduceGenericHighlighted from "./img/reduce-generic-highlighted.png";
import ReduceGenericHighlighted2 from "./img/reduce-generic-highlighted-2.png";
import TooMuchGenerics from "./img/generics-too-much.jpg";
import GenericsMeme from "./img/generics-meme.jpg";
import ArrayNever from "./img/arr-never.png";
import NpmDownloads from "./img/npm-downloads.png";
import Stonks from "./img/stonks.jpg";
import EmptyObj from "./img/empty-obj.png";
import Any from "./img/any.png";
import AnyWelp from "./img/any-welp.png";
import Unknown from "./img/unknown.png";
import UnknownTypeguard from "./img/unknown-typeguard.png";
import TsAutoCompleteString from "./img/ts-autocomplete-string.png";
import TsAutoCompleteObj from "./img/ts-autocomplete-obj.png";
import InterfaceCompilationResult from "./img/interface-compilation-result.png";
import EnumTranspilationResult from "./img/enum-transpilation-result.png";
import Parameters from "./img/parameters.png";
import ReturnType from "./img/return-type.png";
import As from "./img/as.png";
import As2 from "./img/as-2.png";
import FixingTypes from "./img/fixing-types.png";
import FixingTypes2 from "./img/fixing-types-2.png";
import FixingTypes3 from "./img/fixing-types-3.png";
import FixingTypes4 from "./img/fixing-types-4.png";
import FixingTypes5 from "./img/fixing-types-5.png";
import TsLetterMark from "./img/ts-lettermark-blue.png";

import {
  Appear,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Notes,
  Progress,
  Slide,
  Text,
  UnorderedList,
  indentNormalizer,
  Stepper,
  Link,
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
      <FlexBox flexDirection="column" height="100%">
        <Box>
          <Image src={TsLetterMark} />
          <Text textAlign="center">Basics to Intermediate</Text>
        </Box>
        <Box>
          <Text fontSize={20}>Interhyp Digital Summit 2020</Text>
        </Box>
      </FlexBox>
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
          touch tsconfig.json
          npm run dev
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
          <ListItem>currently on v4.1.3 (no semver)</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>turing complete since v2.2</ListItem>
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
        <Image src={NpmDownloads} height="350px" />
        <Image
          src={Stonks}
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
      <Heading>Community Opinions</Heading>

      <FlexBox>
        <iframe
          src="https://static-tweet.vercel.app/1339431957990498304"
          width="550px"
          height="285px"
        />
      </FlexBox>

      <br />
      <Text>
        Kent C. Dodds is the author of <code>@testing-library</code>,{" "}
        <code>epicreact.dev</code>, <code>testingjavascript.com</code> and
        others.
      </Text>
    </Slide>

    <Slide>
      <Heading>Community Opinions</Heading>

      <FlexBox>
        <iframe
          src="https://static-tweet.vercel.app/1339340055790276608"
          width="550px"
          height="285px"
        />
      </FlexBox>

      <br />
      <Text>Mark Dalgleish is a co-creator of CSS Modules.</Text>
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
          <Image src={ArrayNever} width="1000px" />
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
      <Heading>tuple</Heading>
      <HidePrismOverflow />

      <CodePane language="ts">
        {indentNormalizer(`
type Coordinates = [number, number];

const position: Coordinates = [48.1829205210259, 11.596245584653518];
                `)}
      </CodePane>

      <Appear elementNum={0}>
        <Box marginTop={16}>
          <CodePane language="ts">
            {indentNormalizer(`
type Coordinates = [number, number, number?];

const position: Coordinates = [48.1829205210259, 11.596245584653518];
const position: Coordinates = [48.1829205210259, 11.596245584653518, 1];
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
            <Image src={EmptyObj} width="auto" />
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
          <Image src={Any} width="auto" />
        </Box>
      </Appear>

      <Appear elementNum={1}>
        <Box mt={16} width="100%">
          <Image src={AnyWelp} width="auto" />
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
                <Image src={Unknown} width="auto" />
              </Box>
            </Appear>
          </UnorderedList>
        </Box>
        <UnorderedList>
          <Appear elementNum={1}>
            <Box mt={16} width="100%">
              <Image src={UnknownTypeguard} width="auto" />
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
            <Image src={TsAutoCompleteString} />
          </Appear>

          <Appear elementNum={1}>
            <UnorderedList>
              <ListItem>nested type autocompletion</ListItem>
            </UnorderedList>
            <Image src={TsAutoCompleteObj} width="100%" />
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
        <code>never</code> expects some of the code path to <i>never</i> reach
        its end
      </Text>
    </Slide>

    <Slide>
      <Heading>Post-Compilation Comparison</Heading>
      <HidePrismOverflow />

      <FlexBox>
        <Image src={InterfaceCompilationResult} />
      </FlexBox>

      <Appear elementNum={0}>
        <FlexBox marginTop={16}>
          <Image src={EnumTranspilationResult} />
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
          <Image src={GenericsMeme} height="350px" width="100%" />
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
            <Image src={TooMuchGenerics} height="350px" width="100%" />
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
          <Image src={toArray} />
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
        <Image src={toArrayFixed} />
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
        <Image src={reduce} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src={ReduceGeneric} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src={ReduceGenericHighlighted} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Limitations of Inference</Heading>

      <FlexBox>
        <Image src={ReduceGenericHighlighted2} />
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
      <Heading>Limitations of TypeScript</Heading>

      <FlexBox>
        <Image src={As} />
      </FlexBox>

      <Text>
        Sometimes(!) we know better than TypeScript. But TypeScript can't be
        easily convinced.
      </Text>

      <Appear elementNum={0}>
        <FlexBox>
          <Image src={As2} />
        </FlexBox>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Fixing Native or Third Party Type Bugs</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <Stepper defaultValue={1} values={[1, 2, 3, 4, 5, 6, 7]}>
        {(_, step) => {
          if (step === -1) {
            return (
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
    useEffect(() => {
      const onBeforeInstall = (event: BeforeInstallPromptEvent) => {
        event.preventDefault();
    
        promptEvent.current = event;
        onOpen();
      };
    
      window.addEventListener('beforeinstallprompt', onBeforeInstall);
    
      return () => {
        window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      };
    }, [onOpen]);
              `)}
              </CodePane>
            );
          }

          if (step === 0) {
            return (
              <FlexBox>
                <Image src={FixingTypes} />
              </FlexBox>
            );
          }

          if (step === 1) {
            return (
              <FlexBox>
                <Image src={FixingTypes2} />
              </FlexBox>
            );
          }

          if (step === 2) {
            return (
              <FlexBox>
                <Image src={FixingTypes3} />
              </FlexBox>
            );
          }

          if (step === 3) {
            return (
              <FlexBox>
                <Image src={FixingTypes4} />
              </FlexBox>
            );
          }

          if (step === 4) {
            return (
              <FlexBox>
                <Image src={FixingTypes5} />
              </FlexBox>
            );
          }

          if (step === 5) {
            return (
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
    useEffect(() => {
      const onBeforeInstall = (event: BeforeInstallPromptEvent) => {
        event.preventDefault();
    
        promptEvent.current = event;
        onOpen();
      };
    
      // @ts-expect-error event not available in all browsers
      window.addEventListener('beforeinstallprompt', onBeforeInstall);
    
      return () => {
        // @ts-expect-error event not available in all browsers
        window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      };
    }, [onOpen]);
              `)}
              </CodePane>
            );
          }

          if (step === 6) {
            return (
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
      // @ts-expect-error <description>
      // roughly means: ignore if here is an error, but complain if it is resolved
      
      // @ts-ignore <description>
      // roughly means: disable typescript here ⚠
      `)}
              </CodePane>
            );
          }

          return null;
        }}
      </Stepper>
    </Slide>

    <Slide>
      <Heading>
        Workshop?
        <br />
        More like presentation, am I right 🥱
      </Heading>

      <FlexBox>
        <Image src={CodeMeme} height="350px" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>What we're building</Heading>

      <UnorderedList>
        <ListItem>
          <Link href="https://ihyp-ts-workshop-project.ljosberinn.vercel.app/">
            Mini Pokedex
          </Link>
        </ListItem>

        <ListItem>
          Endpoint:
          https://ihyp-ts-workshop-dummy-backend.ljosberinn.vercel.app/api
          <UnorderedList>
            <ListItem>
              <code>/all</code> for <i>all</i> pokemon
            </ListItem>
            <ListItem>
              <code>/1</code> for pokemon with id <b>1</b> (1-151)
            </ListItem>
            <ListItem>
              <code>/bulbasaur</code> for pokemon with name <b>bulbasaur</b>{" "}
              (english)
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>What you'll need to know</Heading>

      <UnorderedList>
        <ListItem>
          TypeScript React files must end with <code>.tsx</code>
        </ListItem>
        <ListItem>Next.js & React export types</ListItem>
        <ListItem>
          files in <code>/pages</code> must have a default export (Next.js
          requirement)
        </ListItem>
        <ListItem>
          use <code>npm run lint:types</code> to type-check your code
        </ListItem>
        <ListItem>
          share types between backend and frontend! it's basically a monorepo
        </ListItem>
        <ListItem>useState accepts a generic</ListItem>
      </UnorderedList>

      <Notes>
        <p>
          - stellt euch Next.js einfach als 3rd Party Library vor; das Setup ist
          wie gesagt nur dazu da um eine einfach aufzusetzende und zuverlässige
          full stack TS Umgebung zu haben
        </p>
        <p>- API Handler API ist express-like</p>
      </Notes>
    </Slide>

    <Slide>
      <PrismSizeFix />
      <HidePrismOverflow />

      <Stepper defaultValue={1} values={[1, 2, 3, 4, 5]}>
        {(_, step) => {
          if (step === -1) {
            return (
              <>
                <Heading>Built-In Utility Types</Heading>

                <Link href="https://www.typescriptlang.org/docs/handbook/utility-types.html">
                  official TS Docs
                </Link>
              </>
            );
          }

          if (step === 0) {
            return (
              <>
                <Heading>Built-In Utility Types: Partial</Heading>

                <UnorderedList>
                  <ListItem>
                    <code>{`Partial<Type>`}</code>

                    <CodePane language="ts" indentSize={4}>
                      {indentNormalizer(`
        interface Estate {
          constructionYear: number;
          street: string;
        } 
        
        const estate: Partial<Estate> = {};
        const estate: Partial<Estate> = {
          street: 'Domagkstraße'
        };
                        `)}
                    </CodePane>
                  </ListItem>
                </UnorderedList>
              </>
            );
          }

          if (step === 1) {
            return (
              <>
                <Heading>Built-In Utility Types: Readonly</Heading>

                <UnorderedList>
                  <ListItem>
                    <code>{`Readonly<Type>`}</code>

                    <CodePane language="ts" indentSize={4}>
                      {indentNormalizer(`
interface Estate {
  constructionYear: number;
  street: string;
} 

const estate: Readonly<Estate> = {
  street: 'Domagkstraße'
};

// not allowed!
estate.street = 'nope';
                `)}
                    </CodePane>
                  </ListItem>
                </UnorderedList>
              </>
            );
          }

          if (step === 2) {
            return (
              <>
                <Heading>Built-In Utility Types: Record</Heading>

                <UnorderedList>
                  <ListItem>
                    <code>{`Record<Keys, Type>`}</code>

                    <CodePane language="ts" indentSize={4}>
                      {indentNormalizer(`
type Keys = 'constructionYear' | 'street';            
type Estate = Record<Keys, string>;

const estate: Estate = {
  // valid
  street: 'Domagkstraße',
  constructionYear: '2020',
  // invalid
  zip: '123',
};
                `)}
                    </CodePane>
                  </ListItem>
                </UnorderedList>
              </>
            );
          }

          if (step === 3) {
            return (
              <>
                <Heading>Built-In Utility Types: Pick</Heading>

                <UnorderedList>
                  <ListItem>
                    <code>{`Pick<Type, Keys>`}</code>

                    <CodePane language="ts" indentSize={4}>
                      {indentNormalizer(`
interface Estate {
  constructionYear: number;
  street: string;
  zip: string;
}

type Address = Pick<Estate, 'street' | 'zip'>;

const address: Address = {
  // valid
  street: 'Domagkstraße',
  zip: '80807',
  // invalid
  constructionYear: 2020,
};
                `)}
                    </CodePane>
                  </ListItem>
                </UnorderedList>
              </>
            );
          }

          if (step === 4) {
            return (
              <>
                <Heading>Built-In Utility Types: Omit</Heading>

                <UnorderedList>
                  <ListItem>
                    <code>{`Omit<Type, Keys>`}</code>

                    <CodePane language="ts" indentSize={4}>
                      {indentNormalizer(`
        interface Estate {
          constructionYear: number;
          street: string;
          zip: string;
        }
        
        type EverythingButAddress = Omit<Estate, 'street' | 'zip'>;
        
        const address: EverythingButAddress = {
          // valid
          constructionYear: 2020,
          // invalid
          street: 'Domagkstraße',
          zip: '80807',
        };
                        `)}
                    </CodePane>
                  </ListItem>
                </UnorderedList>
              </>
            );
          }

          return null;
        }}
      </Stepper>
    </Slide>

    <Slide>
      <Heading>Built-In Utility Types: Parameters</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <UnorderedList>
        <ListItem>
          <code>{`Parameters<Callable>`}</code>

          <CodePane language="ts" indentSize={4}>
            {indentNormalizer(`
const add = (a: number, b: number) => a + b;

type ParametersOfAdd = Parameters<typeof add>;
                `)}
          </CodePane>

          <Appear elementNum={0}>
            <FlexBox marginTop={16} justifyContent="start">
              <Image src={Parameters} />
            </FlexBox>
          </Appear>

          <Appear elementNum={1}>
            <Box marginTop={16}>
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
type AddSignature = (a: number, b: number) => number;

type ParametersOfAdd = Parameters<AddSignature>;
                `)}
              </CodePane>
            </Box>
          </Appear>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Built-In Utility Types: ReturnType</Heading>
      <PrismSizeFix />
      <HidePrismOverflow />

      <UnorderedList>
        <ListItem>
          <code>{`ReturnType<Callable>`}</code>

          <CodePane language="ts" indentSize={4}>
            {indentNormalizer(`
const add = (a: number, b: number) => a + b;

type ReturnTypeOfAdd = ReturnType<typeof add>;
                `)}
          </CodePane>

          <Appear elementNum={0}>
            <FlexBox marginTop={16} justifyContent="start">
              <Image src={ReturnType} />
            </FlexBox>
          </Appear>

          <Appear elementNum={1}>
            <Box marginTop={16}>
              <CodePane language="ts" indentSize={4}>
                {indentNormalizer(`
type AddSignature = (a: number, b: number) => number;

type ReturnTypeOfAdd = ReturnType<AddSignature>;
                `)}
              </CodePane>
            </Box>
          </Appear>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Third-Party Utility Types</Heading>

      <UnorderedList>
        <ListItem>
          <Link href="https://github.com/millsp/ts-toolbelt">ts-toolbelt</Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/sindresorhus/type-fest">
            type-fest
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/gcanti/fp-ts">fp-ts</Link>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Far End Examples</Heading>

      <Stepper defaultValue={0} values={[0]}>
        {(_, step) => {
          if (step === -1) {
            return (
              <UnorderedList>
                <ListItem>
                  <Link href="bit.ly/2RLEBvU">
                    typed document.querySelector
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://twitter.com/RReverser/status/1333036800487661569">
                    Uint16 "Support"
                  </Link>
                </ListItem>
              </UnorderedList>
            );
          }

          if (step === 0) {
            return (
              <FlexBox flexDirection="column">
                <Image
                  src="https://cdn.discordapp.com/attachments/508357707602853888/757722794309189662/2020-09-21_22-19-45.gif"
                  height="350px"
                />
                <Link href="https://github.com/0kku/destiny/blob/master/src/parsing/XmlTypeParser.ts">
                  XML Parser based on TS 4.1 Template Literal parsing
                </Link>
              </FlexBox>
            );
          }

          return null;
        }}
      </Stepper>
    </Slide>

    <Slide>
      <Heading>🥳 🎉</Heading>

      <iframe
        src="https://giphy.com/embed/3oKIPf3C7HqqYBVcCk"
        width="100%"
        height="65%"
        frameBorder="0"
      />
    </Slide>

    <Slide>
      <Heading>Meta</Heading>

      <UnorderedList>
        <ListItem>
          <Link href="https://github.com/ljosberinn/ihyp-ts-workshop">
            Slide Repository, powered by <code>spectacle</code>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/ljosberinn/ihyp-ts-workshop-dummy-backend">
            Dummy Backend Repository
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/ljosberinn/ihyp-ts-workshop-project">
            Demo Repository
          </Link>
        </ListItem>
      </UnorderedList>
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
