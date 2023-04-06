import { ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/react';
import React, { type ReactElement } from 'react';
import { theme } from '../src/pages/_app';
import '../src/styles/globals.css';

export const decorators = [
    (Story: any): ReactElement => {
        return (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        );
    },
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
