# There's never time

## Clock installation

### Structure

#### In the cloud

Generating printer output avoids local Node.js and software installations on limited or unstable hardware by using GitHub in the cloud. GitHub Workflows process the `facts.yaml` to create the output and post it to a dedicated Gist. To manage the selection of facts across stateless workflow runs, a separate Gist stores an incrementing counter that loops through the available facts.

#### On the device connected to the printer

A local bash script retrieves the fact Gist and converts the HTML content into a PDF. This PDF is then sent to the printer. To automate this process, cron is used to schedule regular execution.

### Requirements

#### Gist files

Create a Gist file that will serve as the output for the html and one that will save the fact iteration. Here are two examples. The HTML output can have anything as starting text, but the name must be `theres-never-time-printer-output.html`. The fact counter should start with `1` as content. Here are two examples:

- [printer output](https://gist.github.com/jdwillemse/8d3e2bbe443b3312e257d8a856caa29d)
- [counter](https://gist.github.com/jdwillemse/ba4d03f8077fe97ab5db287f43c3324c)

#### Gist token

The Github workflows need to be able to update the Gist files created in the previous step. For this a Personal Access Token is needed with `gist` permissions. The token only needs to be created once and it can be done [here](https://github.com/settings/tokens). Choose the option for the token to never expire or you will need to repeat this step when it does.

The token then needs to pasted in an action secret (t/settings/secrets/actions) called `GIST_TOKEN`

#### Environment variables

env vars are variables that the project needs to function but because they are sensitive so they cannot be stored in the code of the project or they change based on environment. These variables need to requested from someone who already has them.

These vars are store in a `.env` file in the root of create-output app

- `SERP_API_KEY` is used to verify a SERP account
- `TEST_MODE` optional boolean to use literal time as opposed to rounded to closest hour

Vars are identification tokens used in Github to give workflows permissions to run automated tasks. They are added to a repo's action variables REPO/settings/variables/actions

- `GIST_TOKEN` gives Github action the ability to modify Gists
- `FACT_INDEX_GIST_ID` stores the current index of the printed fact
- `FACT_INDEX_GIST_NAME` is the name of this Gist
- `PRINT_DATA_GIST_ID` is the ID of the formatted fact to be printed
- `PRINT_DATA_GIST_NAME` is the name of this Gist

### Create new version

## Website

This is the repo of the previous web version of the There's Never Time clock.
