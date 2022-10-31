import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { KRTRKAAService } from 'src/krtrkaa.service';


@Controller('track')
export class KrtrkaacontrollerController {
    private readonly krtrkaaService;
    constructor(service: KRTRKAAService) {  
        this.krtrkaaService = service;
    }
    
    @Get()
    default() : string {
        return 'return all track'
    }

    @Get('all')
    getListAll() : Array<Object> {
        return this.krtrkaaService.getAllTracks();
    }

    @Get('info/:id')
    findOne(@Param() params) : Object {
        return this.krtrkaaService.getTrackInfo(params.id);
    }

    @Redirect('https://www.youtube.com', 301)
    @Get('play/:id')
    async goToTrack(@Param('id') id: String ) {
        const trackInfo : Object = await this.krtrkaaService.getTrackInfo(+id);
        // console.log(trackInfo);
        return { url : trackInfo['SONG_YTB_URL'] }
    }

}