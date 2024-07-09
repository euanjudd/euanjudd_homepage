/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */
        './homepage/templates/**/*.html',
        './theme/templates/**/*.html',
        './theme/static_src/src/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
              'primary-bg': '#06AB78',
              'primary-text': '#FFFFFF',
              'base-content': '#30313D',
              'base-content-secondary': '#5C5B61',
              'base-bg': '#F8F9FD',
              'highlight-bg': '#3d3030',
              'highlight-text': '#FFFFFF',
              'border-color-default': '#30313D',
            },
            fontSize: {
              'base': '16px',
            },
            fontWeight: {
              'normal': '400',
              'black': '900',
            },
            letterSpacing: {
              'tight': '-0.4px',
            },
            lineHeight: {
              'tight': '1',
              'normal': '1.625',
            },
          },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
