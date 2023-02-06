# Simplyreboot
Setting up the project from start to finish

1. Create the workspace: `npx ng new simplyreboot --no-create-application --minimal --prefix sr --routing --style scss`
    - these styles don't appear to have an effect on an empty workspace
    - just do `npx ng new simplyreboot` and add the rest to the app creation
2. Create the home/shell. `ng generate app home --routing --style scss --minimal --prefix rb`
3. Create one of the microfrontends, micro. `ng generate app micro --routing --style scss --minimal --prefix rb`
4. Create another microfrontend style-guide. `ng generate app style-guide --routing --style scss --minimal --prefix rb`
5. Use ng add to add/run angular architects package `ng add @angular-architects/module-federation --project home --type dynamic-host --port 4200`
6. Run it again to add a remote