# Automated-Chicken-Coop-2
> A remake of the chicken coop with Raspberry Pi and NodeJS

## Quick Usage
### Install
`npm install`

### To Start
`npm start`

### REST Commands
#### Open Door
`http://localhost:9000/door/open`
#### Close Door
`http://localhost:9000/door/close`

## Tips
### Auto-Update
Create a shell script which runs `git pull` on the project directory before `npm start`. Make sure to make boot completed only after network connectivity.

### Auto-Start
On Raspberry Pi, use `sudo crontab -e` and then add `@reboot [THE SHELL SCRIPT YOU JUST CREATED]` to the bottom of the file. `@reboot` runs the script automatically upon every boot.

Another option is to use `upstart`. But this seems highly dodgy as `sudo apt-get install upstart` changes your `LXDE` theme for some reason.
