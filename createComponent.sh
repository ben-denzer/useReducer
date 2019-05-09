#!/bin/bash

COMPONENT_NAME=$1
FIRST_LETTER=${COMPONENT_NAME::1}

if ! [[ "$FIRST_LETTER" =~ [A-Z] ]]; then
  echo 'Component name must start with a capital letter'
  exit
fi

mkdir ./src/components/$COMPONENT_NAME
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.js
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.style.js
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.test.js

# index.ts
cat << EOF > src/components/$COMPONENT_NAME/index.js
import $COMPONENT_NAME from './$COMPONENT_NAME';

export default $COMPONENT_NAME;
EOF

# component .js file
cat << EOF > ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.js
import React from 'react';
import { ${COMPONENT_NAME}Wrapper } from './${COMPONENT_NAME}.style';

function $COMPONENT_NAME(props) {
  return (
    <${COMPONENT_NAME}Wrapper>$COMPONENT_NAME</${COMPONENT_NAME}Wrapper>
  );
}

export default $COMPONENT_NAME;
EOF

# styles file
cat << EOF > ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.style.js
import styled from 'styled-components';

export const ${COMPONENT_NAME}Wrapper = styled.div\`\`;
EOF

# test file
cat << EOF > ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.test.js
import React from 'react';
import $COMPONENT_NAME from './$COMPONENT_NAME';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<${COMPONENT_NAME} />);
});
EOF
