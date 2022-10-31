import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

const config = require('../.config/config_google_sheet.json');

@Injectable()
export class KRTRKAAService {

  async getAllTracks() : Promise<Object[]> {
    const result = [];
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
        // TODO : 수동지정이 아닌 값이 있는 셀만 자동선택될 수 있는지 찾아볼 것
    });

    let tmpObj = {};
    context.data.values.forEach((item, idx, arr) => {
        if( idx != 0) {
            tmpObj = {};
            item.forEach((a, b) => {
                tmpObj[arr[0][b]] = a
            })
            result.push(tmpObj);
        }
    })
    return result;
  }

  async getTrackInfo(trackId : String){
    const tracks : Promise<Object[]> = this.getAllTracks();

    const result : Object = (await tracks).find( track => track['NO'] == trackId )

    return result;
  }

}