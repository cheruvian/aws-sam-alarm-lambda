'use strict';
console.log('Loading function');
const async = require('async');

exports.handler = (event, context, callback) => {
    async.each(
        event.Records,
        (record) => {
            console.log(record.Sns.Subject);
            const alarmPayload = JSON.parse(record.Sns.Message);
            console.log(`Alarm ${alarmPayload.AlarmName} went into ${alarmPayload.NewStateValue}: ${alarmPayload.NewStateReason}`);
            console.log('Putting out the fire!!!! http://ascii.co.uk/\n' +
                '                                                )\n' +
                '   ,%,                                     ) _(___[]_\n' +
                '   %%%,&&&,                     ,%%,      (;`       /\\\n' +
                '   %Y/%&&&&                     %%%%   ___/_____)__/ _\\__     ,%%,\n' +
                ' ^^^||^&\\Y&^^^^^^^^^^^^^^^^^^^^^%Y/%^^/ (_()   (  | /____/\\^^^%%%%^^\n' +
                '   `    || _,..=xxxxxxxxxxxx,    ||   |(\' |LI (.)I| | LI ||   %\\Y%\n' +
                '  -=      /L_Y.-"""""""""`,-n-. `    @\'---|__||___|_|____||_   ||\n' +
                ' ___-=___.--\'[========]|L]J: []\\ __________@//@___________) )______\n' +
                '-= _ _ _ |/ _ \'\'_ " " ||[ -_ 4 |  _  _  _  _  _  _  _  _  _  _  _\n' +
                '         \'-(_)-(_)----\'v\'-(_)--\'\n' +
                'jgs-----------------------------------------------------------------\n');
         },
         callback
    );
};
