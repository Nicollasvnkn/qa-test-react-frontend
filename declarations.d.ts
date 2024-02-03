declare module 'jest-axe' {
    // Add any specific methods you want to use from jest-axe here.
    // For example:
    function axe(container: HTMLElement): Promise<any>;
    function toHaveNoViolations(): any;
  
    // Export all types you want to use in your tests.
    // If you are not sure what to export, you can use 'any' for a quick solution.
    export { axe, toHaveNoViolations };
  }
  