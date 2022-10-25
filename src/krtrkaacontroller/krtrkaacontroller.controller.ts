import { Controller, Get } from '@nestjs/common';
import { google } from 'googleapis';

const config = require('../../.config/config_google_sheet.json');

@Controller('tracks')
export class KrtrkaacontrollerController {
    
    @Get()
    default() : string {
        return 'return all track'
    }

    @Get("all")
    async getListAll() : Promise<object> {
        const result = {};

        const auth = new google.auth.JWT({
            email: config.client_email,
            key: config.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const sheet = google.sheets({
            version: 'v4',
            auth: auth
        });
        const context = await sheet.spreadsheets.values.get({
            spreadsheetId: config.sheet_id,
            range: 'A1:K44'
        });

        // context.data.values.forEach( (item, idx, arr) => {
        //     console.log(idx);
        // })

        return context.data.values;
    }
}
